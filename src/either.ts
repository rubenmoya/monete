export abstract class Either {}

export class Left<T> extends Either {
  private readonly value: T;

  constructor(value: T) {
    super();

    this.value = value;
  }

  static of<T>(value: T): Left<T> {
    return new Left(value);
  }

  map() {
    return this;
  }

  fmap = this.map;

  lift = this.map;

  join() {
    return this;
  }

  flatMap() {
    return this;
  }

  chain = this.flatMap;

  bind = this.flatMap;

  toString() {
    return `Left(${this.value})`;
  }
}

export class Right extends Either {}
