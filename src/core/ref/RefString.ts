export class RefString extends String {
  constructor(
    valor: string,
    public refPropertyKey: string | symbol,
    public proxy: {
      __subscribe__(target: any, propertyKey: string | symbol, refPropertyKey: string | symbol): void;
    } & any,
  ) {
    super(valor);
  }

  __setValue__(value: string, propertyKey: string | symbol) {
    if (this.proxy) this.proxy[propertyKey] = value;
  }

  __subscribe__(target: {}, propertyKey: string | symbol, refPropertyKey?: string | symbol) {
    if (this.proxy) {
      console.log("subscribe", target, propertyKey, refPropertyKey, " proxy: ", this.proxy);

      this.proxy.__subscribe__(target, propertyKey, refPropertyKey);
    }
  }

  onChange(fun: (value: any) => void, target?: {}) {
    if (this.proxy) {
      this.proxy.__onChange_(target, fun);
    }
  }

  get value(): any {
    return this.proxy[this.refPropertyKey];
  }

  toString(): string {
    if (this.proxy && this.refPropertyKey) return this.proxy[this.refPropertyKey] || "";
    else return this.toString();
  }
}
