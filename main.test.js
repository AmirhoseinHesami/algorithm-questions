import { expect, test } from "vitest";

import findClosestIndex from "./question-1/findClosestIndex";
test("Find the closest element of the array based on the given target value", () => {
  expect(findClosestIndex([0, 0, 0], 1)).toBe(0);
  expect(findClosestIndex([-1, 2, 1, -4], 1)).toBe(2);
});

import getExcelColumn from "./question-2/getExcelColumn";
test("Returns Excel column name based on the given number", () => {
  expect(getExcelColumn(1)).toBe("A");
  expect(getExcelColumn(2)).toBe("B");
  expect(getExcelColumn(3)).toBe("C");
  expect(getExcelColumn(26)).toBe("Z");
  expect(getExcelColumn(27)).toBe("AA");
  expect(getExcelColumn(28)).toBe("AB");
  expect(getExcelColumn(701)).toBe("ZY");
  expect(getExcelColumn(702)).toBe("ZZ");
  expect(getExcelColumn(1_000_000_000)).toBe("CFDGSXL");
  expect(getExcelColumn(16384)).toBe("XFD"); // The last official column of Excel
});

import findMedianSortedArrays from "./question-3/findMedianSortedArrays";
test("Find the median of two sorted arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  expect(findMedianSortedArrays([2, 4, 7], [8, 10, 12])).toBe(7.5);
});
