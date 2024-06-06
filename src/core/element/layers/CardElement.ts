import { CSSStyleDeclarationRef, StyleOptional, Component, DivElement } from "../..";

export class CardElement extends Component {
  constructor(optional?: StyleOptional) {
    super();
    this.addClassName("card-element");
    Component.applyData(optional, this);
  }
}
customElements.define("card-element", CardElement);
