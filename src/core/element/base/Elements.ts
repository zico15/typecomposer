import { Router, ref, CSSStyleDeclarationRef, StyleOptional, Variant, RefString, isRef } from "../..";
import { EventComponent, EventHandler } from "./Event";

export interface IElement {
  onInit(): void;
  append(...childs: any[]): void;
  addClassName(...names: string[]): void;

  get style(): StyleOptional;
}

export interface IComponent extends HTMLElement {
  onInit(): void;
  unmount(): void;
  addClassName(...names: string[]): void;
  get style(): CSSStyleDeclarationRef;
  set innerHTML(value: string | ref<string> | any);
}

// 1. `<div>` - Para criar blocos de conteúdo genéricos.
// 2. `<p>` - Para parágrafos de texto.xfHTMLFormElement
// 3. `<a>` - Para links.
// 4. `<img>` - Para exibir imagens.
// 5. `<ul>` - Para listas não ordenadas.
// 6. `<ol>` - Para listas ordenadas.
// 7. `<li>` - Para itens de lista.
// 8. `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` - Para cabeçalhos de diferentes níveis.
// 9. `<span>` - Para elementos de texto em linha.
// 10. `<strong>` - Para texto enfatizado.
// 11. `<em>` - Para texto enfatizado (itálico).
// 12. `<br>` - Para quebras de linha.
// 13. `<hr>` - Para criar uma linha horizontal.
// 14. `<table>` - Para criar tabelas.
// 15. `<tr>` - Para linhas de tabela.
// 16. `<th>` - Para células de cabeçalho de tabela. // deprecated
// 17. `<td>` - Para células de dados de tabela.
// 18. `<form>` - Para criar formulários.
// 19. `<input>` - Para campos de entrada em um formulário.
// 20. `<button>` - Para botões.
// 21. `<textarea>` - Para áreas de texto.
// 22. `<label>` - Para rótulos de campos de formulário.
// 23. `<select>` - Para listas suspensas.
// 24. `<iframe>` - Para incorporar conteúdo externo.
// 25. `<audio>` - Para elementos de áudio.
// 26. `<video>` - Para elementos de vídeo.
// 27. `<canvas>` - Para desenho e gráficos em HTML5.
// 28. `<svg>` - Para gráficos vetoriais escaláveis em HTML5.
// 29. `<footer>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` - Elementos semânticos de HTML5 para estruturação de página.
// 30. `<details>` e `<summary>` - Elementos de HTML5 para criar conteúdo expansível.

export class Component extends HTMLElement implements IComponent {
  //

  constructor(optional?: StyleOptional) {
    super();
    if (optional != undefined) this.setStyle(optional);
  }

  public static applyData<T extends HTMLElement>(data: StyleOptional | undefined, element: T): void {
    if (data != undefined) {
      // if (data.id) {
      //   (element as any).id = data.id;
      // }
      if (data.className != undefined) {
        (element as any).addClassName(data.className);
      }
      this.applyStyleOrAttribute(data, element);
    }
  }

  private static applyStyleOrAttribute<T extends HTMLElement>(data: StyleOptional, element: T): void {
    if (data) {
      Object.keys(data).forEach((key: string) => {
        if (data[key] == undefined) return;
        if (key == "for" && (data as any)[key] != undefined) (element as any).setAttribute("for", (data as any)[key]);
        else if (key == "className" && (data as any)[key] != undefined) element.addClassName((data as any)[key]);
        else if (key == "text" && (data as any)[key] != undefined) element.innerHTML = (data as any)[key];
        else if (element.style.hasOwnProperty(key)) element.style[key] = (data as any)[key];
        else if ((data as any)[key] != undefined) {
          try {
            (element as any)[key] = (data as any)[key];
          } catch (__) {}
        }
      });
    }
  }

  public static setVariant(element: HTMLElement, variant: Variant | undefined): void {
    const vart = variant == undefined ? "default-border" : `${variant}-border`;
    const variants = ["default-border", "outline-border", "underlined-border", "solo-border"];
    variants.forEach((value: string) => {
      if (element.classList.contains(value)) element.classList.remove(value);
    });
    element.classList.add(vart == "default-border" ? "outline-border" : vart);
  }

