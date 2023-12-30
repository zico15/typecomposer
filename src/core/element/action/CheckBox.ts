import {
  Component,
  Register,
  DivElement,
  InputElement,
  TextFieldElement,
  Variant,
  type DataTextFieldElement,
  LabelElement,
} from "../..";

type ChecBoxType = "checkbox" | "radio";

export class CheckBox extends Component {
  private _input: InputElement;
  private _label: LabelElement;
  private static serial = Math.round(Math.random() * 1000);
  checBoxType: ChecBoxType = "checkbox";

  constructor(data?: DataTextFieldElement) {
    super(data);
    this._input = new InputElement({
      type: this.checBoxType,
      className: this.checBoxType,
      id: `checkbox-${CheckBox.serial++}-${Math.round(Math.random() * 100)}`,
    });
    this._label = new LabelElement({ text: data?.placeholder });
    this._label.setAttribute("for", this._input.id);
    if (data?.color) this._input.style.accentColor = data.color;
    this.append(this._input, this._label);
    const labelColor = this.label.style.color;
    this.input.addEventListener("change", (e) => {
      if (this._input.checked) {
        this._label.style.color = this._input.style.accentColor;
      } else this._label.style.color = labelColor;
    });
  }

  public get checked(): boolean {
    return this.input.checked;
  }

  public set checked(value: boolean) {
    this.input.checked = value;
  }

  public get value(): string {
    return this._input.value;
  }

  public set value(value: string) {
    this._input.value = value;
  }

  public get input(): InputElement {
    return this._input;
  }

  public get label(): LabelElement {
    return this._label;
  }
}
// @ts-ignore
customElements.define("check-box", CheckBox);
