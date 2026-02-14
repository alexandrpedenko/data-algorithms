export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export function binarySearchRecursive(
  arr: number[],
  target: number,
  leftIndex: number = 0,
  rightIndex: number = arr.length - 1
): number {
  if (leftIndex > rightIndex) {
    return -1;
  }

  const mid = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, leftIndex, mid - 1)
  }

  if (target > arr[mid]) {
    return binarySearchRecursive(arr, target, mid + 1, rightIndex)
  }


  return -1;
}