  public onEvent(type: string, listener: EventHandler, options?: boolean | AddEventListenerOptions | undefined): void {
    EventComponent.addEventListener(this, type, listener, options);
  }

  public createEvent(type: string, ...data: any[]): boolean {
    return EventComponent.createEvent(type, ...data);
  }

  public removeEvent(type: string): void {
    EventComponent.removeEventListener(this, type);
  }

  /**
   * Remove all events from the component
   **/
  public removeEvents(): void {
    EventComponent.removeEventListeners(this);
  }

  public emitEvent(type: string, ...params: any[]): boolean {
    return EventComponent.emitEvent(type, ...params);
  }

  public deleteEvent(type: string) {
    EventComponent.deleteEvent(type);
  }
}

customElements.define("component-element", Component);

export class DivElement extends HTMLDivElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-div-element", DivElement, { extends: "div" });

export class ParagraphElement extends HTMLParagraphElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-p-element", ParagraphElement, { extends: "p" });

export interface DataAnchorElement extends StyleOptional {
  href?: string;
  rlink?: string;
  target?: string;
}

export class AnchorElement extends HTMLAnchorElement implements IComponent {
  private _rlink: string = "";

  constructor(
    optional?: StyleOptional & {
      download?: string;
      href?: string;
      hreflang?: string;
      media?: string;
      ping?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      rel?:
        | "alternate"
        | "author"
        | "bookmark"
        | "external"
        | "help"
        | "license"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "prev"
        | "search"
        | "tag";
      target?: "_blank" | "_self" | "_parent" | "_top";
      type?: string;
      rlink?: string;
    },
  ) {
    super();
    Component.applyData(optional, this);
    this.addEventListener("click", (event) => {
      event.preventDefault();
      if (this._rlink != "") {
        Router.go(this._rlink);
      }
    });
    this.addEventListener("href", (event) => {
      if (this._rlink != "") {
        event.preventDefault();
        Router.go(this._rlink);
      }
    });
  }
  set rlink(link: string) {
    this.href = link;
    this._rlink = link;
  }

  get rlink(): string {
    return this._rlink;
  }
}

customElements.define("base-a-element", AnchorElement, { extends: "a" });

export class AbbreviationElement extends HTMLElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      title?: string;
    },
  ) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-abbr-element", AbbreviationElement, {
  extends: "abbr",
});

// area

export class AreaElement extends HTMLAreaElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      alt?: string;
      coords?: string;
      download?: string;
      href?: string;
      hreflang?: string;
      media?: string;
      ping?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      rel?:
        | "alternate"
        | "author"
        | "bookmark"
        | "external"
        | "help"
        | "license"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "prev"
        | "search"
        | "tag";
      shape?: "circle" | "default" | "poly" | "rect";
      target?: "_blank" | "_self" | "_parent" | "_top";
      type?: string;
    },
  ) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-area-element", AreaElement, { extends: "area" });

export class ImageElement extends HTMLImageElement implements IComponent {
  constructor(optional?: StyleOptional & { src?: string; alt?: string }) {
    super();
    this.className = "image-element";
    Component.applyData(optional, this);
    if (optional?.src != undefined) this.src = optional.src;
  }
}

customElements.define("base-img-element", ImageElement, { extends: "img" });

export class UListElement extends HTMLUListElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-ul-element", UListElement, { extends: "ul" });

export class OrderedListElement extends HTMLOListElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-ol-element", OrderedListElement, { extends: "ol" });

export class ListItemElement extends HTMLLIElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
  onSelect(): void {}
}

customElements.define("base-li-element", ListItemElement, { extends: "li" });

export class MainElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-main-element", MainElement, { extends: "main" });

// export interface DataHeadingElement extends StyleOptional {
//   text?: string | ref<string>;
//   for?: string;
// }

export class SpanElement extends HTMLSpanElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-span-element", SpanElement, { extends: "span" });

export class StrongElement extends HTMLSpanElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-strong-element", StrongElement, {
  extends: "strong",
});

export class EmElement extends HTMLEmbedElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-em-element", EmElement, { extends: "em" });

export class BreakElement extends HTMLBRElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-br-element", BreakElement, { extends: "br" });

export class TableHeadElement extends HTMLTableSectionElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-thead-element", TableHeadElement, { extends: "thead" });

