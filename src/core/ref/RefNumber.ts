import { RefStringAndNumber } from "./RefDefineProperty";

export class RefNumber extends Number {
  constructor(
    private _value: number,
    refPropertyKey: string | symbol,
    parent: any,
  ) {
    super(_value?.toString() || "");
    RefStringAndNumber.assignProperties(this, parent, refPropertyKey);
  }

  get value(): number {
    return this._value;
  }

  set value(_value: number) {
    // @ts-ignore
    this.__setValue__(_value, this.refPropertyKey);
  }

  equals(value: number): boolean {
    return this.valueOf() === value;
  }

  valueOf(): number {
    return this._value;
  }

  toString(): string {
    return this._value.toString();
  }

  public static typeofNumber(value: any): boolean {
    return typeof value == "number" || value instanceof Number;
  }
}
