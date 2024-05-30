import { Ref, subscribeRef } from "./Ref";

class WeakRefMap<K extends object, V> {
  private map: WeakMap<K, V>;
  private keys: WeakRef<K>[];
  private _length: number = 0;

  constructor() {
    this.map = new WeakMap();
    this.keys = [];
  }

  set(key: K, value: V): V | undefined {
    const data = this.map.get(key);
    if (data === undefined) this._length++;
    this.map.set(key, value);
    if (this.keys.find((k) => k.deref() === key) === undefined) this.keys.push(new WeakRef(key));
    return data;
  }

  get(key: K): V | undefined {
    return this.map.get(key);
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  delete(key: K): boolean {
    return this.map.delete(key);
  }

  clear(): void {
    this.map = new WeakMap();
  }

  get length(): number {
    return this._length;
  }

  async forEach(callback: (value: V, key: K, map: WeakMap<K, V>) => void): Promise<void> {
    for (const key of this.keys) {
      const strongKey = key.deref();
      if (strongKey === undefined) continue;
      const value = this.map.get(strongKey);
      if (value !== undefined) {
        callback(value, strongKey, this.map);
      }
    }
  }
}

export class RefMap<K extends object = any> {
  private map: WeakRefMap<K, { pro: Map<string | symbol, subscribeRef>; fun: WeakRefMap<(value: any) => void, subscribeRef> }>;
  private refs: WeakRefMap<Ref<any>, subscribeRef[]>;

  constructor() {
    this.map = new WeakRefMap();
    this.refs = new WeakRefMap();
  }

  async set(key: K, value: subscribeRef) {
    const data = this.map.get(key) || { pro: new Map(), fun: new WeakRefMap() };
    let subscriberOld: subscribeRef | undefined = undefined;
    if (value.fun !== undefined) {
      subscriberOld = data.fun.set(value.fun, value);
    } else if (value.prop !== undefined) {
      subscriberOld = data.pro.get(value.prop);
      data.pro.set(value.prop, value);
    }
    this.map.set(key, data);
    await this.updadeRef(value.ref.deref());
    if (subscriberOld != undefined && subscriberOld.ref.deref() !== value.ref.deref()) await this.updadeRef(subscriberOld.ref.deref());
  }

  private async updadeRef(ref: Ref<any> | undefined): Promise<subscribeRef[]> {
    if (ref === undefined) return [];
    const refs: subscribeRef[] = [];
    await this.map.forEach(async (value) => {
      for await (const prop of value.pro.keys()) {
        const pro = value.pro.get(prop);
        if (pro?.ref.deref() === ref) {
          refs.push(pro);
        }
      }
      await value.fun.forEach((fun) => {
        if (fun.ref.deref() === ref) {
          refs.push(fun);
        }
      });
    });
    this.refs.set(ref, refs);
    return refs;
  }

  getSubscribes(ref: Ref<any>): subscribeRef[] {
    return this.refs.get(ref) || [];
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  delete(value: subscribeRef): boolean {
    const v = this.map.delete(value.target.deref() as K);
    if (v) this.updadeRef(value.ref.deref());
    return v;
  }

  clear(): void {
    this.map.clear();
  }

  length(): number {
    return this.map.length;
  }
}