export class TableBodyElement extends HTMLTableSectionElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-tbody-element", TableBodyElement, { extends: "tbody" });

export class TableHeadCellElement extends HTMLTableCellElement {
  constructor(
    optional?: StyleOptional & {
      colspan?: number;
      rowspan?: number;
      child?: HTMLElement;
    },
  ) {
    super();
    if (optional?.colspan) this.colSpan = optional.colspan;
    if (optional?.rowspan) this.rowSpan = optional.rowspan;
    if (optional?.child) this.appendChild(optional.child);
    delete optional?.child;
    Component.applyData(optional, this);
  }
}
customElements.define("base-th-cell-element", TableHeadCellElement, { extends: "th" });

export class TableFootElement extends HTMLTableSectionElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-tfoot-element", TableFootElement, { extends: "tfoot" });

export class TableElement extends HTMLTableElement implements IComponent {
  private _head: TableHeadElement | undefined = undefined;
  private _body: TableBodyElement | undefined = undefined;
  private _foot: TableFootElement | undefined = undefined;

  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }

  addHeadRows(...rows: TableRowElement[]) {
    if (this._head == undefined) this._head = this.appendChild(new TableHeadElement());
    rows.forEach((row) => {
      this._head.appendChild(row);
    });
  }
  addHeadRow(row: TableRowElement) {
    this.addHeadRows(row);
    return row;
  }
  removeHeadRow(row: number | TableRowElement) {
    if (this._head == undefined) return;
    if (typeof row == "number") this._head.removeChild(this._head.children[row]);
    else this._head.removeChild(row);
  }
  removeHeadRows() {
    if (this._head == undefined) return;
    this._head.innerHTML = "";
  }
  addFootRows(...rows: TableRowElement[]) {
    if (this._foot == undefined) this._foot = this.appendChild(new TableFootElement());
    rows.forEach((row) => {
      this._foot.appendChild(row);
    });
  }
  addFootRow(row: TableRowElement) {
    this.addFootRows(row);
    return row;
  }
  removeFootRow(row: number | TableRowElement) {
    if (this._foot == undefined) return;
    if (typeof row == "number") this._foot.removeChild(this._foot.children[row]);
    else this._foot.removeChild(row);
  }
  removeFootRows() {
    if (this._foot == undefined) return;
    this._foot.innerHTML = "";
  }
  addRows(...rows: TableRowElement[]) {
    if (this._body == undefined) this._body = this.appendChild(new TableBodyElement());
    rows.forEach((row) => {
      this._body.appendChild(row);
    });
  }
  addRow(row: TableRowElement) {
    this.addRows(row);
    return row;
  }
  removeRow(row: number | TableRowElement) {
    if (this._body == undefined) return;
    if (typeof row == "number") this._body.removeChild(this._body.children[row]);
    else this._body.removeChild(row);
  }
  removeRows() {
    if (this._body == undefined) return;
    this._body.innerHTML = "";
  }
}

customElements.define("base-table-element", TableElement, { extends: "table" });

export class TableFootRowElement extends HTMLTableRowElement {
  constructor(
    optional?: StyleOptional & {
      cells?: TableCellElement[];
    },
  ) {
    super();
    if (optional?.cells) {
      this.addCells(...optional.cells);
    }
    delete optional?.cells;
    Component.applyData(optional, this);
  }
  addCells(...cells: TableCellElement[]) {
    cells.forEach((cell) => {
      this.appendChild(cell);
    });
  }
  addCell(cell: TableCellElement): TableCellElement {
    this.appendChild(cell);
    return cell;
  }
}

customElements.define("base-tfoot-row-element", TableFootRowElement, { extends: "tr" });

export class TableHeadRowElement extends HTMLTableRowElement {
  constructor(
    optional?: StyleOptional & {
      cells?: TableCellElement[];
    },
  ) {
    super();
    if (optional?.cells) {
      this.addCells(...optional.cells);
    }
    delete optional?.cells;
    Component.applyData(optional, this);
  }
  addCells(...cells: TableCellElement[]) {
    cells.forEach((cell) => {
      this.appendChild(cell);
    });
  }
  addCell(cell: TableCellElement) {
    this.appendChild(cell);
    return cell;
  }
}
customElements.define("base-th-row-element", TableHeadRowElement, { extends: "tr" });

