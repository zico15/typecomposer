import { Component, StyleOptional, IComponent, Router } from "..";
import { RoutePage } from "./Router";

interface RoutePageBuild extends RoutePage {
  parent: RoutePageBuild;
  isFree: boolean;
  build?: IComponent;
  routeView?: RouteView;
  id?: string;
}

export class RouteView extends Component {
  private _view: IComponent | undefined = undefined;
  private _url: string = "";
  private routePage: RoutePageBuild | undefined;

  constructor(
    optional?: StyleOptional & {
      onUpdateView?: (view?: IComponent) => void;
    },
  ) {
    super(optional);
  }

  get url(): string {
    return this._url;
  }

  connectedCallback() {
    if (this.routePage == undefined)
      this.updateView(Router.controller.getRouteViewFree());
  }

  private updateView(routePage: RoutePageBuild | undefined) {
    if (routePage == undefined) {
      this.view = undefined;
      return;
    }
    if (routePage.parent) routePage.parent.routeView = this;
    routePage.isFree = false;
    routePage.build = routePage.build || new routePage.component!();
    this.routePage = routePage;
    this.view = routePage.build;
  }

  disconnectedCallback() {
    if (this.routePage?.parent) {
      this.routePage.parent.routeView = undefined;
    }
    this.routePage = undefined;
  }

  get view(): IComponent | undefined {
    return this._view;
  }

  set view(value: IComponent | undefined) {
    if (this._view == value) return;
    if (this._view) this._view.remove();
    this._view = value;
    this.append(value);
  }

  public onUpdateView = (view?: IComponent) => {
    this.view = view;
  };
}
// @ts-ignore
customElements.define("route-view", RouteView);
