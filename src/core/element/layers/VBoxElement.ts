import { Component, ILayout, type StyleOptional } from "..";

export class VBoxElement extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClasName("vbox");
  }
}
// @ts-ignore
customElements.define("vbox-element", VBoxElement);
