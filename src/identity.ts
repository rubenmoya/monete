export class Identity<T> {
  private readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  static of<T>(value: T): Identity<T> {
    return new Identity(value);
  }

  static unit = Identity.of;

  map<V>(fn: (val: T) => V): Identity<V> {
    return Identity.of(fn(this.value));
  }

  fmap = this.map;

  lift = this.map;

  flatMap<V>(fn: (val: T) => Identity<V>): Identity<V> {
    return fn(this.value);
  }

  chain = this.flatMap;

  bind = this.flatMap;

  toString(): string {
    return `Identity(${this.value})`;
  }

  extract(): T {
    return this.value;
  }
}
