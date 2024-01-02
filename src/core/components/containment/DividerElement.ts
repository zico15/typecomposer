import { Component, StyleOptional } from "../..";

export interface DividerStyleOptional extends StyleOptional {
  color?: string;
}

export class DividerElement extends Component {
  constructor(optional?: DividerStyleOptional) {
    super(optional);
  }
}
// @ts-ignore
customElements.define("divider-element", DividerElement);
