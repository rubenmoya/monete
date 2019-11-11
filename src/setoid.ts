// https://github.com/fantasyland/fantasy-land/blob/master/README.md#setoid

export interface Setoid<A> {
  // fantasy-land/equals :: Setoid a => a ~> a -> Boolean
  equals(a: A): boolean;
}
