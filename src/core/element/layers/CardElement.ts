import { type DataElement, Component, DivElement } from "..";
import { Register } from "../../decorators";
import { CSSStyleDeclarationRef } from "../base/CSSStyle";

export class CardElement extends Component {
  private __card_element_pane__: DivElement;

  constructor(data?: DataElement) {
    super();
    this.__card_element_pane__ = new DivElement(data);
    super.appendChild(this.__card_element_pane__);
    this.addClasName("card-element");
    this.__card_element_pane__.addClasName("card-pane");
  }

  public static create(
    n: number,
    data?: DataElement,
  ): { [key: string]: CardElement } {
    const cards: { [key: string]: CardElement } = {};
    for (let i = 0; i < n; i++) {
      const card = new CardElement(data);
      cards[`card${i + 1}`] = card;
    }
    return cards;
  }

  public appendChild<T extends Node>(node: T): T {
    return this.__card_element_pane__.appendChild(node);
  }

  get style(): CSSStyleDeclarationRef {
    return this.__card_element_pane__?.style || super.style;
  }

  set innerHTML(value: string) {
    this.__card_element_pane__.innerHTML = value;
  }

  append(...nodes: (string | Node)[]): void {
    this.__card_element_pane__.append(...nodes);
  }
}

customElements.define("card-element", CardElement);
