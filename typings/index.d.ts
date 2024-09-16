declare module '*.html' {
  const content: string;
  export default content;
}

declare global {
  var CSSStyleDeclarationRef: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclarationRefType;
  };
  // function test_global();
  interface Array<T> {
    clear(): void;
  }

  interface Event {
    detail: any;
  }

  function scoped(target: any): any;

  interface Window {
    getTheme(): string;
    setTheme(theme: string): void;
  }

  interface Element {
    innerHTML: string | ref<string>;
    style: CSSStyleDeclarationRefType;
    variant: string | ref<string> | undefined;
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
    disabled: boolean;
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

export { };
