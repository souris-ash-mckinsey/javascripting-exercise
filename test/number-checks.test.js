const numberChecks = require("../solutions/classroom-exercises/number-checks")

// isPrime: Prime number tests

test('0 should not be prime', () => {
  expect(numberChecks.isPrime(0)).toBe(false)
})

test('1 should not be prime', () => {
  expect(numberChecks.isPrime(1)).toBe(false)
})

test('10 should not be prime', () => {
  expect(numberChecks.isPrime(10)).toBe(false)
})

test('3 should be prime', () => {
  expect(numberChecks.isPrime(3)).toBe(true)
})

// isArmstrong: Armstrong number tests

test('371 is an Armstrong number', () => {
  expect(numberChecks.isArmstrong(371)).toBe(true)
})

test('370 is an Armstrong number', () => {
  expect(numberChecks.isArmstrong(370)).toBe(true)
})

test('100 is not an Armstrong number', () => {
  expect(numberChecks.isArmstrong(100)).toBe(false)
})

test('101 is not an Armstrong number', () => {
  expect(numberChecks.isArmstrong(100)).toBe(false)
})
