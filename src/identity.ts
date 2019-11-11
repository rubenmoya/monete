import { Apply } from './apply';

export class Identity<T> implements Apply<T> {
  private readonly value: T;

  static of<T>(value: T) {
    return new Identity(value);
  }

  constructor(value: T) {
    this.value = value;
  }

  map<V>(fn: (a: T) => V): Identity<V> {
    return new Identity(fn(this.value));
  }

  ap<V>(applyFn: Identity<(a: T) => V>): Identity<V> {
    return applyFn.map(fn => fn(this.value));
  }

  toString(): string {
    return `Identity(${this.value})`;
  }
}
