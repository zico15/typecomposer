import { CardElement, Component, StyleOptional } from "../../element";

export class DialogPane extends Component {
  // @ts-ignore
  private _content: HTMLElement = new CardElement({
    className: "content",
    width: "500px",
    height: "300px",
  });

  constructor(optional?: StyleOptional) {
    super(optional);
    if (optional?.display == undefined) this.style.display = "none";
    this.append(this._content);
    this.addEventListener("click", (e) => {
      this.dismiss();
      e.stopPropagation();
    });
    this._content.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  oninit(): void {
    console.log("DialogElement");
  }

  get content(): HTMLElement {
    return this._content;
  }

  public show(): void {
    this.style.display = "block";
  }

  public dismiss(): void {
    this.style.display = "none";
  }
}
// @ts-ignore
customElements.define("dialog-pane", DialogPane);
