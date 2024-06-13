import { RefStringAndNumber } from "./RefDefineProperty";

export class RefString extends String {
  constructor(
    private _value: string,
    refPropertyKey: string | symbol,
    parent: any,
  ) {
    super(_value?.toString() || "");
    RefStringAndNumber.assignProperties(this, parent, refPropertyKey);
  }

  get value(): string {
    return this._value;
  }

  set value(_value: string) {
    // @ts-ignore
    this.__setValue__(_value, this.refPropertyKey);
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
