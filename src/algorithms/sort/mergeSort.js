
/**
 * Merge sort
 */
export function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  console.log('1 mergeSortFunc', leftArr, rightArr);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  console.log('2 merge Start', leftArr, rightArr);
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  console.log('3 merge End', [...sortedArr, ...leftArr, ...rightArr]);

  return [...sortedArr, ...leftArr, ...rightArr];
}


console.log('Merge Sort', mergeSort([2, -14, 76, 4, 20])); 