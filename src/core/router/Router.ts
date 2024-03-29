import { IComponent, RouteView } from "..";
import { RouterGuard } from "./RouterGuard";

type Component = new () => IComponent;

export interface RoutePage {
  path: string;
  component?: Component;
  children?: RoutePage[];
  redirect?: string;
  guard?: RouterGuard;
}

interface RoutePageBuild extends RoutePage {
  parent: RoutePageBuild;
  build: IComponent;
  routeView: RouteView | undefined;
  id?: string;
}

class RouterController {
  private _route: Router | undefined = undefined;
  public routePages: RoutePageBuild[] = [];
  private currentRoute: RoutePageBuild[] = [];
  private previousRoute: RoutePageBuild[] = [];
  private static _props: any = {};
  private urlLast: string = "";

  constructor() {
    window.addEventListener("load", () => {
      this.updateRoute(
        this.route.history == "history"
          ? window.location.pathname
          : window.location.hash,
      );
    });
    window.addEventListener("popstate", () => {
      this.updateRoute(
        this.route.history == "history"
          ? window.location.pathname
          : window.location.hash,
      );
    });
  }

  doRoutesMatch(route1: string, route2: string): boolean {
    // Replace '*' with a regex pattern that matches any segment
    const routePattern2 = route2.replace(/\*/g, "[a-zA-Z0-9-]+");

    // Create regex patterns for the routes
    const regex2 = new RegExp(`^${routePattern2}$`);

    // Test if both routes match each other
    return regex2.test(route1);
  }

  findCorrectRoute(
    pathname: string,
    routes: RoutePage[] = this.route?.routes || [],
  ): string {
    if (routes) {
      for (const route of routes) {
        if (this.doRoutesMatch(pathname, route.path)) {
          this.currentRoute.push({
            ...route,
            build: undefined,
            routeView: undefined,
            parent:
              this.currentRoute.length > 0
                ? this.currentRoute[this.currentRoute.length - 1]
                : undefined,
          });
          return route.path;
        }
      }
      for (const route of routes) {
        if (route.children) {
          this.currentRoute.push({
            ...route,
            build: undefined,
            routeView: undefined,
            parent:
              this.currentRoute.length > 0
                ? this.currentRoute[this.currentRoute.length - 1]
                : undefined,
          });
          const r = this.findCorrectRoute(pathname, route.children);
          if (r != "/") return r;
          else this.currentRoute.pop();
        }
      }
    }
    return "/";
  }

  private async buildRoute(
    routes: RoutePage[] = this.route?.routes,
    parent: string = "",
  ): Promise<boolean> {
    if (routes) {
      for (let route of routes) {
        route.path = parent + route.path;
        if (route.children) {
          this.buildRoute(
            route.children,
            route.path == "/" ? route.path : route.path + "/",
          );
        }
      }
    }
    return true;
  }

  private async buildPages() {
    let routePageBuildLast: RoutePageBuild | undefined = undefined;
    for (let i: number = 0; i < this.currentRoute.length; i++) {
      if (
        this.previousRoute[i] != undefined &&
        this.currentRoute[i].id == this.previousRoute[i].id
      ) {
        routePageBuildLast = this.previousRoute[i];
        this.currentRoute[i] = this.previousRoute[i];
        if (this.currentRoute[i + 1])
          this.currentRoute[i + 1].parent = this.currentRoute[i];
      } else if (this.currentRoute[i].guard) {
        const fallbackRoute = this.currentRoute[i].guard.fallbackRoute;
        const result = await this.currentRoute[i].guard.beforeEach();
        if (!result) {
          this.currentRoute = this.previousRoute;
          console.log("Fallback route: ", fallbackRoute);
          Router.go(fallbackRoute || this.urlLast);
          return;
        }
      }
    }
    const toBuild = this.currentRoute[0];
    if (toBuild.build == undefined) {
      toBuild.build = new toBuild.component();
      this.setView(toBuild.build);
    }
    if (routePageBuildLast?.routeView) {
      routePageBuildLast.routeView["updateView"]();
    }
    this.previousRoute = this.currentRoute;
    this.urlLast = window.location.pathname;
  }

