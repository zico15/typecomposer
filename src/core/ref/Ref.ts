import { createProxyRef, CustomEvent } from "./RefProxyHandler";

// export interface ref<T> {
//   value: T;
//   id: string;
//   subscriber: (target: {}, propertyKey: string | symbol, refPropertyKey?: string | symbol) => void;
//   unsubscribe: (data: { ref: any; name: string; fun?: Function }) => void;
//   onChange: (fun: (value: T) => void, target?: {}) => void;
//   toString: () => string;
//   setValue: (value: any, propertyKey?: string | symbol) => void;
// };

// export declare var ref: {
//   prototype: ref<any>;
//   new <T>(target: T): ref<T>;
// };

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
    console.log("FinalizationRegistry: ", target);
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
    let result = true;
    try {
      const target = subscriber.target?.deref();
      if (target) {
        if (subscriber.fun) {
          const fun = subscriber.fun?.deref();
          if (fun) fun(newTarget.value);
          else result = false;
        }
      } else result = false;
    } catch (error) {
      result = false;
    }
    if (!result) {
      console.log("FinalizationRegistry2: ", subscriber.target);
      registry.unregister(subscriber.target);
      _subscribers = _subscribers.filter((item) => item != subscriber);
    }
    return result;
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
