import { DivElement, ILayout, CSSStyleDeclarationRef, StyleOptional } from "../..";

export class PaneElement extends ILayout {
  private ___element_pane__: DivElement;

  constructor(optional?: StyleOptional) {
    super();
    this.___element_pane__ = new DivElement(optional);
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
