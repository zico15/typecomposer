import { Component, type DataElement } from "..";
import { Register } from "../../decorators";

export class VBoxElement extends Component {
  constructor(data?: DataElement) {
    super(data);
    this.addClasName("vbox");
  }
}
// @ts-ignore
customElements.define("vbox-element", VBoxElement);
