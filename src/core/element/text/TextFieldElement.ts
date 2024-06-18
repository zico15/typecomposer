import {
  Component,
  DivElement,
  FieldSetElement,
  IComponent,
  IconElement,
  InputElement,
  InputType,
  LabelElement,
  LegendElement,
  Ref,
  StyleOptional,
  Variant,
} from "../..";
import { ref } from "../../";

export class TextFieldElement extends Component {
  private _input: InputElement;
  private _label: LabelElement | undefined = undefined;
  private _icon?: IComponent | undefined = undefined;
  private iconPane = new DivElement({ className: "icon" });
  private _fieldset: FieldSetElement;

  constructor(
    optional?: StyleOptional & {
      variant?: Variant;
      type?: InputType;
      placeholder?: string;
      icon?: IconElement;
      placeholderAnimation?: boolean;
      value?: string | ref<string>;
    },
  ) {
    super();
    this._fieldset = new FieldSetElement();
    this.fieldset.variant = optional?.variant;
    this._input = new InputElement({
      type: optional?.type || "text",
      placeholder: " ",
      value: optional?.value || optional?.text || "",
    });
    this.fieldset.append(new LegendElement({ text: optional?.placeholder || "" }));
    this.append(this.input, this.fieldset);
    if (optional?.placeholderAnimation == true || optional?.placeholderAnimation == undefined) {
      this._label = new LabelElement({ text: optional?.placeholder || " " });
      this._label.addEventListener("click", () => this.input.focus());
      this.appendChild(this.label);
    } else this.input.placeholder = optional?.placeholder || " ";
    this.appendChild(this.iconPane);
    this.iconPane.addEventListener("click", () => this.input.focus());
    // @ts-ignore
    this.input.variant = optional?.variant;
    if (optional?.icon != undefined) this.icon = optional.icon;
    delete optional?.value;
    delete optional?.text;
    Component.applyData(optional, this);
  }

  get input(): InputElement {
    return this._input;
  }

  get label(): LabelElement | undefined {
    return this._label;
  }

  get icon(): IComponent | undefined {
    return this._icon;
  }

  get fieldset(): FieldSetElement {
    return this._fieldset;
  }

  set variant(value: Variant) {
    this.input.variant = value;
    this.fieldset.variant = value;
  }

  set icon(value: IComponent) {
    if (this._icon != undefined) this.iconPane.removeChild(this._icon);
    this._icon = value;
    const s = this.iconPane.style;
    this.iconPane.append(value);
    if (value.style.order == "" || value.style.order == "0") {
      if (this.label != undefined) this.label.style.marginLeft = this.iconPane.offsetWidth + 30 + "px";
      this.input.style.paddingLeft = this.iconPane.offsetWidth + 40 + "px";
      this.iconPane.style.left = "1rem";
      this.iconPane.style.justifyContent = "center";
      this.iconPane.style.removeProperty.bind(s, "right");
    } else {
      console.log("IComponent:", this.iconPane.style);
      this.iconPane.style.removeProperty.bind(s, "left");
      this.iconPane.style.right = "1rem";
      this.iconPane.style.justifyContent = "end";
    }
  }

  get value(): string {
    return this.input.value;
  }

  set value(value: string | ref<string>) {
    if (Ref.subscribe(value, this, "value") == undefined) this.input.value = String(value);
  }
}
// @ts-ignore
customElements.define("text-field-element", TextFieldElement);
