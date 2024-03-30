import { Component, H3Element, H4Element, IconElement } from "..";

export class TabItem extends Component {
  private __closeable: boolean = false;
  private titleElement: H3Element;
  private displayContent: string;
  private _content: HTMLElement;
  private closeIcon: IconElement | null = null;

  constructor(
    public title: string,
    content: HTMLElement,
    icon: IconElement | null,
    closeable: boolean = true,
  ) {
    super();
    if (icon != null) {
      icon.style.order = "0";
      this.appendChild(icon);
    }
    this._content = content;
    this.displayContent = content.style.display;
    content.style.display = "none";
    this.titleElement = new H4Element({
      text: title,
      padding: "0px 10px",
      // @ts-ignore
      order: 1,
      margin: "0px",
    });
    this.appendChild(this.titleElement);
    this.className = "tab-title";
    this.style.display = "grid";
    this.style.gridTemplateColumns = "auto max-content auto";
    this.style.gridTemplateRows = "1fr";
    this.style.alignItems = "center";
    this.closeable = closeable;
  }

  get closeable(): boolean {
    return this.__closeable;
  }

  set closeable(value: boolean) {
    this.__closeable = value;
    if (value && !this.closeIcon) {
      // @ts-ignore
      this.closeIcon = new IconElement({ icon: "fa-thin fa-x", order: 2 });
      this.closeIcon.onclick = () => {
        console.log("close");
        this.remove();
      };
      this.appendChild(this.closeIcon);
    } else {
      this.closeIcon?.remove();
      this.closeIcon = null;
    }
  }

  public select() {
    if (!this.classList.contains("tab-title-active")) this.addClasName("tab-title-active");
    this._content.style.display = this.displayContent;
  }

  public unselect() {
    if (this.classList.contains("tab-title-active")) this.classList.remove("tab-title-active");
    this._content.style.display = "none";
  }

  get content(): HTMLElement {
    return this._content;
  }
}
// @ts-ignore
customElements.define("tab-element", TabElement);
