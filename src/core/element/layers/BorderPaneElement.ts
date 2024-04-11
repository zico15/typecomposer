import { type StyleOptional, DivElement, GridElement, IComponent, ILayout } from "../..";

export class BorderPaneElement extends ILayout {
  private _top: IComponent = new DivElement();
  private _left: IComponent = new DivElement();
  private _center: GridElement = new GridElement();
  private _centerPane: IComponent = new DivElement();
  private _right: IComponent = new DivElement();
  private _bottom: IComponent = new DivElement();
  private _variant: "primary" | "secondary";

  constructor(
    optional?: StyleOptional & {
      variant?: "primary" | "secondary";
    },
  ) {
    super(optional);
    this.variant = optional?.variant || "primary";
    this.addClasName("border-pane");
  }

  get variant(): string {
    return this._variant;
  }

  set variant(variant: "primary" | "secondary") {
    this._variant = variant;
    if (this._center == undefined) return;
    if (variant == "primary") {
      this.style.gridTemplateRows = "auto 1fr auto";
      this.style.gridTemplateColumns = "auto";
      this._center.style.gridTemplateColumns = "auto 1fr auto";
      this._center.style.gridTemplateRows = "auto";
      this.innerHTML = "";
      super.append(this.top, this._center, this.bottom);
      this._center.innerHTML = "";
      this._center.append(this.left, this._centerPane, this.right);
    } else {
      this.style.gridTemplateRows = "auto";
      this.style.gridTemplateColumns = "auto 1fr auto";
      this._center.style.gridTemplateRows = "auto 1fr auto";
      this._center.style.gridTemplateColumns = "auto";
      this.innerHTML = "";
      super.append(this.left, this._center, this.right);
      this._center.innerHTML = "";
      this._center.append(this.top, this._centerPane, this.bottom);
    }
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
    if (this.variant == "primary") {
      this.innerHTML = "";
      super.append(this.top, this._center, this.bottom);
    } else {
      this._center.innerHTML = "";
      this._center.append(this.top, this._centerPane, this.bottom);
    }
  }

  set left(component: IComponent) {
    this._left?.remove();
    this._left = component;
    if (this.variant == "primary") {
      this._center.innerHTML = "";
      this._center.append(this.left, this._centerPane, this.right);
    } else {
      this.innerHTML = "";
      this.append(this.left, this._center, this.right);
    }
  }

  set center(component: IComponent) {
    this._centerPane.remove();
    this._centerPane = component;
    this._center.innerHTML = "";
    if (this.variant == "primary") this._center.append(this.left, this._centerPane, this.right);
    else this._center.append(this.top, this._centerPane, this.bottom);
  }

  set right(component: IComponent) {
    this._right?.remove();
    this._right = component;
    if (this.variant == "primary") {
      this._center.innerHTML = "";
      this._center.append(this.left, this._centerPane, this.right);
    } else {
      this.innerHTML = "";
      this.append(this.left, this._center, this.right);
    }
  }

  set bottom(component: IComponent) {
    this._bottom?.remove();
    this._bottom = component;
    if (this.variant == "primary") {
      this.innerHTML = "";
      super.append(this.top, this._center, this.bottom);
    } else {
      this._center.innerHTML = "";
      this._center.append(this.top, this._centerPane, this.bottom);
    }
  }
}
customElements.define("border-pane", BorderPaneElement);
