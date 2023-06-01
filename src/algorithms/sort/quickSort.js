
/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for ( let i = 0; i < arr.length - 1; i++ ) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log('Quick Sort', quickSort([2, -14, 76, 4, 20])); 