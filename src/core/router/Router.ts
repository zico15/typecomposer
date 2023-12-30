import { Component } from "../element";
import { RouteView } from "./RouteView";

export interface RoutePage {
  pathname: string;
  props?: {};
  component: any;
  links?: RoutePage[];
  parent?: RoutePage;
}

class Router {
  private routes: Map<string, RoutePage> = new Map();
  private props: {} = {};
  private index: number = 0;
  private routeLinks: RoutePage[] = [];

  private routeView: RouteView | undefined = undefined;

  constructor() {
    window.onload = (ev) => {
      this.loadPage(window.location.pathname);
      ev.preventDefault();
    };
    window.onpopstate = (ev) => {
      console.log("popstate: ", window.location.pathname);
      this.loadPage(window.location.pathname);
      ev.preventDefault();
    };
  }

  private async getRoutePage(
    pathname: string,
  ): Promise<{ routePage: RoutePage; routeLinks: RoutePage[] }> {
    let routePage = this.routes.get(pathname);
    if (routePage == undefined) return { routePage: undefined, routeLinks: [] };
    const routeLinks = [routePage];
    while (routePage && routePage?.parent != undefined) {
      routePage = routePage?.parent;
      routeLinks.unshift(routePage);
    }
    return { routePage, routeLinks };
  }

  private async loadPage(pathname: string = window.location.pathname) {
    const { routePage, routeLinks } = await this.getRoutePage(pathname);
    this.routeLinks = routeLinks;
    this.index = 0;

    if (routePage != undefined) {
      const page = new routePage.component();
      page.props = this.props;
      this.setApp(page);
      if (page.title != null) window.document.title = page.title;
      else {
        page.title = pathname.substring(
          pathname.indexOf("/") + 1,
          pathname.length,
        );
        window.document.title =
          page.title != undefined
            ? page.title
            : page.title != undefined
              ? page.title
              : "home";
      }
    } else this.pageNotFound();
  }

  protected nextRoutePage(): RoutePage | undefined {
    return this.routeLinks[this.index++];
  }

  public async put<Component>(
    pathname: string,
    page: Component,
    links: RoutePage[] = [],
    parent?: RoutePage,
  ): Promise<RoutePage> {
    const route = {
      pathname: pathname,
      component: page,
      links: links,
      parent: parent,
    };
    this.routes.set(pathname, route);
    if (links.length > 0) {
      const pathname_parent = pathname.replace(/^\/+|\/+$/g, "");
      for await (const link of links) {
        link.pathname = `${pathname_parent}/${link.pathname.replace(
          /^\/+|\/+$/g,
          "",
        )}`;
        if (link.pathname.charAt(0) != "/") link.pathname = "/" + link.pathname;
        await this.put(link.pathname, link.component, link.links || [], route);
      }
    }
    console.log("put: ", route);
    return route;
  }

  public getPate(pathname: string): Component | undefined | null {
    return this.routes.get(pathname).component;
  }

  public remove(route: Component) {
    // this.routes.delete(route.pathname);
  }

  private async checkRouteLink(pathname: string): Promise<boolean> {
    const { routePage, routeLinks } = await this.getRoutePage(pathname);
    if (routePage != undefined) {
      const isRouteLink = routeLinks[0] == this.routeLinks[0];
      console.log("isRouteLink: ", isRouteLink);
      if (!isRouteLink) return false;
      let routeLinkLast = this.routeLinks[this.index];
      this.index = 0;
      for await (const routeLink of routeLinks) {
        if (
          this.index < this.routeLinks.length &&
          routeLink == this.routeLinks[this.index]
        ) {
          routeLinkLast = routeLink;
        } else break;
        this.index++;
      }
      console.log("routeLinkLast: ", routeLinkLast);
      if (routeLinkLast && routeLinkLast["routeView"] != undefined) {
        this.routeLinks = routeLinks;
        this.index > 0 && this.index--;
        routeLinkLast["routeView"].updateView();
      }
      return true;
    }
    return false;
  }

  public async go(pathname: string, props: {} = {}) {
    this.props = props;
    if (pathname.charAt(0) != "/") pathname = "/" + pathname;
    window.history.pushState({}, pathname, window.location.origin + pathname);
    if (typeof pathname == "string") {
      if (await this.checkRouteLink(pathname)) {
      } else this.loadPage(pathname);
    }
  }

  private setApp<T extends Component>(app: T) {
    if (this.routeView != undefined) {
      this.routeView.view = app;
    } else {
      document.body.removeChild(document.body.firstChild);
      document.body.appendChild(app);
    }
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
    console.log(this.props);
    document.body = body;
  }
}

export const router = new Router();
