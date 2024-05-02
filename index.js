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
const nbYear = (p0, percent, aug, p) => {
  let year = 0;
  let res = 0;
  for (let i = 0; i < 20; i++) {
    year += 1;
    if (res < p) {
      res += p0 + p0 * (percent / 100) + aug;
    } else {
      return year;
    }
  }
  return year;
};
console.log(nbYear(1500, 5, 100, 5000));
// Task 10
const reverseLetter = (str) =>
  str
    .replace(/[^a-z]/gim, "")
    .split("")
    .reverse()
    .join("");
reverseLetter("12ddas__wewd++");
// Task 11
const SequenceSum = (count) => {
  let s = 0;
  let res = 0;
  if (count < 0) {
    return `${count}<${res}`;
  }
  if (count === 0) {
    return "0=0";
  }

  for (let i = 1; i <= count; i++) {
    res += i;
    s = `${s}+${i}`;
  }

  return `${s} = ${res}`;
};
SequenceSum(0);
// Task 12
const leastLarger = (array, i) => {
  let d = array.filter((el) => array[i] < el);
  let min = Math.min(...d);
  return array.findIndex((el) => el === min);
};
leastLarger([1, 3, 5, 2, 4], 0);
// Task 13

class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

const declareWinner = (fighter1, fighter2, firstAttacker) => {
  let oneAtt = 0;
  let twoAtt = 0;
  switch (fighter1.health > 0 && fighter2.health > 0) {
    case fighter1.name === firstAttacker:
      oneAtt += 1;
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
    case fighter2.name === firstAttacker:
      twoAtt += 1;
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
    case oneAtt > twoAtt:
      twoAtt += 1;
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
    case twoAtt > oneAtt:
      oneAtt += 1;
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
    case twoAtt === oneAtt:
  }
  return [fighter1.health, fighter2.health];
};

console.log(
  declareWinner(new Fighter("Egor", 30, 3), new Fighter("Vlad", 20, 5), "Vlad")
);

// const vowelIndices = (word) => {
//  return word.replace(/[^aoeiuy]/gmi, '')

// }
// console.log(vowelIndices('super'));
// const vowelIndices = (word) => {
//  let fff =  word.replace(/[^aoeiuy]/gmi, '').split('')
//  return word.split('').filter((el, i) => console.log( el) === console.log(fff[i]))
// }
//  console.log(vowelIndices('super'));
// const vowelIndices = (word) => {
//   let ind = []
//     for(let i = 0; i < word.length; i++) {
//       if(word[i] === 'u' || word[i] === 'e' || word[i] === 'a' || word[i] === 'i' || word[i] === 'y' || word[i] === 'o' ) {
//         ind.push(i+1)
//       }
//     }
//     return ind
// }
// vowelIndices('supercalifragilisticexpialidocious')

const vowelIndices = (word) => {
  let ind = [];
  word
    .split("")
    .filter((el, i) =>
      el === "u" ||
      el === "e" ||
      el === "a" ||
      el === "i" ||
      el === "y" ||
      el === "o"
        ? ind.push(i + 1)
        : ""
    );
  return ind;
};
vowelIndices("apple");
// Task 14

// Task 15
