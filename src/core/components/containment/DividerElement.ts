import { Component, DataElement } from "../..";

export interface DividerDataElement extends DataElement {
  color?: string;
}

export class DividerElement extends Component {
  constructor(data?: DividerDataElement) {
    super();
    if (data?.color) {
      this.style.backgroundColor = data.color;
      delete data.color;
    }
    Component.applyDate(data, this);
  }
}
// @ts-ignore
customElements.define("divider-element", DividerElement);
