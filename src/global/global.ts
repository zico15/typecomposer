declare global {
  interface Array<T> {
    clear(): void;
  }
  interface Window {
    getTheme(): string;
    setTheme(theme: string): void;
  }
}

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
