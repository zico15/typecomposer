import { Register, CheckBox, StyleOptional } from "../..";

export interface DataToggleButton extends StyleOptional {}

export class ToggleButton extends CheckBox {
  constructor(optional?: DataToggleButton) {
    // @ts-ignore
    super({ ...data, color: optional?.color || undefined });
    this.input.classList.remove("checkbox");
    const labelColor = this.label.style.backgroundColor;
    this.addEventListener("change", (e) => {
      if (this.input.checked) {
        this.label.style.backgroundColor = this.input.style.accentColor;
      } else this.label.style.backgroundColor = labelColor;
    });
  }
}
// @ts-ignore
customElements.define("toggle-button", ToggleButton);
