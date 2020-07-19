import { Identity } from '../src/identity';

describe('.of', () => {
  it('creates a new Identity with the given value', () => {
    const one = Identity.of(1);

    expect(one).toBeInstanceOf(Identity);
    expect(one).toEqual(new Identity(1));
  });
});

describe('.identity', () => {
  it('returns the inner value of a nested identity monad', () => {
    const MONAD_INNER_NUMBER = 1;
    const one = Identity.of(
      Identity.of(
        Identity.of(
          Identity.of(
            Identity.of(Identity.of(Identity.of(MONAD_INNER_NUMBER))),
          ),
        ),
      ),
    );
    const result = one.join(); // result es de tipo number

    expect(result).toEqual(MONAD_INNER_NUMBER);
  });
});
