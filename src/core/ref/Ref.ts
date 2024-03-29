interface CustomEvent {
  target: WeakRef<any>;
  propertyKey: string | symbol;
  fun?: WeakRef<Function>;
}

export type ref<T> = {
  value: T;
  id: string;
  subscriber: (target: {}, propertyKey: string | symbol) => void;
  unsubscribe: (data: { ref: any; name: string; fun?: Function }) => void;
  onChange: (fun: (value: T) => void, target?: {}) => void;
  toString: () => string;
};

export function ref<T>(target: T): {
  value: T;
  id: string;
  subscriber: (target: {}, propertyKey: string | symbol) => void;
  unsubscribe: (data: { ref: any; name: string; fun?: Function }) => void;
  onChange: (fun: (value: T) => void, target?: {}) => void;
  toString: () => string;
} {
  const _id: string = Math.random().toString(36).substr(2, 9);
  const registry: FinalizationRegistry<any> = new FinalizationRegistry(
    (target: WeakRef<any>) => {
      _subscribers = _subscribers.filter(
        (subscriber) => subscriber.target != target,
      );
    },
  );
  let _subscribers: CustomEvent[] = [];

  const newTarget = {
    value: target,
    id: _id,
    subscriber,
    unsubscribe,
    onChange,
    toString,
  };
  const proxy = new Proxy(newTarget, {
    get: function (newTarget, prop, receiver) {
      return Reflect.get(newTarget, prop, receiver);
    },
    set: function (newTarget, prop, value, receiver) {
      const resul = Reflect.set(newTarget, prop, value, receiver);
      notify();
      return resul;
    },
    deleteProperty: function (newTarget, prop) {
      const resul = Reflect.deleteProperty(newTarget, prop);
      notify();
      return resul;
    },
  });

  function notify() {
    const remove: CustomEvent[] = [];
    _subscribers.forEach((subscriber) => {
      if (!setValueToSubscriber(subscriber)) remove.push(subscriber);
    });
    _subscribers = _subscribers.filter(
      (subscriber) => !remove.includes(subscriber),
    );
  }

  function setValueToSubscriber(subscriber: CustomEvent): boolean {
    try {
      const target = subscriber.target?.deref();
      if (target) {
        if (subscriber.fun) {
          const fun = subscriber.fun?.deref();
          if (fun) fun(newTarget.value);
          else return false;
        } else target[subscriber.propertyKey] = newTarget.value;
      } else return false;
    } catch (error) {
      return false;
    }
    return true;
  }

  function subscriber(target: {}, propertyKey: string | symbol) {
    const item = { target: new WeakRef(target), propertyKey };
    if (setValueToSubscriber(item)) {
      _subscribers.push(item);
      registry.register(item.target, item);
    }
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
      fun: data,
    };
    if (setValueToSubscriber(item)) {
      _subscribers.push(item);
      registry.register(item.target, item);
    }
  }

  function toString(): string {
    return newTarget.value?.toString() || "";
  }

  return proxy;
}
