import { ILayout, StyleOptional } from "../..";

export class StackPane extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClassName("stack-pane");
  }
}

customElements.define("stack-pane", StackPane);
