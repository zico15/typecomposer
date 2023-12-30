import {
  type DataElement,
  Component,
  DivElement,
  GridElement,
  IComponent,
} from "..";
import { Register } from "../../decorators";

export type Border = "top" | "left" | "center" | "right" | "bottom";

export class BorderPaneElement extends Component {
  public static readonly TOP: Border = "top";
  public static readonly LEFT: Border = "left";
  public static readonly CENTER: Border = "center";
  public static readonly RIGHT: Border = "right";
  public static readonly BOTTOM: Border = "bottom";

  private _top: IComponent = new DivElement();
  private _left: IComponent = new DivElement();
  private _center: GridElement = new GridElement({
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateRows: "auto",
  });
  private _centerPane: IComponent = new DivElement();
  private _right: IComponent = new DivElement();
  private _bottom: IComponent = new DivElement();

  constructor(data?: DataElement) {
    super(data);
    this.addClasName("border-pane");
    this.appendChilds(this.top, this._center, this.bottom);
    this._center.appendChilds(this.left, this._centerPane, this.right);
    // // debugger;
    // this.top.style.backgroundColor = "green";
    // this.left.style.backgroundColor = "#a52a2a";
    // this.center.style.backgroundColor = "blue";
    // this.right.style.backgroundColor = "red";
    // this.bottom.style.backgroundColor = "red";
    // this._centerPane.style.backgroundColor = "yellow";
  }

  get top(): IComponent {
    return this._top;
  }

  get left(): IComponent {
    return this._left;
  }

  get center(): IComponent {
    return this._centerPane;
  }

  get containerCenter(): GridElement {
    return this._center;
  }

  get right(): IComponent {
    return this._right;
  }

  get bottom(): IComponent {
    return this._bottom;
  }

  set top(component: IComponent) {
    this._top?.remove();
    this._top = component;
    this.innerHTML = "";
    this.appendChilds(this.top, this._center, this.bottom);
  }

  set left(component: IComponent) {
    this._left?.remove();
    this._left = component;
    this._center.innerHTML = "";
    this._center.appendChilds(this.left, this._centerPane, this.right);
  }

  set center(component: IComponent) {
    this._centerPane.remove();
    this._centerPane = component;
    this._center.innerHTML = "";
    this._center.appendChilds(this.left, this._centerPane, this.right);
  }

  set right(component: IComponent) {
    this._right?.remove();
    this._right = component;
    this._center.innerHTML = "";
    this._center.appendChilds(this.left, this._centerPane, this.right);
  }

  set bottom(component: IComponent) {
    this._bottom?.remove();
    this._bottom = component;
    this.innerHTML = "";
    this.appendChilds(this.top, this._center, this.bottom);
  }
}
// @ts-ignore
customElements.define("border-pane", BorderPaneElement);
