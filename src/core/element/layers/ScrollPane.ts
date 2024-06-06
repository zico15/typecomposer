import { type StyleOptional, ILayout } from "../..";

export class ScrollPane extends ILayout {
  private _container: HTMLElement = document.createElement("div");

  constructor(
    optional?: StyleOptional & {
      variant?: "default" | string;
      orientation?: "vertical" | "horizontal" | "both";
    },
  ) {
    super(optional);
    if (optional?.variant) this.variant = optional.variant;
    this.addClassName("scroll-pane");
    this._container.addClassName(`container-pane-${optional?.orientation || "both"}`);
    this.style.display = "flex";
    this.style.overflow = "hidden";
    this.style.position = "relative";
    this.container.style.overflow = "auto";
    this.container.style.flex = "1";
    super.appendChild(this._container);
  }

  append(...nodes: (string | Node)[]): void {
    this._container.append(...nodes);
  }

  appendChild<T extends Node>(node: T): T {
    return this._container.appendChild(node);
  }

  remove(): void {
    this._container.remove();
  }

  removeChild<T extends Node>(node: T): T {
    return this._container.removeChild(node);
  }

  get container() {
    return this._container;
  }
}
customElements.define("scroll-pane", ScrollPane);
