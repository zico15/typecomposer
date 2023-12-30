import { type DataElement, Component, DivElement } from "..";
import { Register } from "../../decorators";
import { CSSStyleDeclarationRef } from "../base/CSSStyle";

export class PaneElement extends Component {
  private ___element_pane__: DivElement;

  constructor(data?: DataElement) {
    super();
    this.___element_pane__ = new DivElement(data);
    super.appendChild(this.___element_pane__);
    this.addClasName("pane-element");
    this.___element_pane__.addClasName("pane");
  }

  public appendChild<T extends Node>(node: T): T {
    return this.___element_pane__.appendChild(node);
  }

  get style(): CSSStyleDeclarationRef {
    return this.___element_pane__.style;
  }
}
// @ts-ignore
customElements.define("pane-element", PaneElement);
