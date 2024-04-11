import { Component, DivElement, InputElement, StyleOptional } from "../..";

export type SelectionType = "closeAndClean" | "closeAndKeep" | "openAndClean" | "openAndKeep";

export class DropDownItem extends DivElement {}

// @ts-ignore
customElements.define("drop-down-item", DropDownItem, { extends: "div" });

export class DropDown<T = any> extends Component {
  private onSelectionAction: () => void = this.closeAndClean.bind(this);
  private _selectionType: SelectionType;
  private previousSelected: T[] = [];
  private _input: InputElement;
  private _inputAndButtonDiv: DivElement;
  private _options: T[] = [];
  private _dropdownContent: DivElement;
  private _idClass: number;
  public onChange: (item: T, index: number) => void = () => {};

  constructor(
    props?: StyleOptional & {
      noContent?: string;
      options?: T[];
      defaultOption?: string;
      selectionType?: SelectionType;
      placeholder?: string;
    },
  ) {
    super(props);
    this.inputAndButtonDiv = new DivElement({
      className: "input-and-button-div",
    });

    this.dropdownContent = new DivElement({ className: "dropdown-content" });
    this.append(this.inputAndButtonDiv, this.dropdownContent);
    this._input = new InputElement({ className: "input" });
    this.input.readOnly = true;
    this.input.value = props.placeholder ? props.placeholder : props.defaultOption || "";
    this.selectionType = props.selectionType || "closeAndClean";
    this.onInit();
    this.options = props.options == undefined || props.options.length === 0 ? [props.noContent as any] : props.options;
  }

  onInit() {
    this.className = "dropdown";
    const arrow = new DivElement({ className: "arrow-down" });
    this.inputAndButtonDiv.append(this.input, arrow);
    this.inputAndButtonDiv.onclick = () => {
      if (this.options.length === 0) return;
      this.inputAndButtonDiv.classList.toggle("pressed");
      arrow.classList.toggle("up");
      console.log(this.inputAndButtonDiv.children[1].classList);
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  private handleClickOutside(event) {
    if (!this.inputAndButtonDiv.contains(event.target) && !this.dropdownContent.contains(event.target) && this.inputAndButtonDiv.classList.contains("pressed")) {
      this.inputAndButtonDiv.children[1].classList.toggle("pressed");
      this.inputAndButtonDiv.classList.toggle("pressed");
      this.inputAndButtonDiv.children[1].classList.toggle("up");
    }
  }

  private closeAndClean() {
    Array.from(this.dropdownContent.children).forEach((child: HTMLElement) => {
      child.classList.remove("selected");
    });
    this.inputAndButtonDiv.children[1].classList.toggle("pressed");
    this.inputAndButtonDiv.classList.toggle("pressed");
    this.inputAndButtonDiv.children[1].classList.toggle("up");
  }

  private closeAndKeep() {
    this.inputAndButtonDiv.children[1].classList.toggle("pressed");
    this.inputAndButtonDiv.classList.toggle("pressed");
    this.inputAndButtonDiv.children[1].classList.toggle("up");
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
    if (selectionType == "closeAndKeep") this.onSelectionAction = this.closeAndKeep.bind(this);
    else if (selectionType == "openAndClean") this.onSelectionAction = this.openAndClean.bind(this);
    else if (selectionType == "openAndKeep") this.onSelectionAction = () => {};
    else this.onSelectionAction = this.closeAndClean.bind(this);
    this._selectionType = selectionType;
  }

  get input(): InputElement {
    return this._input;
  }

  get options() {
    return this._options;
  }

  set options(options: T[]) {
    this._options = options;
    if (!this.dropdownContent) return;
    this.dropdownContent.innerHTML = "";
    this.options.forEach((option, index) => {
      let node: Node;
      if (option instanceof Node) node = this.dropdownContent.appendChild(option);
      else {
        const div = new DropDownItem({
          text: option?.toString() || "",
        });
        node = div;
        if (this.previousSelected.includes(option)) {
          div.classList.toggle("selected");
        }
        this.dropdownContent.append(div);
      }
      (node as HTMLElement).classList.add("option");
      (node as HTMLElement).onclick = () => {
        this.onSelectionAction();
        (node as HTMLElement).classList.toggle("selected");
        if ((node as HTMLElement).classList.contains("selected")) {
          this.previousSelected.push(option);
        } else {
          this.previousSelected = this.previousSelected.filter((selectedOption) => selectedOption !== option);
        }
        this.input.value = option?.toString() || "";
        this.input.style.color = "black";
        this.onChange(option, index);
      };
    });
  }

  get inputAndButtonDiv() {
    return this._inputAndButtonDiv;
  }

  set inputAndButtonDiv(inputAndButtonDiv: DivElement) {
    this._inputAndButtonDiv = inputAndButtonDiv;
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

// @ts-ignore
customElements.define("drop-down", DropDown);
