const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return number for single number string", () => {
    expect(add("1")).toBe(1);
    expect(add("42")).toBe(42);
  });

  test("should return sum for two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3")).toBe(5);
  });

  test("should return sum for multiple comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3,3,2")).toBe(10);
  });

  test("should handle newlines as valid delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
