import { RefMap } from "./RefMap";
import { RefString } from "./RefString";
import { subscribeRef } from "./SubscribeRef";

export namespace RefProperties {
  export function definePropertieParent(proxy: any, parent: any) {
    Object.defineProperty(proxy, "__parent__", {
      value: parent,
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  export function definePropertieSubscribe(proxy: any) {
    Object.defineProperty(proxy, "__subscribe__", {
      value: function (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol): subscribeRef<any> | undefined {
        if (target === undefined) return undefined;
        const subscriber: subscribeRef<any> = {
          target: new WeakRef(target),
          prop: undefined,
          fun: undefined,
          ref: new WeakRef(proxy),
          isUnsubscribed: false,
          refPropertyKey,
        };
        if (typeof prop === "string" || typeof prop === "symbol") subscriber.prop = prop;
        else if (typeof prop === "function") subscriber.fun = prop;
        RefMap.subscribe(subscriber);
        if (prop != undefined && (typeof prop === "string" || typeof prop === "symbol"))
          baseNotify(subscriber, refPropertyKey || "value", refPropertyKey ? proxy[refPropertyKey] : proxy["value"]);
        return subscriber;
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  export function definePropertieOnChange(proxy: any) {
    Object.defineProperty(proxy, "__onChange__", {
      value: function (fun: (value: any) => void) {
        const subscriber: subscribeRef<any> = { target: new WeakRef(fun), prop: undefined, fun: fun, ref: new WeakRef(proxy), isUnsubscribed: false };
        proxy.__list_change__.push(subscriber);
        if (subscriber.fun) subscriber.fun(proxy);
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  export function definePropertieListOnChange(proxy: any) {
    const subscribers: subscribeRef<any>[] = [];
    Object.defineProperty(proxy, "__list_change__", {
      value: subscribers,
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  export function baseNotify(subscriber: subscribeRef<any>, prop: string | symbol | undefined, value: any) {
    if (subscriber.refPropertyKey && subscriber.refPropertyKey !== prop) return;
    if (value instanceof RefString) value = value.toString();
    if (subscriber.fun) subscriber.fun(value);
    else if (subscriber.target.deref() && prop) {
      const target = subscriber.target.deref();
      target[subscriber.prop] = value;
    }
  }

  function baseNotifyChange(proxy: any, parents: any[]) {
    const subscribersChange: subscribeRef<any>[] = proxy?.__list_change__ || [];
    for (const subscriber of subscribersChange) {
      if (subscriber.target == undefined || subscriber.target?.deref() == undefined) {
        subscriber.isUnsubscribed = true;
        continue;
      }
      if (subscriber.isUnsubscribed) continue;
      if (subscriber.fun) subscriber.fun(proxy);
    }
    if (proxy.__parent__) {
      parents.push(proxy);
      if (parents.find((p) => p === proxy.__parent__) !== undefined) return;
      baseNotifyChange(proxy.__parent__, parents);
    }
  }

  export function definePropertieNotify(proxy: any) {
    Object.defineProperty(proxy, "__notify__", {
      value: function (prop: string | symbol, value: any) {
        const subscribers = RefMap.getSubscribes(proxy);
        for (const subscriber of subscribers) {
          baseNotify(subscriber, prop, value);
        }
        baseNotifyChange(proxy, []);
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  export function definePropertieSetValue(proxy: any) {
    Object.defineProperty(proxy, "__setValue__", {
      value: function (value: any, propertyKey: string | symbol | undefined) {
        if (propertyKey) {
          if (proxy.__parent__) {
            proxy[propertyKey] = value;
          } else proxy.value[propertyKey] = value;
        } else {
          if (proxy.__parent__) {
            proxy = value;
          } else proxy.value = value;
        }
      },
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }
}
