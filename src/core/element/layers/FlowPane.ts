import { ILayout, type StyleOptional } from "../..";

export type FlowType = "flow-1" | "flow-2" | "flow-3" | "flow-4" | "flow-5" | "flow-6" | "flow-7" | "flow-8" | "flow-9" | "flow-10" | "flow-11" | "flow-12";

export class FlowPane extends ILayout {
  constructor(optional?: StyleOptional) {
    super({ overflow: "hidden", ...optional });
    this.addClassName("flow-pane");
  }

  appendChild<T extends Node>(node: T, flowType: FlowType = "flow-6"): T {
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
    if (!element.classList.contains(flowType)) element.classList.add(flowType);
    if (!element.classList.contains("flow-12")) element.classList.add("flow-12");
  }

  private removeClassNameInChilds(element: HTMLElement): void {
    if (element.classList.contains("flow-pane-item")) element.classList.remove("flow-pane-item");
    for (let i = 1; i <= 12; i++) {
      if (element.classList.contains(`flow-${i}`)) element.classList.remove(`flow-${i}`);
    }
  }

  public setFlowType(element: HTMLElement, flowType: FlowType): void {
    this.removeClassNameInChilds(element);
    this.addClassNameInChilds(element, flowType);
  }
}
customElements.define("flow-pane", FlowPane);
