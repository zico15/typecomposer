import { subscribeRef } from "./SubscribeRef";

export class WeakRefMap<K extends object, V> {
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
    const d = this.map.delete(key);
    if (d) this._length--;
    return d;
  }

  clear(): void {
    this.map = new WeakMap();
    this._length = 0;
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

export namespace RefMap {
  const map: WeakRefMap<any, Map<string | symbol, subscribeRef<any>>> = new WeakRefMap();

  export function subscribe(subscriber: subscribeRef<any>) {
    const subscribers = map.get(subscriber.target.deref()) || new Map<string | symbol, subscribeRef<any>>();
    subscribers.set(subscriber.prop || String(subscriber.fun), subscriber);
    map.set(subscriber.target.deref(), subscribers);
  }

  export function unsubscribe(subscriber: subscribeRef<any>) {
    const subscribers = map.get(subscriber.target.deref());
    if (subscribers === undefined) return;
    subscribers.delete(subscriber.prop || String(subscriber.fun));
    map.set(subscriber.target.deref(), subscribers);
  }

  export function getSubscribes(_ref: any) {
    const subscribers: subscribeRef<any>[] = [];
    map.forEach((value) => {
      value.forEach((value) => {
        if (value.ref.deref() === _ref) subscribers.push(value);
      });
    });
    return subscribers;
  }
}
