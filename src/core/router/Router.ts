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
  build?: IComponent;
  routeView?: RouteView;
}

class RouterController {
  private _route: Router | undefined = undefined;
  public routePages: RoutePageBuild[] = [];

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
    };
  }

  get route(): Router | undefined {
    return this._route;
  }

  set route(value: Router | undefined) {
    this._route = value;
    console.log("onload: ", window.location.pathname);
    console.log("route: ", this.route);
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
    const routePage = this.routePages.find((routePage) => routePage.isFree);
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
    body.style.backgroundColor = "#404853";
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
    document.body.removeChild(document.body.firstChild);
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
  ) { }

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
    Router.controller.route = router;
  }

  public static async go(pathname: string, props: {} = {}) {
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
