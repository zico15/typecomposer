import { IComponent, RouteView } from "..";

export interface RoutePage<IComponent = any> {
  path: string;
  component?: IComponent;
  children?: RoutePage[];
  redirect?: string;
}

interface RoutePageBuild extends RoutePage {
  parent: RoutePageBuild;
  isFree: boolean;
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

  constructor() {
    window.onload = () => {
      if (this.route) this.updateRoute(window.location.pathname);
    };
    window.onpopstate = () => {
      console.log("popstate: ", window.location.pathname);
      this.updateRoute(window.location.pathname);
    };
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
    routes: RoutePage[] = this.route?.routes,
  ): string {
    if (routes) {
      for (const route of routes) {
        if (this.doRoutesMatch(pathname, route.path)) {
          this.currentRoute.push({
            ...route,
            build: undefined,
            routeView: undefined,
            isFree: true,
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
            isFree: true,
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

  buildRoute(routes: RoutePage[] = this.route?.routes, parent: string = "") {
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
  }

  buildPages() {
    for (let i: number = 0; i < this.currentRoute.length; i++) {
      if (
        this.previousRoute[i] != undefined &&
        this.currentRoute[i].id == this.previousRoute[i].id
      ) {
        this.currentRoute[i] = this.previousRoute[i];
        if (this.currentRoute[i + 1])
          this.currentRoute[i + 1].parent = this.currentRoute[i];
      }
    }
    const toBuild = this.currentRoute[0];
    if (toBuild.build == undefined) {
      toBuild.isFree = false;
      toBuild.build = new toBuild.component();
      this.setView(toBuild.build);
    } else {
      // console.log("toBuild: ", this.currentRoute);
      for (let i = 1; i < this.currentRoute.length; i++) {
        if (this.currentRoute[i].build == undefined) {
          // console.log("updateView: ", this.currentRoute[i]);
          if (this.currentRoute[i].parent.routeView) {
            // console.log("updateView: chamada");
            this.currentRoute[i].parent.routeView["updateView"](
              this.currentRoute[i],
            );
          }
          break;
        }
      }
    }
    this.previousRoute = this.currentRoute;
  }

  public updateRoute(pathname: string) {
    this.previousRoute = this.currentRoute;
    this.currentRoute = [];
    this.findCorrectRoute(pathname);
    this.addHistory(pathname);
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
    this.buildRoute();
    let pathname = window.location.pathname;
    if (pathname.charAt(pathname.length - 1) == "/") {
      pathname = pathname.substring(0, pathname.length - 1) || "/";
    }
    this.updateRoute(pathname);
  }

  get props(): any {
    return RouterController._props;
  }

  set props(value: any) {
    RouterController._props = value;
  }

  public addHistory(pathname: string) {
    if (this.route) {
      if (this.route.history == "history")
        window.history.pushState({}, "", pathname);
      else if (this.route.history == "hash") window.location.hash = pathname;
    }
  }

  public getRouteViewFree(): RoutePageBuild | undefined {
    const routePage = this.currentRoute.find((routePage) => routePage.isFree);
    if (routePage) routePage.isFree = false;
    return routePage;
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
    public history: "hash" | "history" = "hash",
  ) {
    Router.createAutoId(this.routes, 0);
  }

  public beforeEach(callback: (to: RoutePage) => void) {
    // console.log("beforeEach: ", callback);
  }

  public static get props(): any {
    return Router._props;
  }

  public static create(data: {
    routes: RoutePage[];
    history?: "hash" | "history";
  }): void {
    Router.controller.route = new Router(data.routes, data.history);
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
    if (pathname.charAt(0) != "/") pathname = "/" + pathname;
    Router._props = props;
    this.controller.updateRoute(pathname);
  }
}
