import {
  ref,
  isRef,
  StyleOptional,
  Component,
  DivElement,
  ButtonElement,
  SelectElement,
  TableElement,
  TableRowElement,
  TableCellElement,
  TableHeadCellElement,
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

export class TablePane extends Component {
  private _container: DivElement = new DivElement({ className: "table-container scroll-pane" });
  private _footer: DivElement = new DivElement({ className: "table-footer" });
  private _table: TableElement = new TableElement({});
  private _rows!: ref<any[][]>;

  constructor(
    optional?: StyleOptional & {
      rows?: any[][] | ref<(string | number)[][]>;
      header?: string[];
      pagination?: boolean;
    },
  ) {
    super({ display: "block", ...optional });
    this.addClassName("table-pane");
    this.container.append(this.table);
    this.append(this.container);
    this._container.style.maxHeight = this.style.maxHeight;
    this._container.style.maxWidth = this.style.maxWidth;
    this._container.style.height = this.style.height;
    this._container.style.width = this.style.width;
    this.style.maxHeight = "";
    this.style.maxWidth = "";
    this.append(this._footer);
    if (optional?.pagination) this.pagination = new TablePagination();
    if (optional && optional?.rows) this.rows = optional.rows;
    else this.rows = ref([]);
    if (optional?.header) this.setHeadRow(optional.header);
  }

  get rows(): any[][] | undefined {
    return this._rows.value;
  }

  set rows(value: any[][] | ref<any[][]>) {
    this._rows = isRef(value) ? (value as ref<any[][]>) : (ref(value) as ref<any[][]>);
    this._rows.onChange(() => {
      const rows = this.rows || [];
      this.table.removeRows();
      rows.forEach((value) => {
        const row = new TableRowElement({
          cells: [...value.map((v) => new TableCellElement({ value: v }))],
        });
        this.table.addRow(row);
      });
      const pagination = this.pagination;
      if (pagination) {
        pagination.total = rows.length;
      }
    }, this);
  }

  get container(): DivElement {
    return this._container;
  }

  get table(): TableElement {
    return this._table;
  }

  get footer(): DivElement {
    return this._footer;
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

  public setHeadRow(row: string[] | undefined) {
    this.table.removeHeadRows();
    if (!row) return;
    this.table.addHeadRows(
      new TableRowElement({
        cells: [...row.map((v) => new TableHeadCellElement({ value: v }))],
      }),
    );
  }

  public addRow(row: any[]) {
    this._rows.value.push(row);
  }

  public addRows(rows: any[][]) {
    this._rows.value.push(...rows);
  }
}

customElements.define("table-pane", TablePane);
