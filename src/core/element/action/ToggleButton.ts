import { Register, CheckBox, DataElement } from "../..";

export interface DataToggleButton extends DataElement {}

export class ToggleButton extends CheckBox {
  constructor(data?: DataToggleButton) {
    super({ ...data, color: data?.color || undefined });
    this.input.classList.remove("checkbox");
    const labelColor = this.label.style.backgroundColor;
    this.addEventListener("change", (e) => {
      if (this.input.checked) {
        this.label.style.backgroundColor = this.input.style.accentColor;
      } else this.label.style.backgroundColor = labelColor;
    });
  }
}

customElements.define("toggle-button", ToggleButton);
