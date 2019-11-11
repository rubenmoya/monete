import { Functor } from './functor';

// https://github.com/fantasyland/fantasy-land#apply

export interface Apply<T> extends Functor<T> {
  // fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
  ap<V>(applyFn: Apply<(a: T) => V>): Apply<V>;
}
