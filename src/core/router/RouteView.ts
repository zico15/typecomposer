import { Component, IComponent, Router, StyleOptional } from "../..";
import { RoutePage } from "./Router";

interface RoutePageBuild extends RoutePage {
  parent: RoutePageBuild;
  build?: IComponent;
  routeView?: RouteView;
  id?: string;
}

export class RouteView extends Component {
  private _view: IComponent | undefined = undefined;
  private _url: string = "";
  private routePage: RoutePageBuild | undefined = undefined;

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
    this.updateView();
  }

  private updateView() {
    const routePage = Router.controller.getRouteViewFree(this);
    if (routePage == undefined) {
      this.view = undefined;
      return;
    }
    if (routePage == this.routePage) return;
    routePage.build = routePage.build || new routePage.component!();
    this.routePage = routePage;
    this.view = routePage.build;
  }

  disconnectedCallback() {
    if (this.routePage) this.routePage.routeView = undefined;
    this.routePage = undefined;
  }

  get view(): IComponent | undefined {
    return this._view;
  }

  set view(value: IComponent | undefined) {
    if (this._view == value) return;
    if (this._view) this._view.remove();
    this._view = value;
    if (value) this?.append(value);
  }
}
// @ts-ignore
customElements.define("route-view", RouteView);