export class TableRowElement extends HTMLTableRowElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      cells?: TableCellElement[];
    },
  ) {
    super();
    if (optional?.cells) {
      this.addCells(...optional.cells);
    }
    delete optional?.cells;
    Component.applyData(optional, this);
  }
  addCells(...cells) {
    cells.forEach((cell) => {
      this.appendChild(cell);
    });
  }
  addCell(cell) {
    this.appendChild(cell);
    return cell;
  }
}

customElements.define("base-tr-element", TableRowElement, { extends: "tr" });

export class TableCellElement extends HTMLTableCellElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      colspan?: number;
      rowspan?: number;
      child?: HTMLElement;
    },
  ) {
    super();
    if (optional?.colspan) this.colSpan = optional.colspan;
    if (optional?.rowspan) this.rowSpan = optional.rowspan;
    if (optional?.child) this.appendChild(optional.child);
    delete optional?.child;
    Component.applyData(optional, this);
  }
}

customElements.define("base-td-element", TableCellElement, { extends: "td" });

export class PreElement extends HTMLPreElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-pre-element", PreElement, { extends: "pre" });
// export interface FormOptional {
//   acceptCharset?: string;
//   action?: string;
//   enctype?: string;
//   method?: "get" | "post";
//   name?: string;
//   novalidate?: boolean;
//   rel?:
//   | "external"
//   | "help"
//   | "license"
//   | "next"
//   | "nofollow"
//   | "noopener"
//   | "noreferrer"
//   | "opener"
//   | "prev"
//   | "search";
//   target?: "_blank" | "_self" | "_parent" | "_top";
// }

export type InputType =
  | "text"
  | "password"
  | "checkbox"
  | "radio"
  | "submit"
  | "reset"
  | "file"
  | "hidden"
  | "image"
  | "button"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "number"
  | "range"
  | "search"
  | "tel"
  | "time"
  | "url"
  | "week";

export class InputElement extends HTMLInputElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      id?: string;
      type?: InputType;
      name?: string;
      value?: string | ref<string>;
      placeholder?: string;
    },
  ) {
    super();
    const v = optional?.value;
    delete optional?.value;
    Component.applyData(optional, this);
    if (v) {
      if (typeof v == "string") this.value = v?.toString() || "";
      else {
        if (isRef(v)) (v as any).__subscribe__(this, "value", undefined);
        else (v as any).__subscribe__(this, "value", v["refPropertyKey"]);
        this.addEventListener("input", (event) => {
          if (isRef(v)) v.value = this.value;
          else (v as any).__setValue__(this.value, v["refPropertyKey"]);
        });
      }
    }
  }
}

customElements.define("base-input-element", InputElement, { extends: "input" });

export class ButtonElement extends HTMLButtonElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      formaction?: string;
      formenctype?: string;
      formmethod?: string;
      formnovalidate?: boolean;
      formtarget?: string;
      popovertarget?: string;
      popovertargetaction?: "hide" | "show" | "toggle";
      name?: string;
      type?: "button" | "reset" | "submit" | "file";
      value?: string;
      accept?: string;
      multiple?: boolean;
      onclick?: (event: MouseEvent) => void;
      onfile?: (fileList: FileList) => void;
    },
  ) {
    super();
    const type = optional?.type;
    delete optional?.type;
    Component.applyData(optional, this);
    if (type) this.type = type;
    if (optional?.accept) this.accept = optional.accept;
    if (optional?.multiple) this.multiple = optional.multiple;
  }

  // @ts-ignore
  set type(value: "submit" | "reset" | "button" | "file") {
    // @ts-ignore
    super.type = value;
  }
}

customElements.define("base-button-element", ButtonElement, {
  extends: "button",
});

export class TextAreaElement extends HTMLTextAreaElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-textarea-element", TextAreaElement, {
  extends: "textarea",
});

export class LabelElement extends HTMLLabelElement implements IComponent {
  constructor(optional?: StyleOptional & { for?: string; text?: string }) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-label-element", LabelElement, { extends: "label" });

export class SelectElement extends HTMLSelectElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-select-element", SelectElement, {
  extends: "select",
});

