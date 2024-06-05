export interface subscribeRef<T = any> {
  target: WeakRef<any>;
  prop?: string | symbol;
  fun?: (value: T) => void;
  ref: WeakRef<any>;
  isUnsubscribed: boolean;
  refPropertyKey?: string | symbol;
}
