import { ILayout, StyleOptional } from "..";

export class StackPane extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClasName("stack-pane");
  }
}

// @ts-ignore
customElements.define("stack-pane", StackPane);
