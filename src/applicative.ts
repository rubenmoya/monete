import { Apply } from './apply';

// https://github.com/fantasyland/fantasy-land#applicative

export interface Applicative<A> extends Apply<A> {
  // fantasy-land/of :: Applicative f => a -> f a
  of<B>(value: any): Applicative<B>;
}
