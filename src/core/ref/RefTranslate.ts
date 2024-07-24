import { App } from "..";
import { WeakRefMap } from "./RefMap";

export class RefTranslate extends String {
  static list: WeakRefMap<object, Map<string, string[]>> = new WeakRefMap();

  constructor(
    private _value: string[],
    private args: any[],
  ) {
    super(_value?.toString() || "");
  }

  public subscribe(target: object, property: string): void {
    const data = RefTranslate.list.get(target);
    if (data) {
      data.set(property, this.value);
    } else {
      const map = new Map<string, string[]>();
      map.set(property, this.value);
      RefTranslate.list.set(target, map);
    }
    RefTranslate.translate(target, property, this.value);
  }

  private static translate(target: object, property: string, keys: string[]): void {
    // @ts-ignore
    const language = App.translate[App.language];
    if (!language || !target) return;
    let result = language[keys[0]] || keys[0];
    let data = language[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      if (!data) break;
      data = data[keys[i]];
      result = data || keys[i];
    }
    target[property] = result;
  }

  protected static translateAll(): void {
    RefTranslate.list.forEach((data, target) => {
      data.forEach((value, property) => {
        RefTranslate.translate(target, property, value);
      });
    });
  }

  get value(): string[] {
    return this._value;
  }

  equals(value: string): boolean {
    return this.valueOf() === value.valueOf();
  }

  valueOf(): string {
    return this._value.toString() || "";
  }

  toString(): string {
    return this._value?.toString() || "";
  }

  public static typeofString(value: any): boolean {
    return typeof value == "string" || value instanceof String;
  }
}
