import {
  StyleOptional,
  Component,
  DivElement,
  ButtonElement,
  SelectElement,
  TableElement,
  TableRowElement,
  TableCellElement,
  TableHeadCellElement,
  TableHeadRowElement,
  CheckBox,
  InputElement,
  DropDown,
} from "../..";

export class TablePagination extends Component {
  private _rowsPerPage: DivElement = new DivElement({ className: "rows-per-page" });
  private _pagination: DivElement = new DivElement({ className: "pagination" });
  private _buttonNext: ButtonElement = new ButtonElement({ text: "&gt;" });
  private _buttonPrev: ButtonElement = new ButtonElement({ text: "&lt;" });
  private _select: SelectElement = new SelectElement();
  private _page: number = 0;
  private _total: number = 0;
  private _maxPage: number = 0;
  onChange: (page: number, rowsPerPage: number) => void = () => {};

  constructor(optional?: StyleOptional) {
    super({ display: "contents", unicodeBidi: "isolate", ...optional });
    this.rowsPerPage.innerText = "Rows per page:";
    this.rowsPerPage.append(this.select);
    this.pagination.innerHTML = `1-10 of 15`;
    this.pagination.append(this.buttonPrev);
    this.pagination.append(this.buttonNext);
    this.append(this.rowsPerPage);
    this.append(this.pagination);
    this.select.append(new Option("10", "10"));
    this.select.append(new Option("15", "15"));
    this.select.append(new Option("20", "20"));
    this.select.addEventListener("change", () => {
      this.page = 0;
    });
  }

  get rowsPerPage(): DivElement {
    return this._rowsPerPage;
  }

  get pagination(): DivElement {
    return this._pagination;
  }

  get buttonNext(): ButtonElement {
    return this._buttonNext;
  }

  get buttonPrev(): ButtonElement {
    return this._buttonPrev;
  }

  get select(): SelectElement {
    return this._select;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
    if (this._page < 1) this._page = 1;
    else if (this._page > this._maxPage) this._page = this._maxPage;
    this.updatePaginationText(value, this.total);
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
    this.updatePaginationText(this.page, this._total);
  }

  get rowsPerPageValue(): number {
    return parseInt(this.select.value);
  }

  private updatePaginationText(page: number, total: number) {
    const rowsPerPageValue = this.rowsPerPageValue;
    this._maxPage = Math.ceil(total / rowsPerPageValue);
    this.pagination.innerText = `${page}-${Math.min((page + 1) * rowsPerPageValue, total)} of ${total}`;
    this.pagination.append(this.buttonPrev);
    this.pagination.append(this.buttonNext);
    this.onChange(page, rowsPerPageValue);
  }
}

customElements.define("table-pagination", TablePagination);

// teste a classe TablePane
export class TablePane<T = any> extends Component {
  #container: DivElement = new DivElement({ className: "scrollable-table" });
  #footer: DivElement = new DivElement({ className: "table-footer" });
  #table: TableElement = new TableElement({});
  #values: { [key: string]: T }[] = [];
  #valuesHead: any[] = [];
  #columnsKey: string[] | undefined = undefined;
  #elementEmpty: DivElement = new DivElement({ text: "No data", width: "100%", textAlign: "center", margin: "auto" });
  #isElementEmpty: boolean = true;

  constructor(
    optional?: StyleOptional & {
      rows?: { [key: string]: T }[];
      pagination?: boolean;
      columnsKey?: string[];
      valueEmpty?: string | HTMLElement;
    },
  ) {
    super({ ...optional });
    this.addClassName("table-pane");
    this.container.append(this.table);
    this.append(this.container);
    this.#columnsKey = optional?.columnsKey;
    this.append(this.#footer);
    if (optional?.pagination) this.pagination = new TablePagination();
    if (optional && optional?.rows) this.addRows(optional.rows);
    if (optional && optional?.valueEmpty) this.valueEmpty = optional.valueEmpty;
    this.container.append(this.#elementEmpty);
  }

  get values(): { [key: string]: T }[] {
    return this.#values;
  }

  get rows() {
    return this.table.rows;
  }

  get valuesHead(): any[] {
    return this.#valuesHead;
  }

  set valueEmpty(value: string | HTMLElement) {
    this.#elementEmpty.innerHTML = "";
    if (typeof value === "string") this.#elementEmpty.innerText = value;
    else this.#elementEmpty.append(value);
  }

  toMatrix(): any[][] {
    const keys = this.#columnsKey || Object.keys(this.values[0]);
    const matrix = [keys, ...this.values.map((v) => keys.map((k) => v[k]))];
    return matrix;
  }

  get container(): DivElement {
    return this.#container;
  }

  get table(): TableElement {
    return this.#table;
  }

  public static readonly AUTO = (value: any, row: number, column: number) => {
    if (value instanceof CheckBox) return value.checked;
    if (value instanceof InputElement) return value.value;
    if (value instanceof SelectElement) return value.value;
    if (value instanceof DropDown) return value.value;
    if (value instanceof HTMLElement) return (value as any)?.value || value?.innerText;
    return value;
  };

  /**
   * The toTable function creates a copy of an existing table, applies transformations to its data, and allows specific columns to be excluded.
   * It accepts a custom conversion function that can be used to transform the data in each table cell before returning the transformed table.
   * @param convert  convert: (value: any, column: number, row: number) => any (optional, default: TablePane.AUTO)
   * @param excludeColumns An array of column indices that should be excluded from the resulting table.
   * @returns Returns a copy of the original table (TableElement) with the transformations applied to the cells and the specified columns removed.
   */
  toTable(convert: (value: any, column: number, row: number) => any = TablePane.AUTO, excludeColumns: number[] = []): TableElement {
    const table = this.table.cloneNode(true) as TableElement;
    excludeColumns = excludeColumns.sort((a, b) => a - b);
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.cells.length; j++) {
        const cell = row.cells[j];
        const value = convert(cell.children[0] || cell.innerText, j, i);
        cell.innerHTML = "";
        if (value instanceof HTMLElement) {
          cell.appendChild(value);
        } else {
          cell.innerHTML = String(value);
        }
      }
    }
    while (excludeColumns.length > 0) {
      const index = excludeColumns[0];
      table.removeColumn(index);
      excludeColumns.map((v) => (v > index ? v - 1 : v));
      excludeColumns.shift();
    }
    return table;
  }