export class AudioElement extends HTMLAudioElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      autoplay?: boolean;
      controls?: boolean;
      loop?: boolean;
      muted?: boolean;
      preload?: "auto" | "metadata" | "none";
      src?: string;
    },
  ) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-audio-element", AudioElement, { extends: "audio" });

export class BoldElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-b-element", BoldElement, { extends: "b" });

// <base>
export class BaseElement extends HTMLElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      href?: string;
      target?: "_blank" | "_self" | "_parent" | "_top";
    },
  ) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-base-element", BaseElement, { extends: "base" });

// <body>
export class BodyElement extends HTMLBodyElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-body-element", BodyElement, { extends: "body" });

// <video>
export class VideoElement extends HTMLVideoElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-video-element", VideoElement, { extends: "video" });

export class CanvasElement extends HTMLCanvasElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      width?: number;
      height?: number;
    },
  ) {
    super();
    if (optional?.width) this.width = optional.width as any;
    if (optional?.height) this.height = optional.height as any;
    Component.applyData(optional, this);
  }
}

customElements.define("base-canvas-element", CanvasElement, {
  extends: "canvas",
});

// <caption>
export class CaptionElement extends HTMLTableCaptionElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-caption-element", CaptionElement, {
  extends: "caption",
});

// <cite>
export class CiteElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-cite-element", CiteElement, { extends: "cite" });

// <code>
export class CodeElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional & { contentEditable?: boolean }) {
    super();
    Component.applyData(optional, this);
    if (optional.contentEditable != undefined) this.contentEditable = optional.contentEditable.toString();
  }
}

customElements.define("base-code-element", CodeElement, { extends: "code" });

// <col>
export class TableColElement extends HTMLTableColElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      span?: number;
    },
  ) {
    super();
    if (optional?.span) this.span = optional.span as any;
    Component.applyData(optional, this);
  }
}

customElements.define("base-col-element", TableColElement, { extends: "col" });

// <colgroup>
export class TableColGroupElement extends HTMLTableColElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      span?: number;
    },
  ) {
    super();
    if (optional?.span) this.span = optional.span as any;
    Component.applyData(optional, this);
  }
}

customElements.define("base-colgroup-element", TableColGroupElement, {
  extends: "colgroup",
});

// <datalist>

export class DataListElement extends HTMLDataListElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-datalist-element", DataListElement, {
  extends: "datalist",
});

// <dd>
export class DefinitionDescriptionElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-dd-element", DefinitionDescriptionElement, {
  extends: "dd",
});

// <del>
export class DeletedTextElement extends HTMLModElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      cite?: string;
    },
  ) {
    super();
    if (optional?.cite) this.cite = optional.cite as any;
    Component.applyData(optional, this);
  }
}

customElements.define("base-del-element", DeletedTextElement, {
  extends: "del",
});

// <details>
export class DetailsElement extends HTMLDetailsElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      open?: boolean;
      summary?: string | SummaryElement;
    },
  ) {
    super();
    Component.applyData(optional, this);
    if (optional?.open) this.open = optional.open as any;
    if (optional?.summary) {
      if (typeof optional.summary == "string") {
        // @ts-ignore
        this.setSummary(new SummaryElement({ text: optional.summary }));
      } else {
        this.setSummary(optional.summary);
      }
    }
  }
  public setSummary(summary: SummaryElement) {
    this.querySelector("summary")?.remove();
    this.appendChild(summary);
  }
}

customElements.define("base-details-element", DetailsElement, {
  extends: "details",
});

// <dfn>
export class DefinitionElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-dfn-element", DefinitionElement, {
  extends: "dfn",
});

// <dialog>
export class DialogElement extends HTMLDialogElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      open?: boolean;
    },
  ) {
    super();
    Component.applyData(optional, this);
    this.open = optional.open == undefined ? true : optional.open;
  }
}

customElements.define("base-dialog-element", DialogElement, {
  extends: "dialog",
});

// <embed>
export class EmbedElement extends HTMLEmbedElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      height?: number;
      src?: string;
      type?: string;
      width?: number;
    },
  ) {
    super();
    if (optional?.height) this.height = optional.height as any;
    if (optional?.src) this.src = optional.src as any;
    if (optional?.type) this.type = optional.type as any;
    if (optional?.width) this.width = optional.width as any;
    Component.applyData(optional, this);
  }
}

