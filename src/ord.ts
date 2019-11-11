// https://github.com/fantasyland/fantasy-land/blob/master/README.md#ord

export interface Ord<A> {
  // fantasy-land/lte :: Ord a => a ~> a -> Boolean
  lte(a: A): boolean;
}
