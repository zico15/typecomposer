import { BorderPaneElement, DivElement, IconElement, TabItem, type StyleOptional, IComponent } from "../..";

export class TabPane extends BorderPaneElement {
  private tabs: DivElement = new DivElement();
  private slectTabItem: TabItem | null = null;
  private type: string = "min";
  private _closeable: boolean = false;

  constructor(
    optional?: StyleOptional & {
      type?: "min" | "max";
      closeable?: boolean;
      alignTab?: "left" | "right" | "center";
    },
  ) {
    super(optional);
    this.addClasName("tab-pane");
    this.style.width = "100%";
    this.style.marginTop = "10px";
    // this.style.minHeight = "280px";
    // this.style.maxHeight = "280px"; ??why
    this.tabs.classList.add("tab-pane-tabs");
    this.top = this.tabs;
    this.center = new DivElement();
    this.center.classList.add("tab-pane-content");
    if (optional != undefined && optional?.type != undefined) this.type = optional.type;
    if (optional != undefined && optional?.closeable != undefined) this._closeable = optional.closeable;
    if (optional != undefined && optional?.alignTab != undefined) this.tabs.style.justifyContent = optional.alignTab;
  }

  public addTap(title: string, content: HTMLElement, icon: IconElement | null = null) {
    this.addTaps(new TabItem(title, content, icon, this.closeable));
  }

  public addTaps(...tabs: TabItem[]) {
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
      if (child instanceof TabItem) child.closeable = value;
    }
  }

  private setTabSelected(item: TabItem) {
    if (this.slectTabItem) this.slectTabItem.unselect();
    if (item) {
      item.select();
      this.slectTabItem = item;
      this.onSelectTab(item.title, item.content, Array.from(this.tabs.children).indexOf(item));
    }
  }

  getTabs(): TabItem[] {
    return Array.from(this.tabs.children) as TabItem[];
  }

  getTab(index: number): TabItem | null {
    return this.tabs.children.item(index) as TabItem;
  }

  get select(): TabItem | null {
    return this.slectTabItem;
  }

  public onSelectTab: (title: string, content: IComponent, index?: number) => void = () => {};
}
customElements.define("tab-pane", TabPane);
