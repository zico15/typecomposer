import { subscribeRef } from "./SubscribeRef";

interface WeakRefPair<K extends object = any, V = any> {
  key: WeakRef<K>;
  value: V;
}

export class WeakRefMap<K extends object, V> {
  private map: WeakRefPair<K, V>[];
  private registry: FinalizationRegistry<WeakRefPair<K, V>>;

  constructor() {
    this.map = [];
    this.registry = new FinalizationRegistry((key) => {
      const index = this.map.findIndex((k) => k === key);
      if (index === -1) return;
      this.map.splice(index, 1);
      //console.log("WeakRefMap: Finalization: ", this.map);
    });
  }

  private createItem(key: K, value: V): WeakRefPair<K, V> {
    const item = { key: new WeakRef(key), value };
    this.registry.register(key, item);
    return item;
  }

  set(key: K, value: V): V | undefined {
    const data: WeakRefPair = this.getWeakRefPair(key);
    if (data === undefined) this.map.push(this.createItem(key, value));
    else data.value = value;
    //console.log("WeakRefMap: set: ", this.map);
    return value;
  }

  getWeakRefPair(key: K): WeakRefPair<K, V> | undefined {
    return this.map.find((k) => k.key.deref() === key);
  }

  get(key: K): V | undefined {
    if (key === undefined) return undefined;
    return this.map.find((k) => k.key.deref() === key)?.value;
  }

  has(key: K): boolean {
    return this.map.find((k) => k.key.deref() === key) !== undefined;
  }

  delete(key: K): boolean {
    const index = this.map.findIndex((k) => k.key.deref() === key);
    if (index === -1) return false;
    this.map.splice(index, 1);
    return true;
  }

  clear(): void {
    this.map = [];
  }

  get length(): number {
    return this.map.length;
  }

  async forEach(callback: (value: V, key: K) => void): Promise<void> {
    const removeAll: WeakRefPair[] = [];
    for (const item of this.map) {
      const key = item.key.deref();
      if (key === undefined) {
        removeAll.push(item);
        continue;
      }
      callback(item.value, key);
    }
    //if (removeAll.length > 0) console.log("WeakRefMap: removeAll: ", removeAll);
    this.map = this.map.filter((item) => !removeAll.includes(item));
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
