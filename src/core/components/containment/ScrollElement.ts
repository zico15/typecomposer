import { Component, StyleOptional } from "../..";

export class ScrollElement extends Component {
  constructor(
    optional?: StyleOptional & {
      horizontal?: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset";
      vertical?: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset";
    },
  ) {
    super(optional);
    if (optional?.horizontal != undefined) this.horizontal = optional.horizontal;
    if (optional?.vertical != undefined) this.vertical = optional.vertical;
  }

  public set horizontal(horizontal: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset") {
    if (typeof horizontal == "string") this.style.overflowX = horizontal;
    else if (horizontal) this.style.overflowX = "auto";
    else this.style.overflowX = "hidden";
  }

  public set vertical(vertical: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset") {
    if (typeof vertical == "string") this.style.overflowY = vertical;
    else if (vertical) this.style.overflowY = "auto";
    else this.style.overflowY = "hidden";
  }

  public get horizontal(): "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset" {
    return this.style.overflowX.toString() as any;
  }

  public get vertical(): "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset" {
    return this.style.overflowY.toString() as any;
  }
}
customElements.define("scroll-element", ScrollElement);
