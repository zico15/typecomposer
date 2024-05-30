import { RefString } from "./RefString";
import { RefMap } from "./WeakRefMap";

function createProxy<T extends object>(target: T, ref: Ref<any>): T {
  for (const key in target) {
    const value = target[key as keyof T];
    if (typeof value === "object" && value !== null) Reflect.set(target, key, createProxy(value, ref));
  }
  const proxy = new Proxy(target, {
    get: (target, prop, receiver) => {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === "string") return new RefString(value, prop, proxy);
      return value;
    },
    set: (target, prop, value, receiver) => {
      if (value instanceof RefString) value = value?.toString();
      const result = Reflect.set(target, prop, value, receiver);
      ref.notify(prop);
      return result;
    },
    deleteProperty: (target, prop) => {
      const result = Reflect.deleteProperty(target, prop);
      ref.notify(prop);
      return result;
    },
  });
  Object.defineProperty(proxy, "__ref__subscribe__", {
    value: (_target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol) => {
      if (typeof prop === "string" || typeof prop === "symbol") ref.subscribe(_target, prop, refPropertyKey);
      else if (typeof prop === "function") ref.subscribe(_target, prop, refPropertyKey);
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });
  proxy["setValue"] = function (value: any, propertyKey: string | symbol) {
    if (propertyKey) proxy[propertyKey] = value;
    else proxy["value"] = value;
  };
  const json = JSON.stringify(proxy);
  console.log(JSON.parse(json));
  return proxy;
}

export interface subscribeRef {
  target: WeakRef<any>;
  prop?: string | symbol;
  fun?: (value: any) => void;
  ref: WeakRef<Ref<any>>;
  isUnsubscribed: boolean;
  refPropertyKey?: string | symbol;
}

export class Ref<T> {
  private _value!: { value: any };
  private static __subscribers: RefMap = new RefMap();

  private static __registry: FinalizationRegistry<any> = new FinalizationRegistry((__: WeakRef<any>) => {});

  constructor(value: T) {
    this.value = value;
  }

  get value() {
    return this._value.value;
  }

  set value(value: T) {
    if (typeof value === "object" && value !== null) {
      this._value = { value: createProxy(value, this) };
    } else {
      this._value = { value };
    }
    this.notify(undefined);
  }

  public notify(refPropertyKey: string | symbol | undefined) {
    const subscribers = Ref.__subscribers.getSubscribes(this);
    subscribers.forEach((subscriber) => {
      if (subscriber.refPropertyKey != undefined && subscriber.refPropertyKey != refPropertyKey) return;
      const target = subscriber.target.deref();
      if (subscriber.isUnsubscribed || target === undefined) {
        this.unsubscribe(subscriber);
        return;
      }
      if (subscriber.prop !== undefined) {
        target[subscriber.prop] = refPropertyKey == undefined ? this.value : this.value[refPropertyKey];
      } else if (subscriber.fun !== undefined) {
        const fun = subscriber.fun;
        if (fun === undefined) {
          this.unsubscribe(subscriber);
          return;
        }
        fun(this.value);
      }
    });
  }

  public async subscribe(target: any, prop: string | symbol, refPropertyKey?: string | symbol): Promise<void>;
  public async subscribe(target: any, fun: (value: any) => void, refPropertyKey?: string | symbol): Promise<void>;
  public async subscribe(target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol): Promise<void> {
    if (target === undefined) return;
    const subscriber: subscribeRef = { target: new WeakRef(target), prop: undefined, fun: undefined, ref: new WeakRef(this), isUnsubscribed: false, refPropertyKey };
    if (typeof prop === "string" || typeof prop === "symbol") subscriber.prop = prop;
    else if (typeof prop === "function") subscriber.fun = prop;
    Ref.registry(subscriber);
  }

  private async unsubscribe(subscriber: subscribeRef) {
    console.log("unsubscribe: ", subscriber);
    subscriber.isUnsubscribed = true;
    await Ref.unregistry(subscriber);
  }

  private static async registry(subscriber: subscribeRef) {
    if (subscriber.isUnsubscribed) return;
    Ref.__registry.register(subscriber.target, subscriber);
    Ref.__subscribers.set(subscriber.target.deref(), subscriber);
  }

  private static async unregistry(subscriber: subscribeRef) {
    Ref.__registry.unregister(subscriber.target);
    Ref.__subscribers.delete(subscriber.target.deref());
  }

  public setValue(value: string, propertyKey: string | symbol) {
    this.value[propertyKey] = value;

    console.log("setValue: ", this.value, " propertyKey: ", propertyKey);
  }
}

export type ref<T> = Ref<T>;
export const isRef = <T>(value: any): value is Ref<T> => value instanceof Ref;
export const ref = <T>(value: T) => new Ref(value);
