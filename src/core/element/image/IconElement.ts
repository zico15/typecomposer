import { Component, StyleOptional, ref } from "../..";

export class IconElement extends Component {
  private _icon = ref("");

  constructor(
    optional?: StyleOptional & {
      icon?: string | ref<string>;
      src?: string;
      alt?: string;
    },
  ) {
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
        this.addClassName(v);
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
