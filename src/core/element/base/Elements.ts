import { Ref } from "../../ref";
import {
  CSSStyleDeclarationOptional,
  CSSStyleDeclarationRef,
  CSSStyleRef,
  Variant,
} from "./CSSStyle";
import { EventComponent, EventHandler } from "./Event";
import { router } from "../..";

export type Layout = "hbox" | "vbox" | "column" | "row";

export interface DataElement extends CSSStyleDeclarationOptional {
  id?: string;
  className?: string;
  layout?: Layout;
}

export interface IElement {
  onInit(): void;
  appendChilds(...childs: any[]): void;
  addClasName(...names: string[]): void;
  // @ts-ignore
  get style(): CSSStyleDeclarationRef;
}

// @ts-ignore
export interface IComponent extends HTMLElement {
  onInit(): void;
  unmount?(): void;
  appendChilds(...childs: any[]): void;
  addClasName(...names: string[]): void;
  // @ts-ignore
  get style(): CSSStyleDeclarationRef;
  set innerHTML(value: string | Ref<string> | any);
}

// 1. `<div>` - Para criar blocos de conteúdo genéricos.
// 2. `<p>` - Para parágrafos de texto.
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
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();
    if (data != undefined) this.setStyle(data);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  setStyle(data: DataElement) {
    Component.applyDate(data, this);
  }

  set innerHTML(value: string) {
    if (value.includes("v-for")) console.log("innerHTML: ", value);
    super.innerHTML = value;
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }

  public static applyDate<T extends IComponent>(
    data: DataElement | undefined,
    element: T,
  ): void {
    if (data != undefined) {
      if (data.id) {
        (element as any).id = data.id;
      }
      if (data.className != undefined) {
        (element as any).addClasName(data.className);
      }
      if (data.layout != undefined) {
        (element as any).addClasName(data.layout);
      }
      this.applyStyleOrAttribute(data, element);
    }
  }

  static applyStyleOrAttribute<T extends IComponent>(
    data: CSSStyleDeclarationOptional,
    element: T,
  ): void {
    if (data) {
      Object.keys(data).forEach((key: string) => {
        if (key == "for" && (data as any)[key] != undefined)
          (element as any).setAttribute("for", (data as any)[key]);
        else if (key == "className" && (data as any)[key] != undefined)
          (element as any).addClasName((data as any)[key]);
        else if (key == "text" && (data as any)[key] != undefined)
          (element as any).innerHTML = (data as any)[key];
        else if (
          element.style?.hasOwnProperty &&
          element.style.hasOwnProperty?.(key)
        )
          element.style[key] = (data as any)[key];
        else if ((data as any)[key] != undefined) {
          (element as any)[key] = (data as any)[key];
        }
      });
    }
  }

  public static setVariant(
    element: HTMLElement,
    variant: Variant | undefined,
  ): void {
    const vart = variant == undefined ? "default-border" : `${variant}-border`;
    const variants = [
      "default-border",
      "outline-border",
      "underlined-border",
      "solo-border",
    ];
    variants.forEach((value: string) => {
      if (element.classList.contains(value)) element.classList.remove(value);
    });
    element.classList.add(vart == "default-border" ? "outline-border" : vart);
  }

  public onEvent(
    type: string,
    listener: EventHandler,
    options?: boolean | AddEventListenerOptions | undefined,
  ): void {
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

customElements.define("component-element", Component, { extends: "div" });

export class DivElement extends HTMLDivElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);
  public Test = "teste";

  constructor(data?: DataElement) {
    super();
    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // set innerHTML(value: string) {
  //     if (value.includes("v-for")) {
  //         const regex = /<\w+\s[^>]*?\bv-for\b[^>]*?>[\s\S]*?<\/\w+>/g;
  //         // Encontrar correspondências na string HTML
  //         const matches = value.match(regex);
  //         console.log("innerHTML: ", matches)

  //     }
  //     super.innerHTML = value;
  // }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-div-element", DivElement, { extends: "div" });

export class ParagraphElement
  extends HTMLParagraphElement
  implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-p-element", ParagraphElement, { extends: "p" });

export interface DataAnchorElement extends DataElement {
  href?: string;
  rlink?: string;
  target?: string;
}

export class AnchorElement extends HTMLAnchorElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);
  private _rlink: string = "";

  constructor(data?: DataAnchorElement) {
    super();
    Component.applyDate(data, this);
    this.addEventListener("click", (event) => {
      event.preventDefault();
      if (this._rlink != "") {
        router.go(this._rlink);
      }
    });
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }

  set rlink(link: string) {
    console.log("set rlink: ", link);
    this._rlink = link;
  }

  get rlink(): string {
    return this._rlink;
  }
}

customElements.define("base-a-element", AnchorElement, { extends: "a" });

export interface DataImageElement extends DataElement {
  src?: string;
  alt?: string;
}

export class ImageElement extends HTMLImageElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataImageElement) {
    super();
    this.className = "image-element";
    Component.applyDate(data, this);
    if (data?.src != undefined) this.src = data.src;
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-img-element", ImageElement, { extends: "img" });

export class UListElement extends HTMLUListElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-ul-element", UListElement, { extends: "ul" });

export class OrderedListElement extends HTMLOListElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-ol-element", OrderedListElement, { extends: "ol" });

export class ListItemElement extends HTMLLIElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }

  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-li-element", ListItemElement, { extends: "li" });

