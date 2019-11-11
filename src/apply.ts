import { Functor } from './functor';

// https://github.com/fantasyland/fantasy-land#apply

export interface Apply<A> extends Functor<A> {
  // fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
  ap<B>(fn: Apply<(a: A) => B>): Apply<B>;
}
