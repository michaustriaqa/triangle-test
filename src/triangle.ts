/**
 * Triangle classifier.
 *
 * Reads three integer side lengths and reports whether the triangle is
 * scalene, isosceles or equilateral.
 */

export const INT_MAX = 2147483647; // 32-bit signed integer limit

export const NOT_A_TRIANGLE = "Not a triangle";
export const INVALID_SIDE = "Not a triangle (invalid side length)";
export const INTEGERS_ONLY = "Error: integers only";
export const ALL_REQUIRED = "Error: all three values required";

/** Classify a triangle from three integer side lengths. */
export function classify(a: bigint, b: bigint, c: bigint): string {
  if (a <= 0n || b <= 0n || c <= 0n) return INVALID_SIDE;

  // Triangle inequality: the sum of any two sides must exceed the third.
  // BigInt cannot overflow, so very large values are handled safely.
  if (a + b <= c || a + c <= b || b + c <= a) return NOT_A_TRIANGLE;

  if (a === b && b === c) return "Equilateral triangle";
  if (a === b || a === c || b === c) return "Isosceles triangle";
  return "Scalene triangle";
}

/** Validate raw text input, then classify. */
export function classifyRaw(
  rawA: string | null | undefined,
  rawB: string | null | undefined,
  rawC: string | null | undefined,
): string {
  const raws = [rawA, rawB, rawC];

  // A missing value takes priority over a non-integer one.
  if (raws.some((r) => r === null || r === undefined || r.trim() === "")) {
    return ALL_REQUIRED;
  }

  const sides: bigint[] = [];
  for (const r of raws) {
    const text = (r as string).trim();
    if (!/^[+-]?\d+$/.test(text)) return INTEGERS_ONLY;
    sides.push(BigInt(text));
  }

  return classify(sides[0], sides[1], sides[2]);
}
