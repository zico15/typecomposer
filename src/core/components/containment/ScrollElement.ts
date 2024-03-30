import { Component, StyleOptional } from "../../element";

export interface DataScrollElement extends StyleOptional {
  horizontal?: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset";
  vertical?: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset";
}

export class ScrollElement extends Component {
  constructor(optional?: DataScrollElement) {
    super(optional);
    if (optional?.horizontal != undefined) this.setScrollHorizontal(optional.horizontal);
    if (optional?.vertical != undefined) this.setScrolVertical(optional.vertical);
  }

  public setScrollHorizontal(horizontal: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset") {
    if (typeof horizontal == "string") this.style.overflowX = horizontal;
    else if (horizontal) this.style.overflowX = "auto";
    else this.style.overflowX = "hidden";
  }

  public setScrolVertical(vertical: boolean | "auto" | "scroll" | "hidden" | "visible" | "inherit" | "initial" | "unset") {
    if (typeof vertical == "string") this.style.overflowY = vertical;
    else if (vertical) this.style.overflowY = "auto";
    else this.style.overflowY = "hidden";
  }
}
// @ts-ignore
customElements.define("scroll-element", ScrollElement);