customElements.define("base-embed-element", EmbedElement, { extends: "embed" });

//  <fieldset>
export class FieldSetElement extends HTMLFieldSetElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      disabled?: boolean;
      name?: string;
      legend?: string | LegendElement;
    },
  ) {
    super();
    Component.applyData(optional, this);
    if (optional?.disabled) this.disabled = optional.disabled as any;
    if (optional?.name) this.name = optional.name as any;
    if (optional?.legend) {
      if (typeof optional.legend == "string") {
        // @ts-ignore
        this.setLegend(new LegendElement({ text: optional.legend }));
      } else {
        this.setLegend(optional.legend);
      }
    }
  }

  public setLegend(legend: LegendElement) {
    this.querySelector("legend")?.remove();
    this.appendChild(legend);
  }
}

customElements.define("base-fieldset-element", FieldSetElement, {
  extends: "fieldset",
});

// <footer>
export class FooterElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-footer-element", FooterElement, {
  extends: "footer",
});

export class FormElement extends HTMLFormElement implements IComponent {
  private _response: any = undefined;
  constructor(
    optional?: StyleOptional & {
      acceptCharset?: string;
      action?: string;
      enctype?: string;
      method?: "get" | "post";
      name?: string;
      novalidate?: boolean;
      rel?: "external" | "help" | "license" | "next" | "nofollow" | "noopener" | "noreferrer" | "opener" | "prev" | "search";
      target?: "_blank" | "_self" | "_parent" | "_top";
    },
  ) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-form-element", FormElement, { extends: "form" });

export class H1Element extends HTMLHeadingElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
    if (optional?.text) this.innerText = optional.text.toString();
  }
}

customElements.define("base-h1-element", H1Element, { extends: "h1" });

export class H2Element extends HTMLHeadingElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
    if (optional?.text) this.innerText = optional.text.toString();
  }
}

customElements.define("base-h2-element", H2Element, { extends: "h2" });

export class H3Element extends HTMLHeadingElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
    if (optional?.text) this.text = optional.text;
  }

  get text(): string {
    return this.innerText;
  }

  set text(value: string | ref<string>) {
    if (typeof value !== "string") this["_styleref"].appendStyleref("text", this, value);
    else this.innerText = value;
  }
}

customElements.define("base-h3-element", H3Element, { extends: "h3" });

export class H4Element extends H3Element implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
    if (optional?.text) this.innerText = optional.text.toString();
  }

  public onInit(): void {}

  addClassName(...names: string[]): void {
    this.classList.add(...names);
  }
}

customElements.define("base-h4-element", H4Element, { extends: "h4" });

export class H5Element extends H3Element implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
    if (optional?.text) this.innerText = optional.text.toString();
  }

  public onInit(): void {}

  addClassName(...names: string[]): void {
    this.classList.add(...names);
  }
}

customElements.define("base-h5-element", H5Element, { extends: "h5" });

export class H6Element extends H3Element implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
    if (optional?.text) this.innerText = optional.text.toString();
  }

  public onInit(): void {}

  addClassName(...names: string[]): void {
    this.classList.add(...names);
  }
}

customElements.define("base-h6-element", H6Element, { extends: "h6" });

// <head>
export class HeadElement extends HTMLHeadElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-head-element", HeadElement, { extends: "head" });

// <header>
export class HeaderElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-header-element", HeaderElement, {
  extends: "header",
});

// <hr>
export class HorizontalRuleElement extends HTMLHRElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-hr-element", HorizontalRuleElement, {
  extends: "hr",
});

// <html>

export class HtmlElement extends HTMLHtmlElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      manifest?: string;
    },
  ) {
    super();
    if (optional?.manifest) this.manifest = optional.manifest as any;
    Component.applyData(optional, this);
  }
  set manifest(value: string) {
    this.setAttribute("manifest", value);
  }

  get manifest(): string {
    return this.getAttribute("manifest");
  }
}

customElements.define("base-html-element", HtmlElement, { extends: "html" });

// <iframe>

