export class Identity<T> {
  private readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  static of<T>(value: T): Identity<T> {
    return new Identity(value);
  }

  map<V>(fn: (val: T) => V): Identity<V> {
    return Identity.of(fn(this.value));
  }

  flatMap<V>(fn: (val: T) => Identity<V>): Identity<V> {
    return fn(this.value);
  }

  toString(): string {
    return `Identity(${this.value})`;
  }
}
