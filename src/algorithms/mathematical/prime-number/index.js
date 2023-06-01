export function isPrimeNumber(numb) {
  if (numb < 2) {
    return false;
  }

  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log('isPrime', isPrimeNumber(4));
// console.log('isPrime', isPrimeNumber(5));
// console.log('isPrime', isPrimeNumber(6));