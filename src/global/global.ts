import { ref, Component, StyleOptional, CSSStyleDeclarationRef as CSSStyleDeclarationRefType, refType } from "../";

declare global {
  var CSSStyleDeclarationRef: {
    prototype: CSSStyleDeclaration;
    new (): CSSStyleDeclarationRefType;
  };
  // function test_global();
  interface Array<T> {
    clear(): void;
  }

  interface Event {
    detail: any;
  }

  //interface HTMLFormElement {
  //  onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => Promise<any> | any) | null;
  //}

  // Definie node

  function scoped(target: any): any;

  interface Window {
    getTheme(): string;
    setTheme(theme: string): void;
  }

  interface Element {
    innerHTML: string | ref<string>;
    style: CSSStyleDeclarationRefType;
    set variant(v: "default" | string);
    get variant(): "default" | string;
    onInit(): void;
    unmount(): void;
    addClassName(...names: string[]): void;
    setStyle(styles: StyleOptional): void;
    onConnected(): void;
    onDisconnected(): void;
  }

  interface HTMLElement {
    innerHTML: string | ref<string>;
    style: CSSStyleDeclarationRefType;
    onInit(): void;
    unmount(): void;
    addClassName(...names: string[]): void;
    setStyle(styles: StyleOptional): void;
    onConnected(): void;
    onDisconnected(): void;
  }

  interface HTMLButtonElement {
    // @ts-ignore
    type: "submit" | "reset" | "button" | "file";
    accept: string;
    multiple: boolean;
    onfile: (file: FileList) => void;
  }
  interface WeakRef<T> {
    equals<K extends WeakKey>(value: WeakRef<K>): boolean;
  }
}

//const originalAppend = HTMLElement.prototype.append;

//Object.defineProperty(HTMLElement.prototype, "append", {
//  value: function (this: HTMLElement, ...nodes: Array<Node | string>) {
//    for (const node of nodes) {
//      const baseRef = refType(node);
//      if (baseRef && baseRef["__target__"]) originalAppend.call(this, baseRef["__target__"]);
//      else originalAppend.call(this, node);
//    }
//  },
//  writable: true,
//  configurable: true,
//  enumerable: true,
//});

//const originalAppendChild = Node.prototype.appendChild;

//Object.defineProperty(Node.prototype, "appendChild", {
//  value: function (this: Node, child: Node) {
//    const baseRef = refType(child);
//    if (baseRef && baseRef["__target__"]) originalAppendChild.call(this, baseRef["__target__"]);
//    else originalAppendChild.call(this, child);
//  },
//  writable: true,
//  configurable: true,
//  enumerable: true,
//});

//const originalRemoveChild = Node.prototype.removeChild;

//Object.defineProperty(Node.prototype, "removeChild", {
//  value: function (this: Node, child: Node) {
//    const baseRef = refType(child);
//    if (baseRef && baseRef["__target__"]) originalRemoveChild.call(this, baseRef["__target__"]);
//    else originalRemoveChild.call(this, child);
//  },
//  writable: true,
//  configurable: true,
//  enumerable: true,
//});

//const originalInsertBefore = Node.prototype.insertBefore;

//Object.defineProperty(Node.prototype, "insertBefore", {
//  value: function (this: Node, newChild: Node, refChild: Node) {
//    const baseRef = refType(newChild);
//    if (baseRef && baseRef["__target__"]) originalInsertBefore.call(this, baseRef["__target__"], refChild);
//    else originalInsertBefore.call(this, newChild, refChild);
//  },
//  writable: true,
//  configurable: true,
//  enumerable: true,
//});

//const originalReplaceChild = Node.prototype.replaceChild;

//Object.defineProperty(Node.prototype, "replaceChild", {
//  value: function (this: Node, newChild: Node, oldChild: Node) {
//    const baseRef = refType(newChild);
//    if (baseRef && baseRef["__target__"]) originalReplaceChild.call(this, baseRef["__target__"], oldChild);
//    else originalReplaceChild.call(this, newChild, oldChild);
//  },
//  writable: true,
//  configurable: true,
//  enumerable: true,
//});