export class IFrameElement extends HTMLIFrameElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      allow?: string;
      allowfullscreen?: boolean;
      allowpaymentrequest?: boolean;
      csp?: string;
      height?: number;
      importance?: "auto" | "high" | "low";
      loading?: "eager" | "lazy";
      name?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      src?: string;
      srcdoc?: string;
      width?: number;
    },
  ) {
    super();
    if (optional?.allow) this.allow = optional.allow as any;
    if (optional?.allowfullscreen) this.allowfullscreen = optional.allowfullscreen as any;
    if (optional?.allowpaymentrequest) this.allowpaymentrequest = optional.allowpaymentrequest as any;
    if (optional?.csp) this.csp = optional.csp as any;
    if (optional?.height) this.height = optional.height as any;
    if (optional?.importance) this.importance = optional.importance as any;
    if (optional?.loading) this.loading = optional.loading as any;
    if (optional?.name) this.name = optional.name as any;
    if (optional?.referrerpolicy) this.referrerpolicy = optional.referrerpolicy as any;
    if (optional?.src) this.src = optional.src as any;
    if (optional?.srcdoc) this.srcdoc = optional.srcdoc as any;
    if (optional?.width) this.width = optional.width as any;
    Component.applyData(optional, this);
  }

  public set allowfullscreen(value: boolean) {
    this.setAttribute("allowfullscreen", value.toString());
  }

  public get allowfullscreen(): boolean {
    return this.getAttribute("allowfullscreen") == "true";
  }

  public set allowpaymentrequest(value: boolean) {
    this.setAttribute("allowpaymentrequest", value.toString());
  }

  public get allowpaymentrequest(): boolean {
    return this.getAttribute("allowpaymentrequest") == "true";
  }

  public set csp(value: string) {
    this.setAttribute("csp", value);
  }

  public get csp(): string {
    return this.getAttribute("csp");
  }

  public set importance(value: "auto" | "high" | "low") {
    this.setAttribute("importance", value);
  }

  public get importance(): "auto" | "high" | "low" {
    return this.getAttribute("importance") as any;
  }

  public set referrerpolicy(
    value:
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url",
  ) {
    this.setAttribute("referrerpolicy", value);
  }

  public get referrerpolicy(): string {
    return this.getAttribute("referrerpolicy");
  }
}

customElements.define("base-iframe-element", IFrameElement, {
  extends: "iframe",
});

// <legend>
export class LegendElement extends HTMLLegendElement implements IComponent {
  constructor(
    optional?: StyleOptional & {
      value?: number;
    },
  ) {
    super();
    Component.applyData(optional, this);
    if (optional?.value) this.innerHTML = optional.value as any;
  }
}

customElements.define("base-legend-element", LegendElement, {
  extends: "legend",
});

export class SvgElement extends HTMLObjectElement implements IComponent {
  constructor(optional?: StyleOptional & { data?: string }) {
    super();
    Component.applyData(optional, this);
    if (optional?.width) this.width = optional.width as any;
    if (optional?.height) this.height = optional.height as any;
    this.setAttribute("type", "image/svg+xml");
  }
  set color(value: string) {
    const pathElement = this.contentDocument?.querySelector("path");
    if (pathElement) pathElement.style.fill = value;
    else {
      this.onload = () => {
        const pathElement = this.contentDocument?.querySelector("path");
        if (pathElement) pathElement.style.fill = value;
      };
      var circleElements = this.contentDocument.querySelectorAll("circle");

      // Alterar a cor de todos os elementos de círculo dentro do SVG
      circleElements.forEach(function (circle) {
        circle.style.fill = value; // Alterar para a cor vermelha
      });
    }
  }

  get color(): string {
    const pathElement = this.contentDocument?.querySelector("path");
    if (pathElement) return pathElement.style.fill.toString();
    return "";
  }
}

customElements.define("base-svg-element", SvgElement, { extends: "object" });

export class NavElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-nav-element", NavElement, { extends: "nav" });

export class SectionElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-section-element", SectionElement, {
  extends: "section",
});

export class ArticleElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-article-element", ArticleElement, {
  extends: "article",
});

export class SummaryElement extends HTMLElement implements IComponent {
  constructor(optional?: StyleOptional) {
    super();
    Component.applyData(optional, this);
  }
}

customElements.define("base-summary-element", SummaryElement, {
  extends: "summary",
});

export class ILayout extends Component {
  constructor(optional?: StyleOptional) {
    super(optional);
  }
}

customElements.define("base-layout-element", ILayout);
