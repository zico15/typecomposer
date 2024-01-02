import { ILayout, StyleOptional } from "..";

export class GridElement extends ILayout {
  constructor(optional?: StyleOptional) {
    super(optional);
    this.addClasName("grid-element");
    if (optional?.columns) this.columns = optional.columns;
    if (optional?.rows) this.rows = optional.rows;
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
