/**
 * Bubble sort
 * Big O = O(n^2) 
 */
export function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log('Bubble Sort', bubbleSort([2, -14, 76, 4, 20])); 