import {
  AnchorElement,
  Component,
  DataElement,
  LabelElement,
  ListItemElement,
  NavElement,
  UListElement,
  Variant,
  InputElement,
} from "../..";

export interface DataMenuBarElement extends DataElement {
  title?: string;
  variant?: Variant;
  logo?: HTMLElement | string;
}

export class MenuBarElement extends Component {
  private _nav: NavElement;
  private _ul = new UListElement();
  private checkbox: InputElement = new InputElement({
    type: "checkbox",
    id: "check",
  });
  private checkboxLabel: LabelElement = new LabelElement({
    for: "check",
    className: "checkbtn",
    text: '<i class="fas fa-bars"></i>',
  });
  private _logo: HTMLElement | undefined;

  constructor(data?: DataMenuBarElement) {
    super();
    if (data?.logo) {
      this.logo = data.logo;
      this.append(this.logo);
      delete data.logo;
    }
    Component.applyDate(data, this);
    this._nav = new NavElement(data);
    this.nav.append(this.checkbox, this.checkboxLabel, this._ul);
    this.append(this.nav);
    this.checkbox.addEventListener("change", () => {
      console.log(this.checkbox.checked);
      this._ul.style.top = this.clientHeight + "px";
    });
  }

  get nav(): NavElement {
    return this._nav;
  }

  // get label(): LabelElement | undefined {
  //     return this._label;
  // }

  get logo(): HTMLElement | undefined {
    return this._logo;
  }

  set logo(value: HTMLElement | string) {
    if (this._logo) this._logo.remove();

    if (typeof value === "string")
      // @ts-ignore
      this._logo = new LabelElement({ text: value });
    else this._logo = value;
    this.logo.classList.add("logo");
    this.append(this.logo);
  }

  public addMenu(
    menu: HTMLElement | string,
    isLogo: boolean = false,
    styles?: DataElement,
  ): void {
    const li = new ListItemElement();
    if (this._ul.children.length === 0) li.classList.add("logo");
    if (isLogo && !(typeof menu === "string")) {
      li.appendChild(menu);
    } else {
      const a = new AnchorElement(styles);
      if (typeof menu === "string") {
        a.text = menu;
      } else {
        a.append(menu);
      }
      li.appendChild(a);
    }
    this._ul.appendChild(li);
  }
}
// @ts-ignore
customElements.define("menu-bar-element", MenuBarElement);
