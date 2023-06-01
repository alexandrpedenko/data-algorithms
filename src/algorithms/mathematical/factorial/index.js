
/**
 *  Factorial
 * 
 *  BogO = O(n)
 */

export function factorial(n) {
  let result = 1

  for ( let i = n; i >= 1; i-- ) {
    result *= i;
  }

  return result;
};

// recursive implementation
function recursiveFactorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

console.log('Factorial', factorial(3));
console.log('Factorial Recursive', recursiveFactorial(5));

