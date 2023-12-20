export type theme = "light" | "dark";

export class App {
  private static data: { theme: theme; language: string };

  constructor(
    protected data: { theme: theme; language: string } = {
      theme: "light",
      language: "en",
    },
  ) {
    // add theme stylesheet
    // App.appendStyleSheet("src/assets/styles/style.scss");
    // App.appendStyleSheet("src/assets/styles/layers/flow-pane.scss");
    // App.appendStyleSheet(`src/assets/styles/theme/themes-${data.theme}.scss`, "theme-stylesheet");
    App.data = data;
  }

  public static appendStyleSheet(href: string, id?: string): void {
    const link = document.createElement("link");
    link.id = "theme-stylesheet";
    link.rel = "stylesheet";
    if (id != undefined) link.id = id;
    link.href = href;
    document.head.appendChild(link);
  }

  public static removeStyleSheet(id?: string, href?: string): void {
    if (id) {
      const link = document.getElementById(id);
      if (link != null) document.head.removeChild(link);
    } else if (href) {
      const links = document.head.getElementsByTagName("link");
      for (let i = 0; i < links.length; i++) {
        const link = links.item(i);
        if (link != null && link.href == href) {
          document.head.removeChild(link);
          break;
        }
      }
    }
  }

  public static getTheme(): theme {
    return App.data.theme;
  }

  public static getLanguage(): string {
    return App.data.language;
  }

  public static setTheme(theme: theme): void {
    App.data.theme = theme;
    document
      .getElementById("theme-stylesheet")
      ?.setAttribute("href", `src/assets/styles/theme/themes-${theme}.scss`);
  }

  public static setLanguage(language: string): void {
    App.data.language = language;
  }
}