export class HeaderElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }

  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-header-element", HeaderElement, {
  extends: "header",
});

export class FooterElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }

  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-footer-element", FooterElement, {
  extends: "footer",
});

export class MainElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }

  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-main-element", MainElement, { extends: "main" });

export interface DataHeadingElement extends DataElement {
  text?: string | Ref<string>;
  for?: string;
}

export class H1Element extends HTMLHeadingElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
    if (data?.text) this.innerText = data.text.toString();
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-h1-element", H1Element, { extends: "h1" });

export class H2Element extends HTMLHeadingElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
    if (data?.text) this.innerText = data.text.toString();
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-h2-element", H2Element, { extends: "h2" });

export class H3Element extends HTMLHeadingElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
    if (data?.text) this.text = data.text;
  }

  get text(): string {
    return this.innerText;
  }

  set text(value: string | Ref<string>) {
    if (value instanceof Ref)
      this["_styleRef"].appendStyleRef("text", this, value);
    else this.innerText = value;
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-h3-element", H3Element, { extends: "h3" });

export class H4Element extends H3Element implements IComponent {
  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
    if (data?.text) this.innerText = data.text.toString();
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }
}

customElements.define("base-h4-element", H4Element, { extends: "h4" });

export class H5Element extends H3Element implements IComponent {
  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
    if (data?.text) this.innerText = data.text.toString();
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }
}

customElements.define("base-h5-element", H5Element, { extends: "h5" });

export class H6Element extends H3Element implements IComponent {
  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
    if (data?.text) this.innerText = data.text.toString();
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }
}

customElements.define("base-h6-element", H6Element, { extends: "h6" });

export class SpanElement extends HTMLSpanElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-span-element", SpanElement, { extends: "span" });

export class StrongElement extends HTMLSpanElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-strong-element", StrongElement, {
  extends: "strong",
});

export class EmElement extends HTMLEmbedElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  public onInit(): void { }

  public appendChilds(...childs: any[]): void {
    throw new Error("Method not implemented.");
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-em-element", EmElement, { extends: "em" });

export class BreakElement extends HTMLBRElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-br-element", BreakElement, { extends: "br" });

export class HorizontalRuleElement extends HTMLHRElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-hr-element", HorizontalRuleElement, {
  extends: "hr",
});

export class TableElement extends HTMLTableElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-table-element", TableElement, { extends: "table" });

export class TableRowElement extends HTMLTableRowElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-tr-element", TableRowElement, { extends: "tr" });

export class FormElement extends HTMLFormElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-form-element", FormElement, { extends: "form" });

export interface DataInputElement extends DataElement {
  id?: string;
  type?:
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
  name?: string;
  value?: string;
  placeholder?: string;
}

export class InputElement extends HTMLInputElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataInputElement) {
    super();
    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-input-element", InputElement, { extends: "input" });

export class ButtonElement extends HTMLButtonElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataHeadingElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }

  set innerHTML(value: string | Ref<string> | any) {
    if (value instanceof Ref) {
      value.subscriber({ ref: this, name: "innerHTML" });
      super.innerHTML = value.toString();
    } else super.innerHTML = value;
  }
}

customElements.define("base-button-element", ButtonElement, {
  extends: "button",
});

export class TextAreaElement extends HTMLTextAreaElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-textarea-element", TextAreaElement, {
  extends: "textarea",
});

export class LabelElement extends HTMLLabelElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataHeadingElement) {
    super();
    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-label-element", LabelElement, { extends: "label" });

export class SelectElement extends HTMLSelectElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-select-element", SelectElement, {
  extends: "select",
});

export class IframeElement extends HTMLIFrameElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-iframe-element", IframeElement, {
  extends: "iframe",
});

export class AudioElement extends HTMLAudioElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-audio-element", AudioElement, { extends: "audio" });

export class VideoElement extends HTMLVideoElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-video-element", VideoElement, { extends: "video" });

export class CanvasElement extends HTMLCanvasElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();
    if (data?.width) this.width = data.width;
    if (data?.height) this.height = data.height;
    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-canvas-element", CanvasElement, {
  extends: "canvas",
});

export class SvgElement extends SVGElement {
  constructor() {
    super();
  }
}

export class NavElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-nav-element", NavElement, { extends: "nav" });

export class SectionElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-section-element", SectionElement, {
  extends: "section",
});

export class ArticleElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-article-element", ArticleElement, {
  extends: "article",
});

export class SummaryElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }
  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }
  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-summary-element", SummaryElement, {
  extends: "summary",
});

export class DetailsElement extends HTMLElement implements IComponent {
  private _styleRef: CSSStyleRef = new CSSStyleRef(super.style);

  constructor(data?: DataElement) {
    super();

    Component.applyDate(data, this);
  }

  onInit(): void { }

  appendChilds(...childs: any[]): void {
    childs.forEach((child) => {
      try {
        if (child && child instanceof Node) {
          this.appendChild(child);
        }
      } catch (error) { }
    });
  }

  addClasName(...names: string[]): void {
    this.classList.add(...names);
  }

  // @ts-ignore
  get style(): CSSStyleDeclarationRef {
    return this._styleRef;
  }
}

customElements.define("base-details-element", DetailsElement, {
  extends: "details",
});
