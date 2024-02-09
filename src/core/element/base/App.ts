export type theme = "light" | "dark" | string;
import { IComponent, Router } from "../..";

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
}
