import { CardElement, Component, DataElement, DivElement } from "../../element";

export class DialogElement extends Component {
  private _content: HTMLElement = new CardElement({
    className: "content",
    width: "500px",
    height: "300px",
  });

  constructor(data?: DataElement) {
    super(data);
    if (data?.display == undefined) this.style.display = "none";
    this.append(this._content);
    this.addEventListener("click", (e) => {
      this.dismiss();
      e.stopPropagation();
    });
    this._content.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  onInit(): void {
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

customElements.define("dialog-element", DialogElement);
