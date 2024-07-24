import { Component, H3Element, H4Element, IconElement } from "..";

export class TabItem extends Component {
  private __closeable: boolean = false;
  private _titleElement: H3Element;
  private displayContent: string;
  private _content: HTMLElement | undefined;
  private closeIcon: IconElement | null = null;

  constructor(
    public title: string,
    content?: HTMLElement,
    icon?: IconElement | null,
    closeable: boolean = true,
  ) {
    super();
    if (icon != null) {
      icon.style.order = "0";
      this.appendChild(icon);
    }
    this._content = content;
    if (this.content) {
      this.displayContent = content.style.display.toString(); //todo - fix
      // @ts-ignore
      this.content.style.display = "none";
    }
    this._titleElement = new H4Element({
      text: title,
      padding: "0px 10px",
      order: "1",
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
      this.closeIcon = new IconElement({ icon: "fa-thin fa-x", order: "2" });
      this.closeIcon.onclick = () => {
        this.remove();
      };
      this.appendChild(this.closeIcon);
    } else {
      this.closeIcon?.remove();
      this.closeIcon = null;
    }
  }

  public select() {
    if (!this.classList.contains("tab-title-active")) this.addClassName("tab-title-active");
    if (this.content) this.content.style.display = this.displayContent;
  }

  public unselect() {
    if (this.classList.contains("tab-title-active")) this.classList.remove("tab-title-active");
    if (this.content) this.content.style.display = "none";
  }

  get titleElement(): H3Element {
    return this._titleElement;
  }

  get content(): HTMLElement | undefined {
    return this._content;
  }

  set content(newContent: HTMLElement | undefined) {
    this._content.remove();
    this._content = newContent;
    this.onUpdatedContent(newContent);
  }

  public onUpdatedContent(newContent: HTMLElement | undefined) {}
}
// @ts-ignore
customElements.define("tab-item", TabItem);
