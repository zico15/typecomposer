import { type StyleOptional, ILayout } from "../..";

export class HBoxElement extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClassName("hbox");
  }
}
customElements.define("hbox-element", HBoxElement);
