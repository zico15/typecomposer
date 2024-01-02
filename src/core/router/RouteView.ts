import { Component, StyleOptional, IComponent, router } from "..";
import { RoutePage } from "./Router";

export class RouteView extends Component {
  private _view: IComponent | undefined = undefined;
  private _url: string = "";
  private routePage: RoutePage | undefined = undefined;

  constructor(optional?: StyleOptional) {
    super(optional);
    router["routeView"] = this;
  }

  get url(): string {
    return this._url;
  }

  connectedCallback() {
    this.updateView();
  }

  private updateView() {
    this._url = window.location.pathname;
    const routePage = router["nextRoutePage"]();
    if (routePage != undefined) {
      this.routePage = routePage;
      this.routePage["routeView"] = this;
      const routePageView = routePage.links?.find((link) =>
        this.url.includes(link.pathname),
      );
      if (routePageView && routePageView.component) {
        const component: any = new routePageView.component();
        this.view = component;
      }
    }
  }

  disconnectedCallback() {
    this.routePage["routeView"] = undefined;
  }

  get view(): IComponent | undefined {
    return this._view;
  }

  set view(value: IComponent | undefined) {
    if (this._view != undefined) {
      this._view.remove();
    }
    this._view = value;
    if (value != undefined) {
      this.append(value);
    }
    // if (value != undefined) {
    //   this.style.display = "contents";
    // } else {
    //   this.style.removeProperty("display");
    // }
  }
}
// @ts-ignore
customElements.define("route-view", RouteView);
