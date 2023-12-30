interface CustomEvent {
  target: WeakRef<any>;
  propertyKey: string | symbol;
  fun?: Function;
}

export class Ref<T> {
  private _id: string = Math.random().toString(36).substr(2, 9);
  private _value: T;
  private registry: FinalizationRegistry<any>;
  private _subscribers: CustomEvent[] = [];

  constructor(value: T) {
    this._value = value;
    this._value = value;
    this.registry = new FinalizationRegistry((target: WeakRef<any>) => {
      this._subscribers = this._subscribers.filter(
        (subscriber) => subscriber.target != target,
      );
      console.log("registry: ", target);
    });
  }

  get value(): T {
    return this._value;
  }

  set value(v: T) {
    this._value = v;
    this.notify();
  }

  get id(): string {
    return this._id;
  }

  private notify() {
    const remove: CustomEvent[] = [];
    this._subscribers.forEach((subscriber) => {
      if (!this.setValueToSubscriber(subscriber, true)) remove.push(subscriber);
    });
    this._subscribers = this._subscribers.filter(
      (subscriber) => !remove.includes(subscriber),
    );
  }

  private setValueToSubscriber(
    subscriber: CustomEvent,
    checkContext = false,
  ): boolean {
    try {
      const target = subscriber.target?.deref();
      if (target) target[subscriber.propertyKey] = this._value;
      else return false;
    } catch (error) {
      return false;
    }
    return true;
  }

  public subscriber(target: any, propertyKey: string | symbol) {
    const item = { target: new WeakRef(target), propertyKey };
    if (this.setValueToSubscriber(item)) {
      this._subscribers.push(item);
      this.registry.register(target, item);
    }
  }

  public unsubscribe(data: { ref: any; name: string; fun?: Function }) {
    // this._subscribers = this._subscribers.filter(
    //   (subscriber) => subscriber != data,
    // );
  }

  toString(): string {
    return this._value?.toString() || "";
  }
}
