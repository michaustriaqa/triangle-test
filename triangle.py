"""Reference implementation of the triangle classifier.

Reads three integer side lengths from an input dialog (or the console as a
fallback) and displays whether the triangle is scalene, isosceles or
equilateral.
"""

INT_MAX = 2**31 - 1  # 32-bit signed integer limit used by the exam's data

NOT_A_TRIANGLE = "Not a triangle"
INVALID_SIDE = "Not a triangle (invalid side length)"
INTEGERS_ONLY = "Error: integers only"
ALL_REQUIRED = "Error: all three values required"


def parse_side(raw):
    """Return an int for a valid integer string, or raise ValueError."""
    if raw is None or str(raw).strip() == "":
        raise ValueError(ALL_REQUIRED)
    try:
        return int(str(raw).strip())
    except ValueError:
        raise ValueError(INTEGERS_ONLY)


def classify(a, b, c):
    """Classify a triangle from three integer side lengths."""
    if a <= 0 or b <= 0 or c <= 0:
        return INVALID_SIDE
    # Triangle inequality: the sum of any two sides must exceed the third.
    # Python ints do not overflow, so large values are safe here.
    if a + b <= c or a + c <= b or b + c <= a:
        return NOT_A_TRIANGLE
    if a == b == c:
        return "Equilateral triangle"
    if a == b or a == c or b == c:
        return "Isosceles triangle"
    return "Scalene triangle"


def classify_raw(raw_a, raw_b, raw_c):
    """Validate raw text input, then classify."""
    # A missing value takes priority over a non-integer one.
    raws = [raw_a, raw_b, raw_c]
    if any(r is None or str(r).strip() == "" for r in raws):
        return ALL_REQUIRED
    try:
        sides = [parse_side(r) for r in raws]
    except ValueError as err:
        return str(err)
    return classify(*sides)


def main():
    try:
        import tkinter as tk
        from tkinter import simpledialog, messagebox

        root = tk.Tk()
        root.withdraw()
        values = []
        for name in "ABC":
            v = simpledialog.askstring("Triangle", f"Enter side {name}:")
            if v is None:  # dialog cancelled
                return
            values.append(v)
        messagebox.showinfo("Result", classify_raw(*values))
    except ImportError:
        values = [input(f"Enter side {n}: ") for n in "ABC"]
        print(classify_raw(*values))


if __name__ == "__main__":
    main()
