import { Component, DivElement, StyleOptional } from "../../../";

export class PopUpButton extends Component {
  #options: HTMLElement[];
  #buttonIcon: string;
  #buttonDiv: DivElement;

  constructor(props: StyleOptional & { buttonText?: string; buttonIcon?: string; options: HTMLElement[]; hover?: boolean }) {
    super(props);
    this.#buttonIcon = props.buttonIcon;
    this.#options = props.options;
    this.addClassName("pop-up-button");
    this.#buttonDiv = new DivElement({
      text: props.buttonText,
      className: "button",
      background: `url("${this.icon}")  no-repeat center center / contain`,
      backgroundSize: "contain",
    });
    this.#buttonDiv.onclick = () => {
      this.#buttonDiv.classList.toggle("pressed");
      this.onChange();
    };
    const optionsContainer = new DivElement({ className: "options-container" });
    for (const option of this.options) {
      optionsContainer.append(option);
      if (props.hover == undefined || props.hover == true) option.classList.add("option");
      option.addEventListener("click", () => this.onSelect(option));
    }
    this.append(this.#buttonDiv, optionsContainer);

    document.addEventListener("click", (e) => {
      if ((e.target as Node) != this.#buttonDiv) this.#buttonDiv.classList.remove("pressed");
    });
  }

  get icon(): string {
    return this.#buttonIcon;
  }

  set icon(value: string) {
    this.#buttonIcon = value;
    this.#buttonDiv.style.background = `url("${this.buttonIcon}")  no-repeat center center / contain`;
  }

  get buttonIcon(): HTMLElement {
    return this.#buttonDiv;
  }
  get options(): HTMLElement[] {
    return this.#options;
  }

  set options(value: HTMLElement[]) {
    this.#options = value;
  }

  onChange: () => void = () => {};

  onSelect: (value: any) => void = () => {};
}

customElements.define("pop-up-button", PopUpButton);
