export class RefString extends String {
  constructor(
    valor: string,
    public refPropertyKey: string | symbol,
    public refTarget: any,
  ) {
    super(valor);
  }

  setValue(value: string, propertyKey: string | symbol) {
    if (this.refTarget) this.refTarget[propertyKey] = value;
  }

  subscribe(target: {}, propertyKey: string | symbol, refPropertyKey: string | symbol = undefined) {
    if (this.refTarget) {
      this.refTarget.__ref__subscribe__(target, propertyKey, refPropertyKey);
    }
  }

  onChange(fun: (value: any) => void, target?: {}) {
    if (this.refTarget) {
      this.refTarget.subscribe(target, fun);
    }
  }

  get value(): any {
    return this.refTarget.value;
  }

  toString(): string {
    console.log("RefString.toString: ", this.refTarget, this.refPropertyKey);
    if (this.refTarget && this.refPropertyKey) return this.refTarget[this.refPropertyKey] || "";
    else return this.toString();
  }
}
