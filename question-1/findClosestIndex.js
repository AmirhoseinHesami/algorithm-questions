export default function findClosestIndex(array, target) {
  if (
    array.length < 3 ||
    array.length > 500 ||
    target < -10000 ||
    target > 10000
  ) {
    throw new Error(
      "Invalid input! Array length should be between 3 and 500, and target value should be between -10000 and 10000."
    );
  }

  let closestDiff = Math.abs(target - array[0]);
  let closestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    const diff = Math.abs(target - array[i]);

    if (diff < closestDiff) {
      closestDiff = diff;
      closestIndex = i;
    }
  }

  return closestIndex;
}
