// Task 1
const xor = (a, b) => (a === b ? false : true);
xor(true, true);

// Task 2
const hello = (name) =>
  name
    ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    : `Hello, World!`;
console.log(hello("joHn"));
// Task 3
const factorial = (n) => {
  if (n < 0 || n > 12) {
    throw new RangeError("Invalid number");
  }
  if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
};
factorial(13);
// Task 4
const findDifference = (a, b) =>
  Math.abs(
    [a.reduce((a, b) => a * b), b.reduce((a, b) => a * b)].reduce(
      (a, b) => a - b
    )
  );

findDifference([10, 2, 20], [25, 19, 27]);
// Task 5
// Task 6
// Task 7
// Task 8
// Task 9
// Task 10
// Task 11
// Task 12
// Task 13
// Task 14
// Task 15
