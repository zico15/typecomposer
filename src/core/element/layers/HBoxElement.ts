import { type StyleOptional, ILayout } from "../..";

export class HBoxElement extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClasName("hbox");
  }
}
customElements.define("hbox-element", HBoxElement);
