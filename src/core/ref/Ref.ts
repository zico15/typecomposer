import { RefString } from "./RefString";
import { RefProperties, RefProxyProperties } from "./RefDefineProperty";
import { subscribeRef } from "./SubscribeRef";
import { RefNumber } from "./RefNumber";

function updateRef<T extends object>(proxy: any, value: T): any {
  for (const key in value) {
    const _value: any = value[key];
    if (typeof _value === "object" && !(_value instanceof RefString) && !(_value instanceof RefNumber) && !(value instanceof HTMLElement)) {
      if (proxy[key] === undefined) proxy[key] = RefProxy(_value, proxy);
      else updateRef(proxy[key], _value);
    } else proxy[key] = _value;
  }
  return true;
}

function RefProxy<T extends object>(target: T, parent: any): T {
  const proxy: T = RefProxyProperties.assignProperties(
    new Proxy(target, {
      get: (_target, prop: any, receiver) => {
        const value = target[prop];
        if (typeof value == "string" && proxy["__parent__"]) return new RefString(value, prop, proxy);
        else if (typeof value == "number" && proxy["__parent__"]) return new RefNumber(value, prop, proxy);
        //else if (typeof value === "function") return value.bind(_target);
        return value;
      },
      set: (target: any, prop, value, receiver) => {
        if (typeof target[prop] === "function") return true;
        if (value instanceof RefString || value instanceof RefNumber) value = value?.valueOf();
        const result = typeof value === "object" && typeof target[prop] == "object" ? updateRef(target[prop], value) != undefined : (target[prop] = value);
        // @ts-ignore
        proxy.__notify__(prop, value);
        return true;
      },
      deleteProperty: (target, prop) => {
        const result = Reflect.deleteProperty(target, prop);
        // @ts-ignore
        proxy.__notify__(prop, undefined);
        return true;
      },
    }),
    target,
    parent,
  );
  try {
    for (const key of Object.keys(target)) {
      const value = target[key as keyof T];
      if (typeof value === "object" && !(value instanceof RefString) && !(value instanceof RefNumber) && !(value instanceof HTMLElement)) {
        if (refType(value)) target[key] = value;
        else target[key] = RefProxy(value, proxy);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return proxy;
}

export function isRef(obj: any): boolean {
  return (
    typeof obj == "object" &&
    "__subscribe__" in obj &&
    "__onChange__" in obj &&
    "onChange" in obj &&
    "value" in obj &&
    "__parent__" in obj &&
    "__notify__" in obj &&
    obj["__parent__"] == undefined
  );
}

export type ref<T> = {
  value: T;
  subscribe: (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol | undefined) => subscribeRef<any> | undefined;
  onChange: <T>(fun: (value: T) => void, target?: {} | undefined) => void;
  toString: () => string;
  toJSON: () => object;
};
export type refType = typeof refType;
export type isRef = typeof isRef;

export function refType<T>(base: any): {
  value: T;
  subscribe: (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol | undefined) => subscribeRef<any> | undefined;
  onChange: <T>(fun: (value: T) => void, target?: {} | undefined) => void;
  toString: () => string;
  toJSON: () => object;
} {
  if (typeof base != "object") return undefined;
  function __subscribe__(target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol): subscribeRef<any> | undefined {
    // @ts-ignore
    return this.__subscribe__(target, prop, refPropertyKey);
  }
  //@ts-ignore
  function __onChange__(fun: (value: T) => void, target?: {}) {
    // @ts-ignore
    this.__onChange__(fun, target);
  }

  function get_property_key(v: any, parent: any): string | symbol {
    if (v["__refPropertyKey__"] != undefined) return v["__refPropertyKey__"];
    if (parent == undefined) return undefined;
    for (const key in parent) {
      if (parent[key] === v) return key;
    }
    return undefined;
  }

  if (isRef(base)) return base;
  if (base instanceof RefString || base instanceof RefNumber) {
    //const a = { __subscribe__, __onChange__, toString: () => "", toJSON: () => base, value: base as T, onChange: __onChange__, subscribe: __subscribe__ };
    //// get e set para value
    //Object.defineProperty(a, "value", {
    //  get: () => {
    //    return base.value;
    //  },
    //  set: (value: any) => {
    //    base.value = value?.valueOf() || value;
    //  },
    //});
    //// @ts-ignore
    //a.__subscribe__ = base.__subscribe__.bind(base);
    //// @ts-ignore
    //a.__onChange__ = base.onChange.bind(base);
    //a.subscribe = base.__subscribe__.bind(base);
    //// @ts-ignore
    //a.toString = base.toString.bind(base);
    //// @ts-ignore
    //a.toJSON = () => {
    //  return { value: base.toString() };
    //};
    //a.onChange = base.onChange.bind(base);
    //return base["__parent__"]).call(base["__parent__"], base);
  }
  if ("__subscribe__" in base && "__onChange__" in base && "__parent__" in base && "__notify__" in base) {
    const a = { __subscribe__, __onChange__, toString: () => "", toJSON: () => base, value: base as T, onChange: __onChange__, subscribe: __subscribe__ };
    a.subscribe = base.__subscribe__.bind(base);
    a.onChange = base.__onChange__.bind(base);
    a.toString = base.__toString__.bind(base);
    a.toJSON = base.__toJSON__.bind(base);
    a["__parent__"] = base.__parent__;
    a["__subscribe__"] = base.__subscribe__.bind(base);
    a["__onChange__"] = base.__onChange__.bind(base);
    a["__list_change__"] = base.__list_change__;
    a["__notify__"] = base.__notify__.bind(base);
    a["__setValue__"] = base.__setValue__.bind(base);
    a["__toString__"] = base.__toString__.bind(base);
    a["__toJSON__"] = base.__toJSON__.bind(base);
    a["__refPropertyKey__"] = get_property_key(base, base.__parent__);
    return new Proxy(a, {
      get: (target, prop: any, receiver) => {
        return Reflect.get(target, prop, receiver);
      },
      set: (target: any, prop, value, receiver) => {
        if (prop == "value") {
          const refPropertyKey = a["__refPropertyKey__"];
          if (refPropertyKey != undefined) {
            const parent = a["__parent__"];
            parent?.__setValue__(value, refPropertyKey);
          }
          return true;
        }
        return Reflect.set(target, prop, value, receiver);
      },
    }) as any;
  }
  return undefined;
}

export function ref<T>(value: T): {
  value: T;
  subscribe: (target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol | undefined) => subscribeRef<any> | undefined;
  onChange: <T>(fun: (value: T) => void, target?: {} | undefined) => void;
  toString: () => string;
  toJSON: () => object;
} {
  if (value instanceof RefString) {
    value = value.value as any;
  }
  //@ts-ignore
  const r = RefProxy({ value: value }, this);
  return RefProperties.assignProperties(r);
}

export namespace Ref {
  /**
   *
   * @param ref
   * @param target
   * @param prop
   * @param refPropertyKey
   * @returns
   * */
  export function subscribe(ref: any, target: any, prop: string | symbol | ((value: any) => void), refPropertyKey?: string | symbol): subscribeRef<any> | undefined {
    const base = refType(ref);
    // @ts-ignore
    if (base) return base.__subscribe__(target, prop, refPropertyKey);
    return undefined;
  }
}
