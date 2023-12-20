import { App } from "../../element";

let editor: EditorFactory | null = null;

export class EditorFactory {
  private root: HTMLElement;
  private pane = document.createElement("div");
  private title: string;

  constructor() {
    this.title = document.title;
    this.root = document.body.children.item(0) as HTMLElement;
    // this.pane.className = "fixed inset-0 p-50px";
    // this.pane.style.display = "grid";
    // this.pane.style.overflowY = "auto";
    // this.pane.style.overflowX = "auto";
    // this.pane.style.padding = "50px";
    // document.body.innerHTML = "";
    // document.body.appendChild(this.pane);
    // this.pane.appendChild(this.root);
    // console.log(this.root);
    App.appendStyleSheet(
      "src/assets/styles/style-editor.scss",
      "editor-stylesheet",
    );
    document.title = "Editor";
  }

  destroy() {
    // document.body.innerHTML = "";
    // document.body.appendChild(this.root);
    App.removeStyleSheet("editor-stylesheet");
    document.title = this.title;
  }
}

// (window as any).editor = (v: boolean) => {

//     addBorderClass(window.document.getElementById("app"), v);
// }

document.addEventListener("keydown", function (event) {
  if (event.key === "F1") {
    if (editor) {
      editor.destroy();
      editor = null;
    } else editor = new EditorFactory();
  }
});
