import { Component, type StyleOptional } from "..";

export class DropdownElement extends Component {
  // @RefComponent({ id: "dropdown-button" })
  // private button!: ButtonElement;
  // @RefComponent({ id: "dropdown-pane" })
  // private pane!: HTMLDivElement;
  // @RefComponent({ id: "dropdown-title" })
  // private dropdownTitle!: H3Element;

  // private titleRef: Ref<string> = new Ref("");

  constructor(
    optional?: StyleOptional & { text: string; onclick?: () => void },
  ) {
    super(optional);
    this.addClasName("relative", "inline-block", "text-left");
  }

  public onInit(): void {
    // this.titleRef.value = this.dropdownTitle.innerHTML;
    // this.dropdownTitle.innerHTML = this.titleRef;
    // //"Dropdown";
    // // this.pane.classList.toggle("hidden");
    // // console.log("button: ", this.pane);
    // this.button.onclick = () => {
    //     console.log("click");
    //     this.titleRef.value = "Dropdown_" + Math.random();
    //     // this.pane.classList.toggle("hidden");
    //     // this.button.classList.toggle("display");
    // }
  }
}
// @ts-ignore
customElements.define("dropdown-element", DropdownElement);
