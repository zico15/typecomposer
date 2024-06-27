import { Component, DivElement, StyleOptional, TextFieldElement, isRef, ref, refType } from "../..";

export type SelectionType = "closeAndClean" | "closeAndKeep" | "openAndClean" | "openAndKeep";

export class DropDownItem extends Component {
  constructor(props?: StyleOptional) {
    super({ display: "block", unicodeBidi: "isolate", ...props });
  }
}

customElements.define("drop-down-item", DropDownItem);

export class DropDown<T = any> extends TextFieldElement {
  private onSelectionAction: () => void = this.closeAndClean.bind(this);
  private _selectionType: SelectionType;
  private previousSelected: T[] = [];
  private _options: ref<T[]> = ref([]);
  private _value: T | ref<T>;
  private _dropdownContent: DivElement;
  private _idClass: number;
  private _arrow: DivElement;
  public onChange: (item: T, index: number) => void = () => {};
  private _selected: number = -1;
  textValue: (value: T | undefined) => string | undefined = undefined;
  textSelected: (value: T | undefined) => string | undefined = undefined;
  private _filter: (value: T, input: string) => boolean = () => true;

  constructor(
    private props?: StyleOptional & {
      noContent?: string;
      options?: T[] | ref<T[]>;
      value?: T | ref<T>;
      defaultOption?: string;
      selectionType?: SelectionType;
      placeholder?: string;
      variant?: "outline" | "underlined";
      placeholderAnimation?: boolean;
      textValue?: (value: T) => string;
      textSelected?: (value: T) => string;
      filter?: (item: T, input: string) => boolean;
    },
  ) {
    super({ placeholder: props?.placeholder, placeholderAnimation: props?.placeholder == undefined ? false : props?.placeholderAnimation });
    const v = props?.value;
    delete props?.value;
    Component.applyData(props, this);
    props.value = v;
    this.dropdownContent = new DivElement({ className: "dropdown-content" });
    this.dropdownContent.variant = props?.variant;
    this.append(this.dropdownContent);
    this.selectionType = props.selectionType || "closeAndClean";
    this.onInit();
    if (props.textValue) this.textValue = props.textValue;
    if (props.textSelected) this.textSelected = props.textSelected;
    if (props.textSelected == undefined && props.textValue != undefined) this.textSelected = props.textValue;
    this.options = props.options;
    this.input.addEventListener("input", () => {
      if (this.input.readOnly == false) {
        this.updateContent();
      }
    });
    this.filter = props.filter;
    if (props.value) this.selected = props.value;
  }

  get filter() {
    return this._filter;
  }

  set filter(filter: ((value: T, input: string) => boolean) | undefined) {
    this.input.readOnly = filter == undefined;
    if (filter == undefined) filter = () => true;
    else this._filter = filter;
  }

  onInit() {
    this._arrow = new DivElement({ className: "arrow-down" });
    this.append(this._arrow);
    this.onclick = (event) => {
      if (this.options.length === 0) return;
      if (this.dropdownContent.contains(event.target as Node)) {
        return;
      }
      this.dropdownContent.classList.toggle("pressed");
      this._arrow.classList.toggle("up");
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  private handleClickOutside(event) {
    if (!this.contains(event.target) && !this.dropdownContent.contains(event.target) && this.dropdownContent.classList.contains("pressed")) {
      this._arrow.classList.toggle("pressed");
      this.dropdownContent.classList.toggle("pressed");
      this._arrow.classList.toggle("up");
    }
  }

  get arrow() {
    return this._arrow;
  }

  get selected(): T | undefined {
    return this._options.value[this._selected];
  }

  set selected(value: T | ref<T>) {
    this._value = value;
    const baseValue = isRef(value) ? (value as any).value : value;
    const index = this.options.findIndex((option) => option == baseValue);
    if (index == -1) return;
    const items = this.dropdownContent.querySelectorAll(".option");
    if (items) this.selectOption(this.options[index], index, items[index] as HTMLElement);
    this.dropdownContent.classList.remove("pressed");
  }

  private closeAndClean() {
    Array.from(this.dropdownContent.children).forEach((child: HTMLElement) => {
      child.classList.remove("selected");
    });
    this.arrow.classList.toggle("pressed");
    this.dropdownContent.classList.toggle("pressed");
    this.arrow.classList.toggle("up");
  }

  private closeAndKeep() {
    this.arrow.classList.toggle("pressed");
    this.dropdownContent.classList.toggle("pressed");
    this.arrow.classList.toggle("up");
  }

  private openAndClean() {
    Array.from(this.dropdownContent.children).forEach((child: HTMLElement) => {
      child.classList.remove("selected");
    });
  }

  get selectionType() {
    return this._selectionType;
  }

  set selectionType(selectionType: SelectionType) {
    if (selectionType == "closeAndKeep") {
      this.onSelectionAction = this.closeAndKeep.bind(this);
    } else if (selectionType == "openAndClean") {
      this.onSelectionAction = this.openAndClean.bind(this);
    } else if (selectionType == "openAndKeep") {
      this.onSelectionAction = () => {};
    } else {
      this.onSelectionAction = this.closeAndClean.bind(this);
    }
    this._selectionType = selectionType;
  }

  get options(): T[] {
    return this._options.value;
  }

  set options(_options: T[] | ref<T[]>) {
    const baseRef: ref<T[]> = (refType<T[]>(_options) as any) || (ref(_options || []) as any);
    this._options = baseRef;
    this._options.onChange(() => {
      this.updateContent();
    }, this);
    this.updateContent();
  }

  private updateContent() {
    if (!this.dropdownContent) return;
    this.dropdownContent.innerHTML = "";
    this.options.forEach((option, index) => {
      if (!this.filter(option, this.input.value.toString())) return;
      let node: Node;
      if (option instanceof Node) node = this.dropdownContent.appendChild(option);
      else {
        const div = new DropDownItem({
          text: this.textValue ? this.textValue(option) : option?.toString() || "",
        });
        node = div;
        if (this.previousSelected.includes(option)) {
          div.classList.toggle("selected");
        }
        this.dropdownContent.append(div);
      }
      (node as HTMLElement).classList.add("option");
      (node as HTMLElement).onclick = this.selectOption.bind(this, option, index, node as HTMLElement);
    });
    if (this.input.readOnly)
      this.input.value =
        this.selected == undefined ? this.props?.defaultOption || "" : this.textSelected ? this.textSelected(this.selected) : this.selected?.toString() || "";
  }

  private selectOption(option: T, index: number, element: HTMLElement) {
    this.onSelectionAction();
    element.classList.toggle("selected");
    if (element.classList.contains("selected")) {
      this.previousSelected.push(option);
    } else {
      this.previousSelected = this.previousSelected.filter((selectedOption) => selectedOption !== option);
    }
    this.input.value = this.textSelected ? this.textSelected(option) : option?.toString() || "";
    this._selected = index;
    this.input.style.color = "black";
    this.onChange(option, index);
    const baseRef: ref<T> | undefined = refType<T>(this._value);
    if (baseRef) baseRef.value = option;
    this.dispatchEvent(new CustomEvent("change", { detail: { item: option, index } }));
  }

  get dropdownContent() {
    return this._dropdownContent;
  }

  set dropdownContent(dropdownContent: DivElement) {
    this._dropdownContent = dropdownContent;
  }

  get idClass() {
    return this._idClass;
  }

  set idClass(idClass: number) {
    this._idClass = idClass;
  }
}

customElements.define("drop-down", DropDown);
