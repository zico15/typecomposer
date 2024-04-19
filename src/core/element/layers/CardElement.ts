import { CSSStyleDeclarationRef, StyleOptional, Component, DivElement } from "../..";

export class CardElement extends Component {
  constructor(optional?: StyleOptional) {
    super();
    this.addClasName("card-element");
    Component.applyDate(optional, this);
  }
}
customElements.define("card-element", CardElement);
