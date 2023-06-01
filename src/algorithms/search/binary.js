
/**
 *  ! Binary search works only with sorted array !
 *  O(log n)
 */
export function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

/**
 * Recursive solution 
 */
export function binaryRecursiveSearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }

  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log('Binary search', binarySearch([-12, -10, 2, 4, 10, 14], 14));
console.log('Binary search', binaryRecursiveSearch([-12, -10, 3, 2, 10, 14], -10));
