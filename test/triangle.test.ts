import { describe, expect, it } from "vitest";
import { classifyRaw, INT_MAX } from "../src/triangle";

const MAX = String(INT_MAX);

// [test case id, side A, side B, side C, expected message]
const CASES: [number, string, string, string, string][] = [
  [1, "3", "4", "5", "Scalene triangle"],
  [2, "7", "9", "12", "Scalene triangle"],
  [3, "5", "4", "3", "Scalene triangle"],
  [4, "5", "5", "5", "Equilateral triangle"],
  [5, "1", "1", "1", "Equilateral triangle"],
  [6, "5", "5", "3", "Isosceles triangle"],
  [7, "5", "3", "5", "Isosceles triangle"],
  [8, "3", "5", "5", "Isosceles triangle"],
  [9, "50", "50", "1", "Isosceles triangle"],
  [10, "1", "2", "3", "Not a triangle"],
  [11, "1", "3", "2", "Not a triangle"],
  [12, "3", "1", "2", "Not a triangle"],
  [13, "1", "2", "4", "Not a triangle"],
  [14, "1", "4", "2", "Not a triangle"],
  [15, "4", "1", "2", "Not a triangle"],
  [16, "1", "1", "2", "Not a triangle"],
  [17, "1", "1", "3", "Not a triangle"],
  [18, "2", "1", "1", "Not a triangle"],
  [19, "0", "5", "5", "Not a triangle (invalid side length)"],
  [20, "5", "0", "5", "Not a triangle (invalid side length)"],
  [21, "5", "5", "0", "Not a triangle (invalid side length)"],
  [22, "0", "0", "0", "Not a triangle (invalid side length)"],
  [23, "-3", "4", "5", "Not a triangle (invalid side length)"],
  [24, "-5", "-5", "-5", "Not a triangle (invalid side length)"],
  [25, "3.5", "4", "5", "Error: integers only"],
  [26, "a", "b", "c", "Error: integers only"],
  [27, "3", "", "5", "Error: all three values required"],
  [28, MAX, MAX, MAX, "Equilateral triangle"],
  [29, MAX, MAX, "1", "Isosceles triangle"],
];

describe("triangle classifier", () => {
  it.each(CASES)("TC%i: %s, %s, %s", (_id, a, b, c, expected) => {
    expect(classifyRaw(a, b, c)).toBe(expected);
  });
});
