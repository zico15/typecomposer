import { ILayout, type StyleOptional } from "../..";

export class VBoxElement extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClasName("vbox");
  }
}
customElements.define("vbox-element", VBoxElement);
