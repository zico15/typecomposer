import { RefTranslate } from "../core/ref/RefTranslate";
import { ref, Component, CSSStyleDeclarationRef as CSSStyleDeclarationRefType, refType, InputElement } from "../";

WeakRef.prototype.equals = function (value: WeakRef<any>) {
  return this.deref() === value.deref();
};

Object.defineProperty(Element.prototype, "variant", {
  get: function () {
    return this.getAttribute("variant") || "default";
  },
  set: function (v: "default" | string) {
    const baseRef = refType(v);
    if (baseRef) baseRef.subscribe(this, "variant");
    else {
      v = v?.toString()?.trim() || "default";
      if (v == "default" || v == undefined || v.trim().length == 0) this.removeAttribute("variant");
      else {
        this.setAttribute("variant", v);
      }
    }
  },
});

// disabled
Object.defineProperty(HTMLElement.prototype, "disabled", {
  get: function () {
    return this.getAttribute("disabled") == "true";
  },
  set: function (v: boolean) {
    if (v) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
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

  function onButtonFile() {
    const file = new InputElement({ type: "file", accept: this.accept, multiple: this.multiple });
    file.onchange = (event: any) => {
      this.onfile(event.target.files);
      event.stopPropagation();
      file.remove();
    };
    file.click();
  }

  Object.defineProperty(HTMLButtonElement.prototype, "type", {
    set: function (value: "submit" | "reset" | "button" | "file") {
      if (this.__onButtonFile__) this.removeEventListener("click", this.__onButtonFile__);
      if (value == "file") {
        this.__onButtonFile__ = onButtonFile.bind(this);
        this.addEventListener("click", this.__onButtonFile__);
      }
      originalButton.call(this, value);
    },
  });
} catch (__) {}

const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML").set;

Object.defineProperty(Element.prototype, "innerHTML", {
  set: function (value: string | ref<string>) {
    if ((value as any) instanceof RefTranslate) {
      (value as any).subscribe(this, "innerHTML");
    } else {
      const baseref = refType(value);
      if (baseref) baseref.subscribe(this, "innerHTML");
      else originalInnerHTML.call(this, value?.toString());
    }
  },
});

const originalInnerText = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerText").set;

Object.defineProperty(HTMLElement.prototype, "innerText", {
  set: function (value: string | ref<string>) {
    if ((value as any) instanceof RefTranslate) {
      (value as any).subscribe(this, "innerText");
    } else {
      const baseref = refType(value);
      if (baseref) baseref.subscribe(this, "innerText");
      else originalInnerText.call(this, value?.toString());
    }
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

const originalPlaceholder = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "placeholder");

Object.defineProperty(HTMLInputElement.prototype, "placeholder", {
  set: function (value: string) {
    if ((value as any) instanceof RefTranslate) {
      (value as any).subscribe(this, "placeholder");
    } else {
      const baseref = refType(value);
      if (baseref) baseref.subscribe(this, "placeholder");
      else originalPlaceholder.set.call(this, value);
    }
  },
});

const originalPlaceholderTextArea = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "placeholder");

Object.defineProperty(HTMLTextAreaElement.prototype, "placeholder", {
  set: function (value: string) {
    if ((value as any) instanceof RefTranslate) {
      (value as any).subscribe(this, "placeholder");
    } else {
      const baseref = refType(value);
      if (baseref) baseref.subscribe(this, "placeholder");
      else originalPlaceholderTextArea.set.call(this, value);
    }
  },
});

export {};
