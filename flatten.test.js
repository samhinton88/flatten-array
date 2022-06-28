const flatten = require("./flatten");

describe("flatten", () => {
  it("flattens nested arrays", () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty arrays", () => {
    expect(flatten([])).toEqual([])
  })

  it("throws on non-aray input", () => {
    expect(() => flatten("whups")).toThrow()
  })
});
