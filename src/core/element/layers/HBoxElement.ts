import { type DataElement, Component } from "..";
import { Register } from "../../decorators";

export class HBoxElement extends Component {
  constructor(data?: DataElement) {
    super(data);
    this.addClasName("hbox");
  }
}

customElements.define("hbox-element", HBoxElement);
