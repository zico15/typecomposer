import {
  Component,
  Register,
  DivElement,
  InputElement,
  TextFieldElement,
  Variant,
  DataTextFieldElement,
} from "../..";

export interface DataSelectBox<T> extends DataTextFieldElement {
  search?: boolean;
  variant?: Variant;
  itemValue?: (e: T) => string;
}

export interface SelectBoxItem {
  get value(): string;
}

export class SelectBox<T = any> extends TextFieldElement {
  private _options = new DivElement({ className: "options-container" });
  private elements = new Map<DivElement, T>();
  private itemValue: (e: T) => string = (e) => e as any;

  constructor(data?: DataSelectBox<T>) {
    super(data);
    this.append(this.options);
    this.input.addEventListener("focus", () => {
      if (!this.options.classList.contains("active")) {
        this.options.classList.add("active");
        if (data?.search) this.filterList(this.input.value);
      }
    });
    this.input.readOnly = !(data?.search || false);
    if (this.input.readOnly) this.input.style.userSelect = "none";
    this.input.addEventListener("input", () => {
      if (data?.search) {
        this.filterList(this.input.value);
      }
    });
    this.input.addEventListener("blur", () => {
      setTimeout(() => {
        if (this.options.classList.contains("active"))
          this.options.classList.remove("active");
      }, 100);
    });
    if (data?.itemValue) this.itemValue = data.itemValue;
    Component.setVariant(this.options, data?.variant);
    console.log(this.itemValue);
  }

  onInit(): void {
    this.options.style.marginTop = this.offsetTop + 14 + "px";
  }

  public addItem(item: T) {
    const option = new DivElement({ className: "option" });
    if (item instanceof HTMLElement) option.appendChild(item);
    else option.innerHTML = item as string;
    option.addEventListener("click", () => {
      this.input.value = this.itemValue(item);
      this.options.classList.remove("active");
    });
    this.elements.set(option, item);
    this.options.append(option);
  }

  private filterList(searchTerm: string) {
    this.elements.forEach((value, option) => {
      if (this.filter(searchTerm, value)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  }

  public filter: (searchTerm: string, value: T) => boolean = (
    searchTerm: string,
    value: T,
  ) => {
    return this.itemValue(value)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  };

  public get options(): DivElement {
    return this._options;
  }
}

customElements.define("select-box", SelectBox);
