export class RefString extends String {
  constructor(
    value: string,
    public refPropertyKey: string | symbol,
    private proxy: {
      __subscribe__(target: any, propertyKey: string | symbol, refPropertyKey: string | symbol): void;
    } & any,
  ) {
    super(value?.toString() || "");
  }

  __setValue__(value: string, propertyKey: string | symbol) {
    if (this.proxy) this.proxy[propertyKey] = value;
  }

  __subscribe__(target: {}, propertyKey: string | symbol, refPropertyKey?: string | symbol) {
    if (this.proxy) {
      this.proxy.__subscribe__(target, propertyKey, this.refPropertyKey);
    }
  }

  onChange(fun: (value: any) => void, target?: {}) {
    if (this.proxy) {
      this.proxy.__onChange_(target, fun);
    }
  }

  get value(): string {
    return this.toString();
  }

  get test(): string {
    return this.toString();
  }

  equals(value: string): boolean {
    return this.valueOf() === value.valueOf();
  }
}