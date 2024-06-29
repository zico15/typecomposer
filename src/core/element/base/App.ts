export type theme = "light" | "dark" | string;
import { IComponent } from "../..";
import { RefTranslate } from "../../ref/RefTranslate";
import { CSSStyleDeclarationRef } from "../../../styles";

class __App__ {
  private translateData: {};
  private isTranslateInit: boolean = false;

  private data: { theme: theme; language: string } = {
    theme: "light",
    language: "en",
  };

  constructor() {
    const store = localStorage.getItem("__app__");
    if (store) {
      this.data = JSON.parse(store);
    }
    console.log("__App__", this.data);
    document.addEventListener("DOMContentLoaded", () => {
      // @ts-ignore
      RefTranslate.translateAll();
      this.isTranslateInit = true;
    });
  }

  public get theme(): theme {
    return this.data.theme;
  }

  public set theme(value: theme) {
    this.data.theme = value;
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", value);
    localStorage.setItem("__app__", JSON.stringify(this.data));
  }

  public set language(value: string) {
    const isUpdate = this.data.language != value;

    if (isUpdate || !this.isTranslateInit) {
      this.data.language = value;
      localStorage.setItem("__app__", JSON.stringify(this.data));
      // @ts-ignore
      RefTranslate.translateAll();
    }
  }

  public get language(): string {
    return this.data.language;
  }

  public setPage(page: IComponent): void {
    document.body.innerHTML = "";
    document.body.appendChild(page);
  }

  /**
   * Gets a reference to the root node of the document.
   * @returns {HTMLElement} The root node of the document.
   */
  public get root(): HTMLElement {
    return document.documentElement;
  }

  public get body(): HTMLElement {
    return document.body;
  }

  public get head(): HTMLElement {
    return document.head;
  }

  public get location(): Location {
    return window.location;
  }

  public get title(): string {
    return document.title;
  }

  public set title(value: string) {
    document.title = value;
  }

  public get style(): CSSStyleDeclarationRef {
    return document.documentElement.style;
  }

  public set translate(value: object) {
    this.translateData = value;
  }

  public get translate(): object {
    return this.translateData;
  }
}

export type App = __App__;

export const App = new __App__();
