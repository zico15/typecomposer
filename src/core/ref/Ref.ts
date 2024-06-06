import { RefString } from "./RefString";
import { RefProperties } from "./RefDefineProperty";
import { subscribeRef } from "./SubscribeRef";

function subscribe(target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol): subscribeRef<any> | undefined {
  // @ts-ignore
  return this.__subscribe__(target, prop, refPropertyKey);
}

//@ts-ignore
function onChange<T>(fun: (value: T) => void, target?: {}) {
  // @ts-ignore
  this.__onChange__(fun, target);
}
function toString() {
  // @ts-ignore
  return this.__parent__ ? JSON.stringify(this) : JSON.stringify(this.value);
}
function toJSON() {
  // @ts-ignore
  return this.__parent__ ? JSON.parse(JSON.stringify(this)) : JSON.parse(JSON.stringify(this.value));
}

function updateRef<T extends object>(proxy: any, value: T): any {
  for (const key in value) {
    const _value: any = value[key];
    if (typeof _value == "object") {
      if (proxy[key] === undefined) Reflect.set(proxy, key, RefProxy(_value, proxy));
      else updateRef(proxy[key], _value);
    } else Reflect.set(proxy, key, _value);
  }
  return true;
}

function RefProxy<T extends object>(target: T, parent: any): T {
  // @ts-ignore
  const v = target; //parent != undefined ? target : target.value;

  const proxy: T = new Proxy(target, {
    get: (target, prop: any, receiver) => {
      const value = Reflect.get(target, prop, receiver);
      if (parent && typeof value === "string" && value) return new RefString(value, prop, proxy);
      return value;
    },
    set: (target: any, prop, value, receiver) => {
      if (value instanceof RefString) value = value?.toString();
      const result =
        typeof value === "object" && typeof target[prop] == "object" ? updateRef(target[prop], value) != undefined : Reflect.set(target, prop, value, receiver);
      // @ts-ignore
      proxy.__notify__(prop, value);
      return result;
    },
    deleteProperty: (target, prop) => {
      const result = Reflect.deleteProperty(target, prop);
      // @ts-ignore
      proxy.__notify__(prop, undefined);
      return result;
    },
  });
  for (const key in v) {
    const value = v[key as keyof T];
    if (typeof value === "object" && value !== null) Reflect.set(v, key, RefProxy(value, proxy));
  }
  RefProperties.definePropertieParent(proxy, parent);
  RefProperties.definePropertieSubscribe(proxy);
  RefProperties.definePropertieOnChange(proxy);
  RefProperties.definePropertieNotify(proxy);
  RefProperties.definePropertieListOnChange(proxy);
  return proxy;
}

export function isRef(obj: any): boolean {
  return typeof obj == "object" && "__subscribe__" in obj && "__onChange__" in obj && "__parent__" in obj && "__notify__" in obj;
}

export type ref<T> = {
  value: T;
  subscribe: (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol | undefined) => subscribeRef<any> | undefined;
  onChange: <T>(fun: (value: T) => void, target?: {} | undefined) => void;
  toString: () => string;
  toJSON: () => string;
};
export type refType = typeof refType;
export type isRef = typeof isRef;

export function refType<T extends object>(base: T) {
  function __subscribe__(target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol): subscribeRef<any> | undefined {
    // @ts-ignore
    return this.__subscribe__(target, prop, refPropertyKey);
  }
  //@ts-ignore
  function __onChange__(fun: (value: T) => void, target?: {}) {
    // @ts-ignore
    this.__onChange__(fun, target);
  }
  if (isRef(base)) {
    const a = { __subscribe__, __onChange__, toString: () => "", toJSON: () => base, ...base };
    // @ts-ignore
    a.__subscribe__ = subscribe.bind(a);
    // @ts-ignore
    a.__onChange__ = onChange.bind(a);
    // @ts-ignore
    a.toString = toString.bind(a);
    // @ts-ignore
    a.toJSON = toJSON.bind(a);
    return a;
  }
  return undefined;
}

export function ref<T>(value: T): {
  value: T;
  subscribe: (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol | undefined) => subscribeRef<any> | undefined;
  onChange: <T>(fun: (value: T) => void, target?: {} | undefined) => void;
  toString: () => string;
  toJSON: () => string;
} {
  //@ts-ignore
  const r = RefProxy({ value: value, subscribe, onChange, toString: () => "", toJSON: () => value }, this);
  r.subscribe = subscribe.bind(r);
  // @ts-ignore
  r.onChange<T> = onChange.bind(r);
  // @ts-ignore
  r.toString = toString.bind(r);
  // @ts-ignore
  r.toJSON = toJSON.bind(r);
  return r as any;
}
