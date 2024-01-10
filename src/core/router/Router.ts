import { IComponent, RouteView } from "..";
import { build } from "vite";

export interface RoutePage<IComponent = any> {
  path: string;
  component?: IComponent;
  children?: RoutePage[];
  redirect?: string;
}

interface RoutePageBuild extends RoutePage {
  parent: RoutePageBuild;
  isFree: boolean;
  build?: IComponent;
  routeView?: RouteView;
}

class RouterController {
  private _route: Router | undefined = undefined;
  public routePages: RoutePageBuild[] = [];
  private currentRoute: RoutePageBuild[] = [];
  private previousRoute: RoutePageBuild[] = [];

  constructor() {
    window.onload = () => {
      if (this.route) {
        // const view: RoutePageBuild = {...this.route.routes[0], parent: undefined, isFree: true};
        // this.setView(view);
        // console.log("onload: ", window.location.pathname);
        // console.log("route: ", this.route);
      }
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
    const toBuild = this.currentRoute[0];
    toBuild.build = new toBuild.component();
    toBuild.isFree = false;
    this.setView(toBuild.build);
  }

  public updateRoute(pathname) {
    this.previousRoute = [...this.currentRoute];
    this.currentRoute = [];
    this.findCorrectRoute(pathname);
    this.addHistory(pathname);
    if (this.currentRoute.length == 0) this.pageNotFound();
    else this.buildPages();
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

  public addHistory(pathname: string) {
    if (this.route) {
      if (this.route.history == "history")
        window.history.pushState({}, "", pathname);
      else if (this.route.history == "hash") window.location.hash = pathname;
    }
  }

  // public async setRoutePages(path: string): Promise<RoutePageBuild[]> {
  //   this.addHistory(path);
  //   const partesDaUrl = path.split(/\/+/).filter(Boolean);
  //   await this.getRoutePages(
  //     ["/", ...partesDaUrl],
  //     0,
  //     this.route?.routes || [],
  //   );
  //   return this.routePages;
  // }

  public getRouteViewFree(): RoutePageBuild | undefined {
    const routePage = this.currentRoute.find((routePage) => routePage.isFree);
    if (routePage) routePage.isFree = false;
    return routePage;
  }

  public getView(routeView: RoutePageBuild): IComponent | undefined {
    if (routeView) {
      if (routeView.build == undefined) {
        console.log("build: ", routeView.component);
        routeView.build = new routeView.component();
      }
      return routeView.build;
    }
    return undefined;
  }

  private pageNotFound(): void {
    const body = document.createElement("body") as HTMLBodyElement;
    // body.style.backgroundColor = "#404853";
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
      document.body.lastElementChild.remove();
    document.body.appendChild(view);
  }

  // private async getRoutePages(
  //   paths: string[],
  //   index: number,
  //   routes: RoutePage[],
  // ) {
  //   if (index == 0) this.routePages = [];
  //   let routePage: RoutePage | undefined = undefined;
  //   for (const route of routes) {
  //     if (paths[index] == route.path || route.path == "*") {
  //       routePage = route;
  //       this.routePages.push({
  //         ...routePage,
  //         parent: this.routePages[index - 1],
  //         isFree: true,
  //       });
  //       console.log("path: ", routePage);
  //       break;
  //     }
  //   }
  //   if (routePage)
  //     this.getRoutePages(paths, index + 1, routePage.children || []);
  //   else {
  //     console.log(
  //       "not found: ",
  //       paths[index],
  //       " paths: ",
  //       paths.length,
  //       " routes: ",
  //       this.routePages.length,
  //     );
  //     console.log("routePages: ", this.routePages);
  //   }
  // }
}

export class Router {
  public static controller: RouterController = new RouterController();

  constructor(
    public routes: RoutePage[] = [],
    public history: "hash" | "history" = "hash",
  ) {}

  // private static sortRoutes(routes: RoutePage[]): RoutePage[] {
  //   const r = routes.sort((a, b) => {
  //     if (a.path == "*") return 1;
  //     if (b.path == "*") return -1;
  //     return a.path.length - b.path.length;
  //   });
  //   for (const route of r) {
  //     if (route.children) route.children = this.sortRoutes(route.children);
  //   }
  //   return r;
  // }

  public beforeEach(callback: (to: RoutePage) => void) {
    // console.log("beforeEach: ", callback);
  }

  public static create(data: {
    routes: RoutePage[];
    history?: "hash" | "history";
  }): Router {
    // const routes = this.sortRoutes(data.routes);
    return new Router(data.routes, data.history);
  }

  public static async use<T = any>(routerImport: () => Promise<T>) {
    const router: Router = ((await routerImport()) as any)?.default;
    console.log("use: ", router);
    Router.controller.route = router;
  }

  public static async go(pathname: string, props: {} = {}) {
    console.log("go: ", pathname);
    if (pathname.charAt(0) != "/") pathname = "/" + pathname;
    this.controller.updateRoute(pathname);
    // if (pathname.charAt(0) != "/") pathname = "/" + pathname;
    // const routePages = Router.controller.routePages;
    // this.controller.setRoutePages(pathname).then(async (pages) => {
    //   let routePageBuild: RoutePageBuild | undefined = undefined;
    //   let routePageBuildNext: RoutePageBuild | undefined = undefined;
    //   for (let i: number = 0; i < pages.length; i++) {
    //     if (routePages[i] && pages[i].path == routePages[i].path) {
    //       pages[i].build = routePages[i].build;
    //       pages[i].routeView = routePages[i].routeView;
    //       pages[i].isFree = routePages[i].isFree;
    //       routePageBuild = pages[i];
    //     } else {
    //       routePageBuildNext = pages[i];
    //       break;
    //     }
    //   }
    //   console.log("routePageBuild: ", routePageBuild);
    //   console.log("routePageBuildNext: ", routePageBuildNext);
    //   if (routePageBuild && routePageBuild.routeView) {
    //     routePageBuild.routeView["updateView"](
    //       routePageBuildNext || routePageBuild,
    //     );
    //   }
    // });
  }
}
