type GrabConstructorParameters<T> = {
  [K in keyof T]: T[K] extends new (...args: infer P) => any ? P : never;
};

// https://stackoverflow.com/a/50375286
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (x: infer I) => void ? I : never;

type JoinConstructors<T extends (new (...args: any[]) => any)[]> = new (...args: GrabConstructorParameters<T>) => UnionToIntersection<InstanceType<T[number]>>;

export function InheritClasses<T extends (new (...args: any[]) => any)[]>(...bases: T): JoinConstructors<T> {
  // https://stackoverflow.com/a/61860802
  class Bases {
    constructor(...args: GrabConstructorParameters<T>) {
      bases.forEach((base, i) => Object.assign(this, new base(...args[i])));
    }
  }
  bases.forEach((base) => {
    Object.getOwnPropertyNames(base.prototype)
      .filter((prop) => prop != "constructor")
      .forEach((prop) => (Bases.prototype[prop] = base.prototype[prop]));
  });
  return Bases as JoinConstructors<T>;
}
