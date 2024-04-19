import { StyleOptional, Component, InputElement } from "../..";

export class ColorPicker extends Component {
  private _input: InputElement = new InputElement({
    type: "color",
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    appearance: "none",
    padding: "0",
    margin: "0",
  });

  constructor(optional?: StyleOptional & { value?: string }) {
    super();
    this.append(this._input);
    // this._input.onchange = () => {
    //   this.style.backgroundColor = this._input.value;
    // };
    this.addEventListener("click", () => {
      this._input.click();
    });
    Component.applyDate({ display: "flex", ...optional }, this);
  }

  get value(): string {
    return this._input.value;
  }

  set value(value: string) {
    this._input.value = value;
  }
}

customElements.define("color-picker-element", ColorPicker);
