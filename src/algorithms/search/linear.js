
/**
 *  Linear sear 
 *  O(n^2) 
 */
export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
return -1;  
}

console.log(linearSearch([2, -14, 76, 4, 20], 4))
