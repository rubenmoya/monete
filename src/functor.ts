// https://github.com/fantasyland/fantasy-land#functor

export interface Functor<A> {
  // fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
  map<B>(f: (a: A) => B): Functor<B>;
}
