const flatten = require("./flatten");

describe("flatten", () => {
  it("flattens nested arrays", () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty arrays", () => {
    expect(flatten([])).toEqual([])
  })

  it("handles nested empty arrays", () => {
    expect(flatten([[[[[[[[[[[[[[]]]]]]]]]]][[[[[[[]]]]]]]]]])).toEqual([])
  })

  it("ignores further arguments", () => {
    expect(flatten([1, [2, [3, [4, [5]]]]], { some: 'garbage' })).toEqual([1, 2, 3, 4, 5]);
  });

  it("throws on non-aray input", () => {
    expect(() => flatten("whups")).toThrow()
    expect(() => flatten(null)).toThrow()
    expect(() => flatten(1)).toThrow()
    expect(() => flatten(true)).toThrow()
  })

  it("throws on empty input", () => {
    expect(() => flatten()).toThrow()
  })

  it("allows elements of mixed type", () => {
    expect(flatten([1, ['2', [false, [{}, [null]]]]])).toEqual([1, '2', false, {}, null]);
  })
});
