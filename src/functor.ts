// https://github.com/fantasyland/fantasy-land#functor

export interface Functor<T> {
  // fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
  map<V>(f: (a: T) => V): Functor<V>;
}
