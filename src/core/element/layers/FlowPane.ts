import { ILayout, type StyleOptional } from "..";

export type FlowType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export class FlowPane extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClasName("flow-pane");
  }

  appendChild<T extends Node>(node: T, flowType: FlowType = 6): T {
    if (node && !(node as any).classList.contains("flow-pane-item")) this.addClassNameInChilds(node as any, flowType);
    return super.appendChild(node) as T;
  }

  removeChild<T extends Node>(child: T): T {
    if (child instanceof HTMLElement) this.removeClassNameInChilds(child);
    return super.removeChild(child);
  }

  private addClassNameInChilds(element: HTMLElement, flowType: FlowType): void {
    element.style.width = "auto";
    element.removeAttribute("height");
    if (!element.classList.contains(`flow-type-${flowType}`)) element.classList.add(`flow-type-${flowType}`);
    if (!element.classList.contains("flow-type-12")) element.classList.add("flow-type-12");
  }

  private removeClassNameInChilds(element: HTMLElement): void {
    if (element.classList.contains("flow-pane-item")) element.classList.remove("flow-pane-item");
    for (let i = 1; i <= 12; i++) {
      if (element.classList.contains(`flow-type-${i}`)) element.classList.remove(`flow-type-${i}`);
    }
  }

  public setFlowType(element: HTMLElement, flowType: FlowType): void {
    this.removeClassNameInChilds(element);
    this.addClassNameInChilds(element, flowType);
  }
}
// @ts-ignore
customElements.define("flow-pane", FlowPane);
