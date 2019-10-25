import { Identity } from '../src/identity';

describe('.of', () => {
  it('creates a new Identity with the given value', () => {
    const one = Identity.of(1);

    expect(one).toBeInstanceOf(Identity);
    expect(one).toEqual(new Identity(1));
  });
});

describe('.toString', () => {
  it('returns the type and value', () => {
    const one = Identity.of(1);

    expect(one.toString()).toEqual('Identity(1)');
  });
});

describe('.map', () => {
  it('returns a new Identity with the mapped function applied', () => {
    const one = Identity.of(1);
    const two = one.map(a => a + 1);

    expect(two).toBeInstanceOf(Identity);
    expect(two).toEqual(Identity.of(2));
  });
});

describe('.flatMap', () => {
  it('returns a new value with the mapped function applied', () => {
    const one = Identity.of(1);
    const two = one.flatMap(a => Identity.of(a + 1));

    expect(two).toBeInstanceOf(Identity);
    expect(two).toEqual(Identity.of(2));
  });
});

describe('.extract', () => {
  it('returns the inner value of an identity monad', () => {
    const MONAD_INNER_NUMBER = 1;
    const one = Identity.of(MONAD_INNER_NUMBER);
    const result = one.extract();

    expect(result).toEqual(MONAD_INNER_NUMBER);
  });
});
