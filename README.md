# Triangle problem: test cases and automated tests

Solution to the triangle problem exam. The program reads three integer side
lengths and reports whether the triangle is scalene, isosceles or equilateral.

## Files
- `triangle.py`: reference implementation of the program under test. I wrote it
  so the tests have something to run against; it is not the company's program.
- `test_triangle.py`: all 29 test cases from the answer sheet as a parametrized
  pytest suite (TC01 to TC29).

## Run
```
pip install pytest
pytest -v
python triangle.py   # opens the input dialog
```

## Assumptions
- The exam does not define the message for invalid triangles, so "Not a
  triangle" is used. Change the constants in `triangle.py` if your spec differs.
- Decimal, non-numeric and blank input return an error message.
- Cancelling the input dialog exits without showing a message.
