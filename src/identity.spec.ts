import { Identity } from "../src/identity"

describe(".of", () => {
  it("creates a new Identity with the given value", () => {
    const one = Identity.of(1)

    expect(one).toBeInstanceOf(Identity)
    expect(one).toEqual(new Identity(1))
  })
})

describe(".map", () => {
  it("obeys the functor identity law", () => {
    const one = Identity.of(1)
    const two = one.map(a => a)
    expect(one).toEqual(two)
  })

  it("obeys the functor composition law", () => {
    const addOne = (a: number) => a + 1
    const subject = Identity.of(1)
    const doubleMap = subject.map(addOne).map(addOne)
    const composedMap = subject.map((x: number) => addOne(addOne(x)))

    expect(doubleMap).toEqual(composedMap)
  })
})

describe(".ap", () => {
  it("obeys the apply composition law", () => {
    const addOne = (a: number) => a + 1
    const subject = Identity.of(1)
    const doubleMap = subject.ap(new Identity(addOne)).ap(new Identity(addOne))
    const composedMap = subject.ap(
      new Identity((x: number) => addOne(addOne(x))),
    )

    expect(doubleMap).toEqual(composedMap)
  })
})

describe(".toString", () => {
  it("returns the type and value", () => {
    const one = Identity.of(1)

    expect(one.toString()).toEqual("Identity(1)")
  })
})
