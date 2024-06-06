import { App } from "../../element";

let editor: EditorFactory | null = null;

export class EditorFactory {
  private root: HTMLElement;
  private pane = document.createElement("div");
  private title: string;

  constructor() {
    this.title = document.title;
    this.root = document.body.children.item(0) as HTMLElement;
    document.title = "Editor";
  }

  destroy() {
    document.title = this.title;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "F1") {
    if (editor) {
      editor.destroy();
      editor = null;
    } else editor = new EditorFactory();
  }
});
