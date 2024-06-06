import { RefString, ref, Component, StyleOptional, CSSStyleDeclarationRef as CSSStyleDeclarationRefType, isRef } from "../";

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
  // interface String {
  //   refPropertyKey: string | symbol;
  //   refTarget: any | undefined;
  // }
  // interface Number {
  //   setRefTarget: any;
  //   getRefTarget: any;
  // }
  interface WeakRef<T> {
    equals<K extends WeakKey>(value: WeakRef<K>): boolean;
  }
}

//// Array
//const original = Array.prototype.includes;

//Object.defineProperty(Array.prototype, "includes", {
//  value: function <T>(value: T) {
//    console.log("includes", this);
//    if (value instanceof RefString) return original.call(this, value.toString());
//    return original.call(this, value);
//  },
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

Object.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
  value: function (property: string, value: string | ref<string>, priority?: string) {
    if (value instanceof RefString) {
      value.__subscribe__(this, property, value.refPropertyKey);
    } else if (isRef(value)) (value as any).__subscribe__(this, property);
    else this.setProperty(property, value, priority);
  },
});

const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML").set;

Object.defineProperty(Element.prototype, "innerHTML", {
  set: function (value: string | ref<string>) {
    if (value instanceof RefString) {
      value.__subscribe__(this, "innerHTML", value.refPropertyKey);
    } else if (isRef(value)) (value as any).__subscribe__(this, "innerHTML");
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
