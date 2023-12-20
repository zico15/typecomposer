import { Component, DataElement, IComponent, router } from "..";

export class RouteView extends Component {
  private _view: IComponent | undefined = undefined;
  private _url: string = "";

  constructor(
    public classParent: any,
    data?: DataElement,
  ) {
    super(data);
    router["routeView"] = this;
    this._url = window.location.pathname;
  }

  get url(): string {
    return this._url;
  }

  connectedCallback() {
    console.log(
      "RouteView.connectedCallback: ",
      this,
      " routePage: ",
      router.routePage,
    );
    if (router.routePage != undefined) {
      const routePageView = router.routePage.links?.find((link) =>
        this.url.includes(link.pathname),
      );
      console.log("routePageView: ", routePageView);
      if (routePageView && routePageView.component) {
        router.routePage = routePageView;
        const component: any = new routePageView.component();
        this.view = component;
      }
    }
  }

  disconnectedCallback() {
    // router["routeView"] = undefined;
    console.log("RouteView.disconnectedCallback: ", router["routeView"]);
  }

  get view(): IComponent | undefined {
    return this._view;
  }

  set view(value: IComponent | undefined) {
    console.log("RouteView.set view: ", value);
    if (this._view != undefined) {
      this._view.remove();
    }
    this._view = value;
    if (value != undefined) {
      this.append(value);
    }
    if (value != undefined) {
      this.style.display = "contents";
    } else {
      this.style.removeProperty("display");
    }
  }
}

customElements.define("route-view", RouteView);
