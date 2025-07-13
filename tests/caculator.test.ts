import { expect, test, describe, it } from "bun:test";
import { calculator } from "../src/calculator";

const dataset = [
  [2, 3, 4],
  [-1, 2, 2],
];

describe("Testing with dataset", () => {
  test("sum of %d and %d should be %d", () => {
    it.each(dataset)("Sum of %d and %d should be %d", (a, b, expected) => {
      expect(calculator("Sum", a, b)).toBe(expected);
    });
  });
});

describe("arithmetic", () => {
  // --- Sum Tests ---
  test("should correctly sum two positive numbers (2 + 3)", () => {
    const result = calculator("Sum", 2, 3);
    expect(result).toEqual(5);
  });

  test("should correctly sum a positive and a negative number (10 + -5)", () => {
    const result = calculator("Sum", 10, -5);
    expect(result).toEqual(5);
  });

  // --- Subtract Tests ---
  test("should correctly subtract two positive numbers (10 - 4)", () => {
    const result = calculator("Substract", 10, 4);
    expect(result).toEqual(6);
  });

  test("should correctly subtract a negative number (5 - -2)", () => {
    const result = calculator("Substract", 5, -2);
    expect(result).toEqual(7); // 5 - (-2) = 5 + 2 = 7
  });

  // --- Multiply Tests ---
  test("should correctly multiply two positive numbers (6 * 7)", () => {
    const result = calculator("Multiply", 6, 7);
    expect(result).toEqual(42);
  });

  test("should correctly multiply a positive and a negative number (-3 * 8)", () => {
    const result = calculator("Multiply", -3, 8);
    expect(result).toEqual(-24);
  });

  // --- Divide Tests ---
  test("should correctly divide two positive numbers (15 / 3)", () => {
    const result = calculator("Divide", 15, 3);
    expect(result).toEqual(5);
  });

  test("should return an error for division by zero (10 / 0)", () => {
    const result = calculator("Divide", 10, 0);
    expect(result).toEqual("Error: Cannot divide by zero");
  });

  // --- Both test will fail, thats why test.failing ---
  // --- Wrong Operator Tests ---
  test.failing(
    "should correctly multiply a two positive numbers (3 * 3)",
    () => {
      const result = calculator("Divide", 3, 3);
      expect(result).toEqual(9);
    },
  );

  // --- Invalid Operation Test ---
  test.failing("should return an error for an invalid operator", () => {
    // We cast "Invalid" to 'any' because TypeScript would normally prevent
    // passing a string literal not defined in the 'Operations' type.
    // This is done for testing purposes to simulate an unexpected input.
    const result = calculator("Invalid" as any, 5, 2);
    expect(result).toEqual("Error: Invalid operation");
  });
});
