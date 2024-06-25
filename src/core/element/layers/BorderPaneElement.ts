import { type StyleOptional, DivElement, IComponent, ILayout, HtmlElement } from "../..";

export class BorderPaneElement extends ILayout {
  private _top: HTMLElement;
  private _left: HTMLElement;
  private _center: HTMLElement;
  private _right: HTMLElement;
  private _bottom: HTMLElement;

  constructor(
    optional?: StyleOptional & {
      variant?: "primary" | "secondary";
    },
  ) {
    super(optional);
    this.variant = optional?.variant;
    this.addClassName("border-pane");
    this._left = this.appendChild(new DivElement());
    this._top = this.appendChild(new DivElement());
    this._center = this.appendChild(new DivElement());
    this._right = this.appendChild(new DivElement());
    this._bottom = this.appendChild(new DivElement());
    this._top.setAttribute("slot", "top");
    this._left.setAttribute("slot", "left");
    this._center.setAttribute("slot", "center");
    this._right.setAttribute("slot", "right");
    this._bottom.setAttribute("slot", "bottom");
  }

  set variant(variant: "primary" | "secondary") {
    super.variant = variant;
  }

  get top(): HTMLElement {
    return this._top as any;
  }

  get left(): HTMLElement {
    return this._left as any;
  }

  get center(): HTMLElement {
    return this._center as any;
  }

  get right(): HTMLElement {
    return this._right as any;
  }

  get bottom(): HTMLElement {
    return this._bottom as any;
  }

  set top(component: HTMLElement) {
    this._top?.remove();
    this.innerHTML = "";
    this._top = component;
    component.setAttribute("slot", "top");
    this.append(this._left, this._top, this._center, this._right, this._bottom);
  }

  set left(component: HTMLElement) {
    this._left?.remove();
    this._left = component;
    component.setAttribute("slot", "left");
    this.append(this._left, this._top, this._center, this._right, this._bottom);
  }

  set center(component: HTMLElement) {
    this._center?.remove();
    this._center = component;
    component.setAttribute("slot", "center");
    this.append(this._left, this._top, this._center, this._right, this._bottom);
  }

  set right(component: HTMLElement) {
    this._right?.remove();
    this._right = component;
    component.setAttribute("slot", "right");
    this.append(this._left, this._top, this._center, this._right, this._bottom);
  }

  set bottom(component: HTMLElement) {
    this._bottom?.remove();
    this._bottom = component;
    component.setAttribute("slot", "bottom");
    this.append(this._left, this._top, this._center, this._right, this._bottom);
  }

  getTop<T>(): T {
    return this._top as T;
  }

  getLeft<T>(): T {
    return this._left as T;
  }

  getCenter<T>(): T {
    return this._center as T;
  }

  getRight<T>(): T {
    return this._right as T;
  }

  getBottom<T>(): T {
    return this._bottom as T;
  }
}
customElements.define("border-pane", BorderPaneElement);
