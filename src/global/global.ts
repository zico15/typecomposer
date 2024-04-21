import { RefString, ref, Component, StyleOptional, CSSStyleDeclarationRef as CSSStyleDeclarationRefType, Router } from "../";

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
  var Router: Router;

  function scoped(target: any): any;

  interface Window {
    getTheme(): string;
    setTheme(theme: string): void;
  }

  interface Element {
    innerHTML: string | ref<string>;
    style: CSSStyleDeclarationRefType;
    onInit(): void;
    unmount(): void;
    addClasName(...names: string[]): void;
    setStyle(styles: StyleOptional): void;
  }

  interface HTMLElement {
    innerHTML: string | ref<string>;
    style: CSSStyleDeclarationRefType;
    onInit(): void;
    unmount(): void;
    addClasName(...names: string[]): void;
    setStyle(styles: StyleOptional): void;
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

WeakRef.prototype.equals = function (value: WeakRef<any>) {
  return this.deref() === value.deref();
};

Object.defineProperty(window, "Router", {
  value: Router,
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(window, "scoped", {
  value: function (target: any): any {},
  writable: true,
  configurable: true,
  enumerable: true,
});

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

// // Object.defineProperty(Number.prototype, "refTarget", {
// //   value: undefined,
// //   writable: true,
// //   configurable: true,
// //   enumerable: true,
// // });
// // Define um novo método setRefTarget no protótipo de Number
// Number.prototype.setRefTarget = function (value) {
//   // Cria um objeto temporário do tipo NumberWrapper
//   const wrapper = {
//     value: this,
//     refTarget: value,
//   };
//   // Retorna o objeto temporário
//   return wrapper;
// };

// Number.prototype.getRefTarget = function () {
//   return this.refTarget;
// };

// // Teste
// // const a = (5).setRefTarget("teste");
// // console.log(a.refTarget);

// let a = new Number(5);
// let b: number = a;
// b = ref(3);
// b.setRefTarget("teste");
// a.setRefTarget("teste");
// b.toFixed(2);

// // a++;
// console.log("a: ", a.getRefTarget());

// const originalStyle = Object.getOwnPropertyDescriptor(Element.prototype, "style").set;

// Object.defineProperty(Element.prototype, "style", {
//   set: function () {
//     console.log("A chamada para style foi interceptada");
//     return originalStyle.call(this);
//   },
// });

Object.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
  value: function (property: string, value: string | ref<string>, priority?: string) {
    if (value instanceof RefString) {
      value.refTarget.subscriber(this, property, value.refPropertyKey);
    } else if (typeof value !== "string") value.subscriber(this, property);
    else this.setProperty(property, value, priority);
  },
});

const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML").set;

// Substitui innerHTML por um setter personalizado
Object.defineProperty(Element.prototype, "innerHTML", {
  set: function (value: string | ref<string>) {
    if (value instanceof RefString) {
      value.refTarget.subscriber(this, "innerHTML", value.refPropertyKey);
    } else if (typeof value !== "string") value.subscriber(this, "innerHTML");
    else originalInnerHTML.call(this, value);
  },
});

Object.defineProperty(Element.prototype, "onInit", {
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

Object.defineProperty(Element.prototype, "addClasName", {
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

// Object.defineProperty(Element.prototype, "style", {
//   value: {

//   },

//   get: function () {
//     return
//   },
// });

// interface Element {
//   setAttribute(qualifiedName: string, value: any | ref<any>): void;
// }
// interface CSSStyleDeclaration {
//   // @ts-ignore
//   get color(): string | ref<string>;
//   // @ts-ignore
//   set color(value: string | ref<string>);
// }

// interface ElementCSSInlineStyle {
//   readonly style: CSSStyleDeclaration;
// }
// interface Proxy {
//   onChange(fun: (value: any) => void, target?: {}): void;
// }

// HTMLElement.prototype.innerHTML =  (value: string | ref<string>) => {
//   if (set instanceof ref) {
//     set.onChange((value) => {
//       this.innerHTML = value;
//     }
//     );
//     set.subscriber(this, "innerHTML");
//   }
//   else {
//     this.innerHTML = set;
//   }
// }

// Element.prototype.setAttribute = function (this: any,
//   qualifiedName: string,
//   value: any | ref<any>,
// ): void {
//   // if (value instanceof ref) {
//   //   value.onChange((value) => {
//   //     this.setAttribute(qualifiedName, value);
//   //   });
//   //   value.subscriber(this, qualifiedName);
//   // } else {
//   console.log("setAttribute: ", qualifiedName, value);
//   super.setAttribute(qualifiedName, value);
//   // }
// };

// Proxy.prototype.onChange = function (
//   fun: (value: any) => void,
//   target?: {},
// ): void {
//   console.log("onChange: ", fun, target);
// };

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
