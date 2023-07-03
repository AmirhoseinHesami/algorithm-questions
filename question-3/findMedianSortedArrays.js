export default function findMedianSortedArrays(arr1, arr2) {
  // Validate array lengths
  if (
    arr1.length < 0 ||
    arr1.length > 1000 ||
    arr2.length < 0 ||
    arr2.length > 1000
  ) {
    throw new Error("Array lengths should be between 0 and 1000.");
  }

  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = merged.length;
  const mid = Math.floor(length / 2);

  // Validate total length of both arrays
  if (length < 1 || length > 2000) {
    throw new Error(
      "Total length of both arrays should be between 1 and 2000."
    );
  }

  // Validate element values
  for (const num of merged) {
    if (num < -1000000 || num > 1000000) {
      throw new Error(
        "Array elements should have a value between -1000000 and 1000000."
      );
    }
  }

  if (length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
