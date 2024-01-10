import { Component, StyleOptional, IComponent, Router } from "..";

export class RouteView extends Component {
  private _view: IComponent | undefined = undefined;
  private _url: string = "";
  private routePage: any | undefined;

  constructor(
    optional?: StyleOptional & {
      onUpdateView?: (view?: IComponent) => void;
    },
  ) {
    super(optional);
    // if (optional?.onUpdateView) this.onUpdateView = optional.onUpdateView;
    this.routePage = Router.controller.getRouteViewFree() as any;
    console.log("No construtor: ", this.routePage);
    if (this.routePage != undefined) {
      this.setRoutePage(this.routePage);
      this.view = new this.routePage.component();
    }
  }

  get url(): string {
    return this._url;
  }

  // connectedCallback() {
  //   this.routePage = Router.controller.getRouteViewFree() as any;
  //   // this.updateView(this.routePage);
  // }

  private setRoutePage(routePage: any | undefined) {
    this.routePage = routePage;
    if (this.routePage != undefined) this._url = this.routePage?.path || "";
    if (this.routePage != undefined && this.routePage.parent) {
      this.routePage.parent.routeView = this;
    }
  }

  // private updateView(routePage: any) {
  //   this.setRoutePage(routePage);
  //   if (routePage) {
  //     const view = Router.controller.getView(routePage);
  //     console.log("RouteView: ", this._url, " view: ", view);
  //     this.view = view;
  //   } else this.view = undefined;
  // }

  // disconnectedCallback() {
  //   if (this.routePage && this.routePage.parent) {
  //     this.routePage.parent.routeView = undefined;
  //   }
  // }

  get view(): IComponent | undefined {
    return this._view;
  }

  set view(value: IComponent | undefined) {
    if (this._view == value) return;
    this._view = value;
    console.log("RouteView: ", this._url, " view: ", value);
    if (value == undefined) {
      for (const child of Array.from(this.children)) {
        child.remove();
      }
    } else this.append(value);
  }

  public onUpdateView = (view?: IComponent) => {
    this.view = view;
  };
}
// @ts-ignore
customElements.define("route-view", RouteView);
