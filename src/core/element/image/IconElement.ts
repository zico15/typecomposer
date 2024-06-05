import { Component, DataImageElement, ref } from "../..";

export interface DataIconElement extends DataImageElement {
  icon?: string | ref<string>;
}

export class IconElement extends Component {
  private _icon = ref("");

  constructor(optional?: DataIconElement) {
    super(optional);
    if (optional != undefined && optional.icon != undefined) this.icon = optional.icon;
  }

  get icon(): string {
    return this._icon.value;
  }

  set icon(value: string | ref<string>) {
    if (typeof value !== "string") this["_styleref"].appendStyleref("icon", this, value);
    else {
      const splice = value.split(" ");
      splice.forEach((v) => {
        this.addClasName(v);
      });
    }
  }

  get color(): string {
    // @ts-ignore
    return this.style.color;
  }

  set color(value: string | ref<string>) {
    this.style.color = value;
  }
}
customElements.define("icon-element", IconElement);