  get footer(): DivElement {
    return this.#footer;
  }

  get pagination(): TablePagination | undefined {
    return this.footer.querySelector("table-pagination") as TablePagination;
  }

  set pagination(value: TablePagination | undefined) {
    const pagination = this.pagination;
    if (value == undefined && pagination) this.footer.removeChild(pagination);
    else if (value && value != pagination) {
      if (pagination) this.footer.replaceChild(value, pagination);
      else this.footer.append(value);
      value.page = 0;
      value.total = this.table.rows.length;
      value.buttonNext.addEventListener("click", () => {
        value.page++;
      });

      value.buttonPrev.addEventListener("click", () => {
        value.page--;
      });
    }
  }

  public setColumsKey(columnsKey: string[]) {
    this.#columnsKey = columnsKey;
  }

  public addHeadRow(row: any[]): TableHeadRowElement {
    row = row?.filter((v) => v !== undefined) || row;
    this.#valuesHead.push(row);
    return this.table.addHeadRow(
      new TableHeadRowElement({
        cells: [...row.map((v) => new TableHeadCellElement({ value: v }))],
      }),
    );
  }

  public addRow(row: { [key: string]: T }): TableRowElement {
    if (this.#isElementEmpty) {
      this.container.removeChild(this.#elementEmpty);
      this.#isElementEmpty = false;
    }
    this.values.push(row);
    const keys = this.#columnsKey || Object.keys(row);
    return this.table.addRow(
      new TableRowElement({
        cells: [...keys.map((v) => new TableCellElement({ value: row[v] as any }))],
      }),
    );
  }

  public setHeadRows(rows: string[][]) {
    this.removeHeadRows();
    this.addHeadRows(rows);
  }

  public addHeadRows(rows: string[][]): TableHeadRowElement[] {
    const headRows: TableHeadRowElement[] = [];
    for (let i = 0; i < rows.length; i++) {
      headRows.push(this.addHeadRow(rows[i]));
    }
    return headRows;
  }

  public setRows(rows: { [key: string]: T }[]) {
    this.removeRows();
    this.addRows(rows);
  }

  public addRows(rows: { [key: string]: T }[]): TableRowElement[] {
    const rowsElement: TableRowElement[] = [];
    this.values.push(...rows);
    for (let i = 0; i < rows.length; i++) {
      rowsElement.push(this.addRow(rows[i]));
    }
    return rowsElement;
  }

  public removeHeadRow(row: number) {
    this.table.removeHeadRow(row);
  }

  public removeRow(row: number | { [key: string]: T }) {
    if (typeof row === "object") {
      const index = this.values.findIndex((v) => v === row);
      console.log(index);
      if (index >= 0) {
        this.table.removeRow(index);
        this.values.splice(index, 1);
      }
    } else {
      this.table.removeRow(row);
      this.values.splice(row, 1);
    }
    if (this.values.length === 0) {
      this.removeRows();
    }
  }

  public removeRows() {
    this.table.removeRows();
    this.#values = [];
    if (!this.#isElementEmpty) this.container.append(this.#elementEmpty);
    this.#isElementEmpty = true;
  }

  public removeHeadRows() {
    this.table.removeHeadRows();
  }

  public removeAll() {
    this.removeRows();
    this.removeHeadRows();
  }
}

customElements.define("table-pane", TablePane);
