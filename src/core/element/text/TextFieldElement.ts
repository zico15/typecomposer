import { Variant } from "../base/CSSStyle";
import { DataInputElement } from "./InputElement";
import {
  Component,
  DivElement,
  IconElement,
  InputElement,
  LabelElement,
} from "..";
import { Register } from "../../decorators";

export interface DataTextFieldElement extends DataInputElement {
  variant?: Variant;
  placeholder?: string;
  icon?: IconElement;
  placeholderAnimation?: boolean;
}

export class TextFieldElement extends Component {
  private _input: InputElement;
  private _label: LabelElement | undefined = undefined;
  private _icon?: IconElement | undefined = undefined;
  private iconPane = new DivElement({ className: "icon" });

  constructor(data?: DataTextFieldElement) {
    super();
    this._input = new InputElement({
      type: "text",
      height: "auto",
      width: "100%",
      placeholder: " ",
    });
    this.appendChilds(this.input);
    if (
      data?.placeholderAnimation == true ||
      data?.placeholderAnimation == undefined
    ) {
      this._label = new LabelElement({ text: data?.placeholder || " " });
      this._label.addEventListener("click", () => this.input.focus());
      this.appendChilds(this.label);
    } else this.input.placeholder = data?.placeholder || " ";
    this.appendChilds(this.iconPane);
    this.iconPane.addEventListener("click", () => this.input.focus());
    // @ts-ignore
    Component.setVariant(this.input, data?.variant);
    if (data?.icon != undefined) this.icon = data.icon;
  }

  get input(): InputElement {
    return this._input;
  }

  get label(): LabelElement | undefined {
    return this._label;
  }

  get icon(): IconElement | undefined {
    return this._icon;
  }

  set icon(value: IconElement) {
    if (this._icon != undefined) this.iconPane.removeChild(this._icon);
    this._icon = value;
    this.iconPane.append(value);
    if (value.style.order == "" || value.style.order == "0") {
      if (this.label != undefined)
        this.label.style.marginLeft = this.iconPane.offsetWidth + 30 + "px";
      this.input.style.paddingLeft = this.iconPane.offsetWidth + 40 + "px";
      this.iconPane.style.left = "1rem";
      this.iconPane.style.justifyContent = "center";
      this.iconPane.style.removeProperty("right");
    } else {
      this.iconPane.style.removeProperty("left");
      this.iconPane.style.right = "1rem";
      this.iconPane.style.justifyContent = "end";
    }
  }
}
// @ts-ignore
customElements.define("text-field-element", TextFieldElement);
