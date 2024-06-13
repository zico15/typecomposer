import { RefMap } from "./RefMap";
import { RefString } from "./RefString";
import { subscribeRef } from "./SubscribeRef";

export namespace RefProxyProperties {
  export function assignProperties(proxy: any, target: any, parent: any): any {
    definePropertieTargetAndParent(proxy, target, parent);
    definePropertieSubscribe(proxy);
    definePropertieOnChange(proxy);
    definePropertieListOnChange(proxy);
    definePropertieNotify(proxy);
    definePropertieSetValue(proxy);
    definePropertieToString(proxy);
    definePropertieToJSON(proxy);
    return proxy;
  }

  function definePropertieTargetAndParent(proxy: any, target: any, parent: any) {
    Object.defineProperty(proxy, "__parent__", {
      value: parent,
      configurable: false,
      enumerable: false,
      writable: false,
    });
    Object.defineProperty(proxy, "__target__", {
      value: target,
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieSubscribe(proxy: any) {
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

  function definePropertieOnChange(proxy: any) {
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

  function definePropertieListOnChange(proxy: any) {
    const subscribers: subscribeRef<any>[] = [];
    Object.defineProperty(proxy, "__list_change__", {
      value: subscribers,
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function baseNotify(subscriber: subscribeRef<any>, prop: string | symbol | undefined, value: any) {
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
      if (subscriber.fun) subscriber.fun(proxy.__parent__ ? proxy : proxy.value);
    }
    if (proxy.__parent__) {
      parents.push(proxy);
      if (parents.find((p) => p === proxy.__parent__) !== undefined) return;
      baseNotifyChange(proxy.__parent__, parents);
    }
  }

  function definePropertieNotify(proxy: any) {
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

  function definePropertieSetValue(proxy: any) {
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
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieToString(proxy: any) {
    Object.defineProperty(proxy, "__toString__", {
      value: function () {
        try {
          return this.__parent__ ? JSON.stringify(this) : JSON.stringify(this.value);
        } catch (e) {
          return undefined;
        }
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieToJSON(proxy: any) {
    Object.defineProperty(proxy, "__toJSON__", {
      value: function () {
        try {
          return JSON.parse(this.__toString__());
        } catch (e) {
          return undefined;
        }
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }
}

export namespace RefProperties {
  export function assignProperties(proxy: any): any {
    Object.defineProperty(proxy, "toString", {
      value: function () {
        return this.__toString__();
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
    Object.defineProperty(proxy, "toJSON", {
      value: function () {
        return this.__toJSON__();
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
    Object.defineProperty(proxy, "subscribe", {
      value: function (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol) {
        return this.__subscribe__(target, prop, refPropertyKey);
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
    Object.defineProperty(proxy, "onChange", {
      value: function (fun: (value: any) => void) {
        return this.__onChange__(fun);
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
    return proxy;
  }
}

export namespace RefStringAndNumber {
  export function assignProperties(proxy: any, parent: any, refPropertyKey: string | symbol): any {
    definePropertieParent(proxy, parent);
    definePropertieParent(proxy, parent);
    definePropertieSubscribe(proxy);
    definePropertieOnChange(proxy);
    definePropertieListOnChange(proxy);
    definePropertieNotify(proxy);
    definePropertieSetValue(proxy);
    definePropertieToString(proxy);
    definePropertieToJSON(proxy);
    definePropertieRefPropertyKey(proxy, refPropertyKey);
    return proxy;
  }

  function definePropertieRefPropertyKey(proxy: any, refPropertyKey: string | symbol) {
    Object.defineProperty(proxy, "__refPropertyKey__", {
      value: refPropertyKey,
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieParent(proxy: any, parent: any) {
    Object.defineProperty(proxy, "__parent__", {
      value: parent,
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieSubscribe(proxy: any) {
    Object.defineProperty(proxy, "__subscribe__", {
      value: function (target: any, prop: string | symbol | ((value: any) => void)) {
        if (this.__parent__) {
          this.__parent__.__subscribe__(target, prop, this.__refPropertyKey__);
        }
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieOnChange(proxy: any) {
    Object.defineProperty(proxy, "__onChange__", {
      value: function (fun: (value: any) => void, target?: {}) {
        if (this.__parent__) {
          this.__parent__.__onChange_(target, fun);
        }
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieListOnChange(proxy: any) {
    Object.defineProperty(proxy, "__list_change__", {
      value: proxy.__parent__?.__list_change__ || [],
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  // __setValue__
  function definePropertieSetValue(proxy: any) {
    Object.defineProperty(proxy, "__setValue__", {
      value: function (value: any, refPropertyKey: string | symbol) {
        // @ts-ignore
        if (typeof value == "object" && value instanceof RefString) {
          // @ts-ignore
          value = value.valueOf();
        }
        this._value = value;
        if (this.__parent__) this.__parent__.__setValue__(value, refPropertyKey);
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieToString(proxy: any) {
    Object.defineProperty(proxy, "__toString__", {
      value: function () {
        return this._value.toString();
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieToJSON(proxy: any) {
    Object.defineProperty(proxy, "__toJSON__", {
      value: function () {
        return { value: this._value.toString() };
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }

  function definePropertieNotify(proxy: any) {
    Object.defineProperty(proxy, "__notify__", {
      value: function (prop: string | symbol, value: any) {
        if (this.__parent__) {
          this.__parent__.__notify__(prop, value);
        }
      }.bind(proxy),
      configurable: false,
      enumerable: false,
      writable: false,
    });
  }
}
