/**
 * Check if a number is prime. Requires a positive integer argument.
 * @param {Number} num 
 * @returns true if the number is prime, else false.
 */
function isPrime(num) {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("Invalid argument passed to isPrime(). Argument must be non-negative integer.");
  }

  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Check if a number is an Angstrom number. Requires an integer argument.
 * @param {Number} num 
 * @returns true if the number is an Angstrom number, else false.
 */
function isAngstrom(num) {
  if (!Number.isInteger(num)) {
    throw new Error("Invalid argument passed to isAngstrom(). Argument must be an integer.");
  }

  let tempNum = num;
  let runningSum = 0;

  while (tempNum != 0) {
    let dig = Math.floor(tempNum % 10);
    runningSum += Math.pow(dig, 3);
    tempNum /= 10;
  }

  return runningSum === num;
}

console.log(isAngstrom(153));
console.log(isPrime(17));