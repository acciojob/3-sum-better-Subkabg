function threeSum(arr, target) {
  // Sort the array
  arr.sort((a, b) => a - b);

  // Initialize variables to store the closest sum and its difference from the target
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    // Fix the first element and use two pointers approach for the remaining elements
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const currentDiff = Math.abs(target - currentSum);

      // Update closestSum and minDiff if the current sum is closer to the target
      if (currentDiff < minDiff) {
        closestSum = currentSum;
        minDiff = currentDiff;
      }

      // Adjust pointers based on the current sum
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;

