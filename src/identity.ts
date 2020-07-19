export class Identity<T> {
  private readonly value: T | Identity<T>;

  constructor(value: Identity<T>);
  constructor(value: T);

  constructor(value: T | Identity<T>) {
    this.value = value;
  }

  static of<T>(value: Identity<T>): Identity<T>;
  static of<T>(value: T): Identity<T>;
  static of<T>(value: T | Identity<T>) {
    return new Identity(value);
  }

  join(): T {
    if (this.value instanceof Identity) {
      return this.value.join();
    }
    return this.value;
  }
}
