import {
  Component,
  InputElement,
  LabelElement,
  StyleOptional,
  Variant,
  IconElement,
} from "../..";

type ChecBoxType = "checkbox" | "radio";

export class CheckBox extends Component {
  private _input: InputElement;
  private _label: LabelElement;
  private static serial = Math.round(Math.random() * 1000);
  private checBoxType: ChecBoxType = "checkbox";

  constructor(
    optional?: StyleOptional & {
      variant?: Variant;
      placeholder?: string;
      icon?: IconElement;
      placeholderAnimation?: boolean;
      checBoxType: ChecBoxType;
    },
  ) {
    super(optional);
    this.checBoxType = optional?.checBoxType || "checkbox";
    this._input = new InputElement({
      type: this.checBoxType,
      className: this.checBoxType,
      id: `checkbox-${CheckBox.serial++}-${Math.round(Math.random() * 100)}`,
    });
    this._label = new LabelElement({ text: optional?.placeholder });
    this._label.setAttribute("for", this._input.id);
    if (optional?.color) this._input.style.accentColor = optional.color;
    this.append(this._input, this._label);
    const labelColor = this.label.style.color;
    this.input.addEventListener("change", (e) => {
      if (this._input.checked) {
        this._label.style.color = this._input.style.accentColor;
      } else this._label.style.color = labelColor;
      this.onChange(this._input.checked);
    });
  }

  public onChange: (checked: boolean) => void = () => {};

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
