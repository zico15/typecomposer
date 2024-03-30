import { createProxyRef } from "./RefProxyHandler";

export interface CustomEvent {
  target: WeakRef<any>;
  propertyKey: string | symbol;
  refPropertyKey: string | symbol;
  fun?: WeakRef<Function>;
}

export class RefString extends String {
  constructor(
    valor: string,
    public refPropertyKey: string | symbol,
    public refTarget: any | undefined = undefined,
  ) {
    super(valor);
  }

  setValue(value: string, propertyKey: string | symbol) {
    if (this.refTarget) this.refTarget[propertyKey] = value;
  }

  subscriber(target: {}, propertyKey: string | symbol, refPropertyKey: string | symbol = undefined) {
    if (this.refTarget) {
      this.refTarget.subscriber(target, propertyKey, refPropertyKey);
    }
  }

  onChange(fun: (value: any) => void, target?: {}) {
    if (this.refTarget) {
      this.refTarget.onChange(fun, target);
    }
  }

  toString(): string {
    return super.toString();
  }
}

export type ref<T> = {
  value: T;
  id: string;
  subscriber: (target: {}, propertyKey: string | symbol, refPropertyKey?: string | symbol) => void;
  unsubscribe: (data: { ref: any; name: string; fun?: Function }) => void;
  onChange: (fun: (value: T) => void, target?: {}) => void;
  toString: () => string;
  setValue: (value: any, propertyKey?: string | symbol) => void;
};

export function ref<T>(target: T): {
  value: T;
  id: string;
  subscriber: (target: {}, propertyKey: string | symbol) => void;
  unsubscribe: (data: { ref: any; name: string; fun?: Function }) => void;
  onChange: (fun: (value: T) => void, target?: {}) => void;
  toString: () => string;
  setValue: (value: any, propertyKey?: string | symbol) => void;
} {
  const _id: string = Math.random().toString(36).substr(2, 9);
  const registry: FinalizationRegistry<any> = new FinalizationRegistry((target: WeakRef<any>) => {
    _subscribers = _subscribers.filter((subscriber) => subscriber.target != target);
  });
  let _subscribers: CustomEvent[] = [];
  const newTarget = {
    value: target,
    id: _id,
    subscriber,
    unsubscribe,
    onChange,
    toString,
  };
  const proxy = initRef();

  function initRef() {
    const result = createProxy(newTarget);
    if (typeof newTarget.value === "object") {
      newTarget.value = createProxy(newTarget.value as any);
      checkType(newTarget.value as any);
    } else result["refPropertyKey"] = "value";
    return result;
  }

  function checkType(value: object) {
    for (let property in value) {
      const descriptor = Object.getOwnPropertyDescriptor(value, property);
      if (descriptor && descriptor.writable && typeof value[property] === "object") {
        value[property] = createProxy(value[property]);
      }
    }
  }

  function createProxy(target: {}): any {
    // console.log("createProxy: ", target, Object.keys(target));
    return createProxyRef(target, notify, onChange);
  }

  function notify() {
    const remove: CustomEvent[] = [];
    _subscribers.forEach((subscriber) => {
      if (!setValueToSubscriber(subscriber)) remove.push(subscriber);
    });
    _subscribers = _subscribers.filter((subscriber) => !remove.includes(subscriber));
  }

  function setValueToSubscriber(subscriber: CustomEvent): boolean {
    try {
      const target = subscriber.target?.deref();
      if (target) {
        if (subscriber.fun) {
          const fun = subscriber.fun?.deref();
          if (fun) fun(newTarget.value);
          else return false;
        }
      } else return false;
    } catch (error) {
      return false;
    }
    return true;
  }

  function subscriber(target: {}, propertyKey: string | symbol) {
    // const item = { target: new WeakRef(target), propertyKey };
    // if (setValueToSubscriber(item)) {
    //   _subscribers.push(item);
    //   registry.register(item.target, item);
    // }
  }

  function unsubscribe(data: { ref: any; name: string; fun?: Function }) {
    // _subscribers = _subscribers.filter(
    //   (subscriber) => subscriber != data,
    // );
  }

  function onChange(fun: (value: T) => void, target?: {}) {
    const data = new WeakRef(fun);
    const item = {
      target: target ? new WeakRef(target) : data,
      propertyKey: undefined,
      refPropertyKey: undefined,
      fun: data,
    };
    if (setValueToSubscriber(item) || fun) {
      _subscribers.push(item);
      registry.register(item.target, item);
    }
  }

  function toString(): string {
    return newTarget.value?.toString() || "";
  }

  return proxy;
}
