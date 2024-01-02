import { Component, DataImageElement } from "..";
import { Ref } from "../../ref";

export interface DataIconElement extends DataImageElement {
  icon?: string | Ref<string>;
}

export class IconElement extends Component {
  private _icon: Ref<string> = new Ref<string>("");

  constructor(optional?: DataIconElement) {
    super(optional);
    if (optional != undefined && optional.icon != undefined)
      this.icon = optional.icon;
  }

  get icon(): string {
    return this._icon.value;
  }

  set icon(value: string | Ref<string>) {
    if (value instanceof Ref)
      this["_styleRef"].appendStyleRef("icon", this, value);
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

  set color(value: string | Ref<string>) {
    this.style.color = value;
  }
}
// @ts-ignore
customElements.define("icon-element", IconElement);
