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
const evenNumbers = (array, number) => {
  const newArr = array.filter((el) => el % 2 === 0);
  if (newArr.length < number) {
    return newArr;
  }
  return newArr.splice(newArr.length - number);
};
evenNumbers([49, 24, 30, -65, 88], 5);
// Task 6

const combineNames = (name, surname) => `${name} ${surname}`;
combineNames("Egor", "Yarovitsyn");

// Task 7

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 4]));

// Task 8
const adjacentElementsProduct = (array) => {
  let sub = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > sub) {
      sub = array[i] * array[i + 1];
    }
  }
  return sub;
};

adjacentElementsProduct([5, 1, 2, 3, 1, 4]);

const aadjacentElementsProduct = (array) => {
  const dedd = array
    .map((el, i) => el * array[i + 1])
    .splice(0, array.length - 1, -1);
  return Math.max(...dedd);
};

aadjacentElementsProduct([1, 5, 10, 9]);

// Task 9
// Task 10
// Task 11
// Task 12
// Task 13
// Task 14
// Task 15