WeakRef.prototype.equals = function (value: WeakRef<any>) {
  return this.deref() === value.deref();
};

Object.defineProperty(Element.prototype, "variant", {
  get: function () {
    return this.getAttribute("variant") || "default";
  },
  set: function (v: "default" | string) {
    if (v == "default") this.removeAttribute("variant");
    else this.setAttribute("variant", v);
  },
});

Object.defineProperty(window, "scoped", {
  value: function (target: any): any {},
  writable: true,
  configurable: true,
  enumerable: true,
});

try {
  Object.defineProperty(HTMLButtonElement.prototype, "multiple", {
    get: function () {
      return this._multiple;
    },
    set: function (_value: boolean) {
      const inputFile = this.querySelector("input[button-file=file]");
      if (inputFile) inputFile.multiple = _value;
      this._multiple = _value;
    },
  });
} catch (__) {}

try {
  Object.defineProperty(HTMLButtonElement.prototype, "accept", {
    get: function () {
      return this._accept;
    },
    set: function (value: string) {
      const inputFile = this.querySelector("input[button-file=file]");
      if (inputFile) inputFile.accept = value;
      this._accept = value;
    },
  });
} catch (__) {}

try {
  const originalButton = Object.getOwnPropertyDescriptor(HTMLButtonElement.prototype, "type").set;

  Object.defineProperty(HTMLButtonElement.prototype, "onfile", {
    value: function (this: HTMLButtonElement, fileList: FileList) {},
    writable: true,
    configurable: true,
    enumerable: true,
  });

  Object.defineProperty(HTMLButtonElement.prototype, "type", {
    set: function (value: "submit" | "reset" | "button" | "file") {
      let inputFile: HTMLInputElement | undefined = this.querySelector("input[button-file=file]");
      if (value == "file") {
        if (!inputFile) {
          inputFile = document.createElement("input");
          inputFile.type = "file";
          inputFile.setAttribute("button-file", "file");
          if (this.multiple) inputFile.multiple = this.multiple;
          if (this.accept) inputFile.accept = this.accept;
          inputFile.style.display = "none";
          inputFile.onchange = (event: any) => {
            this.onfile(event.target.files);
            event.stopPropagation();
          };
          this.addEventListener("click", inputFile.click.bind(inputFile));
          this.appendChild(inputFile);
        }
        value = "button";
      } else if (inputFile) {
        this.removeEventListener("click", inputFile.click.bind(inputFile));
        this.removeChild(inputFile);
      }
      originalButton.call(this, value);
    },
  });
} catch (__) {}

const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML").set;

Object.defineProperty(Element.prototype, "innerHTML", {
  set: function (value: string | ref<string>) {
    const baseref = refType(value);
    if (baseref) baseref.subscribe(this, "innerHTML");
    else originalInnerHTML.call(this, value?.toString());
  },
});

Object.defineProperty(Element.prototype, "onInit", {
  value: function () {},
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(Element.prototype, "onConnected", {
  value: function () {},
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(Element.prototype, "onDisconnected", {
  value: function () {},
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(Element.prototype, "unmount", {
  value: function () {},
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(Element.prototype, "addClassName", {
  value: function (...names: string[]) {
    for (const name of names) {
      const strs = name.split(" ");
      if (strs.length > 0) this.classList.add(...strs);
    }
  },
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(Element.prototype, "setStyle", {
  value: function (styles: CSSStyleDeclarationRefType) {
    Component.applyData(styles, this);
  },
  writable: true,
  configurable: true,
  enumerable: true,
});

const construcorOriginal = Element.prototype.constructor;

Element.prototype.constructor = function () {
  construcorOriginal.call(this);
  this.onInit();
};

Array.prototype.clear = function () {
  this.length = 0;
};

Window.prototype.getTheme = function (): string {
  return localStorage.getItem("theme") || "light";
};

Window.prototype.setTheme = function (theme: string): void {
  const html = document.querySelector("html");
  html?.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export {};
