export class Identity<T> {
  private __value: T;

  constructor(value: T) {
    this.__value = value;
  }

  static of<T>(value: T): Identity<T> {
    return new Identity(value);
  }

  map<V>(fn: (val: T) => V): Identity<V> {
    return Identity.of(fn(this.__value));
  }

  flatMap<V>(fn: (val: T) => Identity<V>): Identity<V> {
    return fn(this.__value);
  }

  toString(): string {
    return `Identity(${this.__value})`;
  }
}
