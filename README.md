# Triangle problem: test cases and automated tests

Solution to the triangle problem exam. The program reads three integer side
lengths and reports whether the triangle is scalene, isosceles or equilateral.

## Files
- `src/triangle.ts`: reference implementation of the program under test. I
  wrote it so the tests have something to run against; it is not the company's
  program.
- `src/index.ts`: command-line entry point that prompts for the three sides.
- `test/triangle.test.ts`: all 29 test cases from the answer sheet as a
  data-driven Vitest suite (TC1 to TC29).

## Run
```
npm install
npm test        # runs the 29 test cases
npm start       # prompts for sides A, B and C
```

## Assumptions
- The exam does not define the message for invalid triangles, so "Not a
  triangle" is used. Change the constants in `src/triangle.ts` if your spec
  differs.
- Decimal, non-numeric and blank input return an error message.
- Sides are parsed as `BigInt`, so values at the 32-bit integer limit cannot
  overflow when summed.