  private updateRoute(pathname: string) {
    pathname = pathname.replace(/^#/, "");
    if (pathname.charAt(0) != "/") pathname = "/" + pathname;
    this.previousRoute = this.currentRoute;
    this.currentRoute = [];
    this.findCorrectRoute(pathname);
    if (this.currentRoute.length == 0) this.pageNotFound();
    else this.buildPages();
  }

  getProps(routePage: RoutePageBuild): any {
    let props = {};
    if (routePage) {
      props = this.props[routePage.id.split("_")[0]] || {};
    }
    return props;
  }

  get route(): Router | undefined {
    return this._route;
  }

  set route(value: Router | undefined) {
    this._route = value;
    const isHistory = this.buildRoute();
    let pathname = window.location.pathname;
    if (pathname.charAt(pathname.length - 1) == "/") {
      pathname = pathname.substring(0, pathname.length - 1) || "/";
    }
    if (this.route.history == "hash") {
      pathname = window.location.hash.replace(/^#/, "");
    }
    if (isHistory) this.addHistory(pathname);
  }

  get props(): any {
    return RouterController._props;
  }

  set props(value: any) {
    RouterController._props = value;
  }

  public addHistory(pathname: string) {
    pathname = pathname.replace(/^#/, "");
    if (pathname.charAt(0) != "/") pathname = "/" + pathname;
    if (this.route.history == "hash") window.location.hash = "#" + pathname;
    else window.history.pushState({}, "", pathname);
  }

  public getRouteViewFree(routeView: RouteView): RoutePageBuild | undefined {
    let index = Array.from<RouteView>(
      document.querySelectorAll("route-view") || [],
    ).findIndex((r) => r == routeView);
    if (index == -1 || index >= this.currentRoute.length) return undefined;
    this.currentRoute[index++].routeView = routeView;
    return this.currentRoute.length > index
      ? this.currentRoute[index]
      : undefined;
  }

  public getView(routeView: RoutePageBuild): IComponent | undefined {
    if (routeView) {
      if (routeView.build == undefined) {
        routeView.build = new routeView.component();
      }
      return routeView.build;
    }
    return undefined;
  }

  private pageNotFound(): void {
    if (this.route?.pageNotFound) this.setView(new this.route.pageNotFound());
    else {
      const body = document.createElement("body") as HTMLBodyElement;
      body.style.width = "100%";
      body.style.height = "100%";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.innerHTML =
        "<div style='text-align: center;'>" +
        "<h1 style='text-shadow: 0 3px 0px $color-base, 0 6px 0px #333; color: #f54f59; font-size: 6em; font-weight: 700; line-height: 0.6em;'>404</h1>" +
        "<h1 style='text-shadow: 0 3px 0px $color-base, 0 6px 0px #333; color: #f54f59; font-size: 10; font-weight: 15; line-height: 0.6em;'>Page not found</h1>" +
        "</div>";
      document.body = body;
    }
  }

  private setView<T extends IComponent>(view: T) {
    if (!(document.body.lastElementChild instanceof HTMLScriptElement))
      document.body?.lastElementChild?.remove();
    document.body.appendChild(view);
  }
}

export class Router {
  public static controller: RouterController = new RouterController();
  private static _props: any = {};

  constructor(
    public routes: RoutePage[] = [],
    public history: "hash" | "history" = "history",
    public pageNotFound: Component = undefined,
  ) {
    Router.createAutoId(this.routes, 0);
  }

  public beforeEach(callback: (to: RoutePage) => void) {
    // console.log("beforeEach: ", callback);
  }

  public static get props(): any {
    return Router._props;
  }

  static create(data: {
    routes: RoutePage[];
    history?: "hash" | "history";
    pageNotFound?: Component;
  }): void {
    if (Router.controller.route) throw new Error("Router already exists");
    Router.controller.route = new Router(
      data.routes,
      data.history,
      data.pageNotFound,
    );
  }

  private static createAutoId(routes: RoutePage[] = [], id: number) {
    for (const route of routes) {
      route["id"] = `${route.path}_${++id}`;
      if (route.children) {
        id = this.createAutoId(route.children, id);
      }
    }
    return id;
  }
  public static async go(pathname: string, props: {} = {}) {
    Router._props = props;
    this.controller.addHistory(pathname);
  }
}
