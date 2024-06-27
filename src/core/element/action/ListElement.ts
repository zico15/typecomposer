import { type StyleOptional, Component, UListElement, ListItemElement } from "../..";

export class ListElement<T = any> extends Component {
  private itemSelected: {
    parent: HTMLElement;
    child: T;
  } | null = null;

  private _container: UListElement = new UListElement();

  constructor(optional?: StyleOptional & { variant?: "primary" | "secondary" | string }) {
    super({ height: "100vh", ...optional });
    super.append(this.container);
  }

  set variant(value: "primary" | "secondary" | string) {
    super.variant = value == "primary" ? "default" : value;
  }

  public get container(): UListElement {
    return this._container;
  }

  public appendChild<T extends Node>(node: T | HTMLCollection): T {
    if (node instanceof HTMLCollection) {
      for (let i = 0; i < node.length; i++) {
        const item = node.item(i);
        if (item != undefined && item instanceof HTMLElement) this.addItem(item as any);
      }
    } else if (node instanceof HTMLElement && node && !node.classList.contains("flow-pane-item")) this.addItem(node as any);
    return node as T;
  }

  public removeChild<T extends Node>(child: T): T {
    if (child instanceof HTMLElement) this.removeItem(child);
    return child;
  }

  public addItem(element: T): ListItemElement {
    const item = element instanceof ListItemElement ? element : new ListItemElement();
    item.classList.add("list-element-item");
    if (!(element instanceof ListItemElement)) {
      if (element instanceof HTMLElement) item.appendChild(element as Node);
      else item.innerHTML = element as string;
    }
    this.addItemEventListener(item as any, element);
    this.container.appendChild(item);
    return item;
  }

  private addItemEventListener(parent: HTMLElement, child: T): void {
    parent.addEventListener("click", () => {
      if (this.itemSelected != null) {
        this.onUnselectItem(this.itemSelected.child);
        this.itemSelected.parent.classList.remove("list-element-item-selected");
      }
      if (this.itemSelected?.parent != parent) {
        parent.classList.add("list-element-item-selected");
        this.onSelectItem(child);
        if (parent instanceof ListItemElement) parent.onSelect();
        this.itemSelected = { parent, child };
      } else this.itemSelected = null;
    });
  }

  public removeItem(element: HTMLElement | string): void {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children.item(i);
      if (child instanceof HTMLElement) {
        if (typeof element == "string" && child.innerHTML == element) this.container.removeChild(child);
        else if (child == element) this.container.removeChild(child);
        break;
      }
    }
  }

  public removeItems() {
    this.container.innerHTML = "";
  }

  append(...nodes: (string | Node)[]): void {
    this.container.append(...nodes);
  }

  public onSelectItem: (item: T) => void = () => {};
  public onUnselectItem: (item: T) => void = () => {};
}
customElements.define("list-element", ListElement);
