import { Register } from "../../decorators";
import { Component, type DataElement } from "../base/Elements";

export class GridElement extends Component {
  constructor(data?: DataElement) {
    super(data);
    this.addClasName("grid-element");
    if (data?.columns) this.columns = data.columns;
    if (data?.rows) this.rows = data.rows;
  }

  //grid-template-columns: auto auto auto auto;
  set columns(value: number | string) {
    if (typeof value == "string") this.style.gridTemplateColumns = value;
    else this.style.gridTemplateColumns = `repeat(${value}, auto)`;
  }

  //grid-template-rows: auto auto auto auto;
  set rows(value: number | string) {
    if (typeof value == "string") this.style.gridTemplateRows = value;
    else this.style.gridTemplateRows = `repeat(${value}, auto)`;
  }
}
// @ts-ignore
customElements.define("grid-element", GridElement);
