declare global {
  interface Array<T> {
    clear(): void;
  }
  interface Window {
    getTheme(): string;
    setTheme(theme: string): void;
  }

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
}

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
