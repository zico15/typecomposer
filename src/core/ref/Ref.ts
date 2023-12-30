export class Ref2<T> {
  private _id: string = Math.random().toString(36).substr(2, 9);
  private _subscribers: { ref: any; name: string; fun?: Function }[] = [];
  public proxy: any;

  constructor(value: T) {
    if (typeof value == "object") {
      this.proxy = new Proxy(value, {
        get: function (target, prop) {
          return target[prop];
        },
        set: this.setData.bind(this),
      });
      Object.defineProperty(this, "value", {
        get: function () {
          return this.proxy;
        },
        set: function (v) {
          this.proxy = v;
        },
      });

      this.toString = function (): string {
        return JSON.stringify(this.proxy);
      };
    } else {
      this.proxy = value;
      this.toString = function (): string {
        return this.proxy as any;
      };
    }
  }

  destructor() {}

  private setData(target: any, prop: any, value: any) {
    this._subscribers.forEach((subscriber) => {
      if (subscriber.fun) subscriber.fun(this.toString());
      else subscriber.ref[subscriber.name] = this.toString();
    });
    target[prop] = value;
    return true;
  }

  get value(): T {
    return this.proxy;
  }

  set value(v: T) {
    this._subscribers.forEach((subscriber) => {
      if (subscriber.fun) subscriber.fun(v);
      else subscriber.ref[subscriber.name] = v;
    });
    this.proxy = v;
  }

  get id(): string {
    return this._id;
  }

  public subscriber(data: { ref: any; name: string; fun?: Function }) {
    if (this._subscribers.indexOf(data) == -1) this._subscribers.push(data);
    if (data?.fun == undefined) data.ref[data.name] = this.toString();
  }

  public unsubscribe(data: { ref: any; name: string; fun?: Function }) {
    this._subscribers = this._subscribers.filter(
      (subscriber) => subscriber != data,
    );
  }
}

// declare global {

//     interface Ref<T extends any> {
//         subscriber(data: { ref: any, name: string }): void;
//         unsubscribe(data: { ref: any, name: string }): void;
//     }

//     interface String {
//         toRef(): Ref<string>;
//     }
//     interface Number {
//         toRef(): Ref<number>;
//     }

//     interface Boolean {
//         toRef(): Ref<boolean>;
//     }

//     interface Date {
//         toRef(): Ref<Date>;
//     }

//     interface Array<T> {
//         toRef(): Ref<T[]>;
//         clear(): void;
//     }

//     interface Object {
//         toRef(): Ref<Object>;
//     }

//     interface Function {
//         toRef(): Ref<Function>;
//     }

//     interface Symbol {
//         toRef(): Ref<Symbol>;
//     }

//     interface BigInt {
//         toRef(): Ref<BigInt>;
//     }

//     interface RegExp {
//         toRef(): Ref<RegExp>;
//     }

//     interface Error {
//         toRef(): Ref<Error>;
//     }

//     interface EvalError {
//         toRef(): Ref<EvalError>;
//     }

//     interface RangeError {
//         toRef(): Ref<RangeError>;
//     }

//     interface ReferenceError {
//         toRef(): Ref<ReferenceError>;
//     }

//     interface SyntaxError {
//         toRef(): Ref<SyntaxError>;
//     }

//     interface TypeError {
//         toRef(): Ref<TypeError>;
//     }

// }

// Array.prototype.clear = function () {
//     this.length = 0;
// }
