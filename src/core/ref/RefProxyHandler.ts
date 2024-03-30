import { CustomEvent, RefString } from "./Ref";

export function createProxyRef<T extends object>(target: T, onNotity: () => void, onChange: (fun: (value: T) => void, target?: {}) => void): T {
  const handler = {};
  const proxy = new Proxy(target, handler);
  let _subscribers: CustomEvent[] = [];
  const registry: FinalizationRegistry<any> = new FinalizationRegistry((target: WeakRef<any>) => {
    _subscribers = _subscribers.filter((subscriber) => (subscriber.target as any) != target);
  });

  function notify(prop: string | symbol, value: any) {
    // console.log("notify: ", _subscribers);
    const remove: CustomEvent[] = [];
    _subscribers.forEach((subscriber) => {
      if (!setValueToSubscriber(subscriber, prop, value)) remove.push(subscriber);
    });
    _subscribers = _subscribers.filter((subscriber) => !remove.includes(subscriber));
  }

  function setValueToSubscriber(subscriber: CustomEvent, prop: string | symbol, value: any): boolean {
    try {
      const target = subscriber.target?.deref();
      if (target) {
        if (value && value instanceof RefString) value = value?.toString() || "";
        // if (subscriber.fun) {
        //     const fun = subscriber.fun?.deref();
        //     if (fun) fun(newTarget.value);
        //     else return false;
        // // } else
        // console.log(
        //     "setValueToSubscriber: ",
        //     prop,
        //     " subscriber.propertyKe: ",
        //     subscriber.propertyKey,
        //     " value: ",
        //     value,
        // );
        // if (prop == subscriber.propertyKey)
        if (subscriber.refPropertyKey == undefined || prop == undefined || prop == subscriber.refPropertyKey) target[subscriber.propertyKey] = value;
      } else return false;
    } catch (error) {
      return false;
    }
    return true;
  }

  // function subscriber(target: {}, propertyKey: string | symbol) {
  //     const item = { target: new WeakRef(target), propertyKey };
  //     if (setValueToSubscriber(item)) {
  //         _subscribers.push(item);
  //         registry.register(item.target, item);
  //     }
  // }

  // function unsubscribe(data: { ref: any; name: string; fun?: Function }) {
  //     // _subscribers = _subscribers.filter(
  //     //   (subscriber) => subscriber != data,
  //     // );
  // }

  const proxyHandler = {
    get: function (target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === "string") return new RefString(value, prop, proxy);
      return value;
    },
    set: function (target, prop, value, receiver) {
      //   console.log("prop: ", prop, " value: ", value, " receiver: ", receiver);
      if (value instanceof RefString) value = value?.toString();
      //   console.log("set: ", prop, value);
      const resul = Reflect.set(target, prop, value, receiver);
      notify(prop, value);
      onNotity();
      return resul;
    },
    deleteProperty: function (target, prop) {
      const resul = Reflect.deleteProperty(target, prop);
      onNotity();
      return resul;
    },
  };
  proxy["subscriber"] = function (target: {}, propertyKey: string | symbol, refPropertyKey: string | symbol = undefined, writeOnly: boolean = false) {
    if (writeOnly) {
      // Object.defineProperty(proxy, propertyKey, {
      //     get: function () {
      //         return proxy[refPropertyKey];
      //     },
      //     set: function (value) {
      //         proxy["setValue"](value, propertyKey);
      //     },
      // });
    }
    const item: CustomEvent = {
      target: new WeakRef(target),
      propertyKey,
      refPropertyKey,
    };
    let value = refPropertyKey == undefined ? proxy["value"] : proxy[refPropertyKey];
    if (value instanceof RefString) value = value.toString();
    if (setValueToSubscriber(item, refPropertyKey, value)) {
      _subscribers.push(item);
      registry.register(item.target, item);
    }
  };
  proxy["toString"] = function (): string {
    return proxy["value"]?.toString() || "";
  };
  proxy["onChange"] = onChange;

  proxy["setValue"] = function (value: any, propertyKey: string | symbol) {
    if (propertyKey) proxy[propertyKey] = value;
    else proxy["value"] = value;
  };
  proxy["refPropertyKey"] = undefined;
  Object.setPrototypeOf(handler, proxyHandler);
  return proxy;
}
