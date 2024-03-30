import { Component, InputElement, LabelElement, StyleOptional, IconElement } from "../..";

export class CheckBox extends Component {
  private _input: InputElement;
  private _label: LabelElement;
  private static serial = Math.round(Math.random() * 1000);
  private _variant: "checkbox" | "radio" = "checkbox";

  constructor(
    optional?: StyleOptional & {
      variant?: "checkbox" | "radio";
      label?: string;
      value?: any;
      icon?: IconElement;
      placeholderAnimation?: boolean;
    },
  ) {
    const label = optional?.label;
    delete optional?.label;
    super(optional);
    this._variant = optional?.variant || "checkbox";
    this._input = new InputElement({
      type: this.variant,
      className: this.variant,
      id: `checkbox-${CheckBox.serial++}-${Math.round(Math.random() * 100)}`,
    });
    this.input.value = optional?.value || label || "";
    this._label = new LabelElement({ text: label });
    this._label.setAttribute("for", this._input.id);
    if (optional?.color) this._input.style.accentColor = optional.color;
    this.append(this._input, this._label);
    const labelColor = this.label.style.color;
    this.input.addEventListener("change", (e) => {
      if (this._input.checked) {
        this._label.style.color = this._input.style.accentColor;
      } else this._label.style.color = labelColor;
      this.onChange(this._input.checked, this.value);
    });
  }

  public onChange: (checked: boolean, value?: any) => void = () => {};

  public get id(): string {
    return this.input.id;
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

  public get variant(): "checkbox" | "radio" {
    return this._variant;
  }

  public set variant(value: "checkbox" | "radio") {
    this._variant = value;
    this.input.type = value;
    this.input.className = value;
  }
}
// @ts-ignore
customElements.define("check-box", CheckBox);

export class CheckBoxGroup extends Component {
  constructor(...checkBoxes: CheckBox[]) {
    super({ display: "flex" });
    this.append(...checkBoxes);
  }

  public append(...nodes: (string | Node)[]): void {
    nodes.forEach((node) => {
      this.check(node as Node);
    });
    super.append(...nodes);
  }

  public appendChild<T extends Node>(node: T): T {
    this.check(node);
    return super.appendChild(node);
  }

  public onChange: (checkbox: CheckBox) => void = () => {};

  private check<T extends Node>(node: T) {
    if (node instanceof CheckBox) {
      const checkbox = node as CheckBox;
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          this.onChange(checkbox);
          this.querySelectorAll("check-box").forEach((cb) => {
            if (cb !== checkbox) {
              (cb as CheckBox).checked = false;
            }
          });
        }
        console.log("checkbox: ", checkbox.id, "checked: ", checkbox.checked);
      });
    }
  }
}

// @ts-ignore
customElements.define("check-box-group", CheckBoxGroup);
