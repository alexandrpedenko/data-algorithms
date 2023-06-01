
/**
 *  Fibonacci sequence
 * 
 *  BogO = O(n)
 */

export function fibonacciSequence(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result;
};

console.log('Fibonacci', fibonacciSequence(5));

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log('Recursive Fibonacci', recursiveFibonacci(6));