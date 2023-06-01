
/**
 * Insertion sort
 * BigO = O(n^2)
 */
export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let indexOfSorted = i - 1;

    while ( indexOfSorted >= 0 && arr[indexOfSorted] > numberToInsert ) {
      arr[indexOfSorted + 1] = arr[indexOfSorted];
      indexOfSorted = indexOfSorted - 1;
    }
    
    arr[indexOfSorted + 1] = numberToInsert;
  }

  return arr;
}

console.log('Insertion Sort', insertionSort([2, -14, 76, 4, 20])); 