export type theme = "light" | "dark" | string;
import { IComponent } from "../..";
import { CSSStyleDeclarationRef } from "../../../styles";

export class App {
  private static data: { theme: theme; language: string } = {
    theme: "light",
    language: "en",
  };

  private constructor() {}

  public static getTheme(): theme {
    return this.data.theme;
  }

  public static getLanguage(): string {
    return App.data.language;
  }

  public static setTheme(theme: theme): void {
    App.data.theme = theme;
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", theme);
  }

  public static setLanguage(language: string): void {
    App.data.language = language;
  }

  public static setPage(page: IComponent): void {
    document.body.innerHTML = "";
    document.body.appendChild(page);
  }

  /**
   * Gets a reference to the root node of the document.
   * @returns {HTMLElement} The root node of the document.
   */
  public static get root(): HTMLElement {
    return document.documentElement;
  }

  public static get body(): HTMLElement {
    return document.body;
  }

  public static get head(): HTMLElement {
    return document.head;
  }

  public static get location(): Location {
    return window.location;
  }

  public static get title(): string {
    return document.title;
  }

  public static set title(value: string) {
    document.title = value;
  }

  public static get style(): CSSStyleDeclarationRef {
    return document.documentElement.style;
  }
}
