import {
  BorderPaneElement,
  DivElement,
  IconElement,
  TabElement,
  type StyleOptional,
} from "..";
import { Register } from "../../decorators";

export interface DataTabPane extends StyleOptional {
  type?: "min" | "max";
  closeable?: boolean;
  alignTab?: "left" | "right" | "center";
}

export class TabPane extends BorderPaneElement {
  private tabs: DivElement = new DivElement();
  private slectTabItem: TabElement | null = null;
  private type: string = "min";
  private _closeable: boolean = false;

  constructor(optional?: DataTabPane) {
    super(optional);
    this.addClasName("tab-pane");
    this.style.width = "100%";
    this.style.marginTop = "10px";
    this.style.minHeight = "280px";
    this.style.maxHeight = "280px";
    this.tabs.classList.add("tab-pane-tabs");
    this.top = this.tabs;
    this.center = new DivElement();
    this.center.classList.add("tab-pane-content");
    if (optional != undefined && optional?.type != undefined)
      this.type = optional.type;
    if (optional != undefined && optional?.closeable != undefined)
      this._closeable = optional.closeable;
    if (optional != undefined && optional?.alignTab != undefined)
      this.tabs.style.justifyContent = optional.alignTab;
  }

  public addTap(
    title: string,
    content: HTMLElement,
    icon: IconElement | null = null,
  ) {
    this.addTaps(new TabElement(title, content, icon, this.closeable));
  }

  public addTaps(...tabs: TabElement[]) {
    tabs.forEach((tab) => {
      this.center.appendChild(tab.content);
      this.tabs.appendChild(tab);
      tab.addEventListener("click", () => this.setTabSelected(tab));
      // if (this.type == "max")
      //     this.tabs.style.gridTemplateColumns = "repeat(" + this.tabs.children.length + ", 1fr)";
      // else {
      //     this.tabs.style.gridTemplateColumns = "repeat(" + this.tabs.children.length + ", auto)";
      //     tab.style.width = "fit-content";
      //     this.tabs.style.width = "fit-content";
      // }
      if (this.tabs.children.length == 1) this.setTabSelected(tab);
    });
  }

  public removeTap(title: string) {
    for (let i = 0; i < this.tabs.children.length; i++) {
      const child = this.tabs.children.item(i);
      if (child instanceof HTMLElement && child.innerHTML == title) {
        this.tabs.removeChild(child);
        break;
      }
    }
  }

  get closeable(): boolean {
    return this._closeable;
  }

  set closeable(value: boolean) {
    this._closeable = value;
    for (let i = 0; i < this.tabs?.children.length; i++) {
      const child = this.tabs.children.item(i);
      if (child instanceof TabElement) child.closeable = value;
    }
  }

  private setTabSelected(item: TabElement) {
    if (this.slectTabItem) this.slectTabItem.unselect();
    if (item) {
      item.select();
      this.onSelectTab(item.title, item.content);
      this.slectTabItem = item;
    }
  }

  getTabs(): TabElement[] {
    return Array.from(this.tabs.children) as TabElement[];
  }

  getTab(index: number): TabElement | null {
    return this.tabs.children.item(index) as TabElement;
  }

  public onSelectTab: (title: string, content: HTMLElement) => void = () => {};
}
// @ts-ignore
customElements.define("tab-pane", TabPane);
