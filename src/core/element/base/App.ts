export type theme = "light" | "dark" | string;
import { Router } from "../..";

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

  static setRouter<T = any>(routerImport: () => Promise<T>): Promise<void> {
    return Router.use(routerImport);
  }
}
