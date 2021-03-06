let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothing: undefined = undefined;

// Built in objects
const now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2];

// Classes
class Car {}
const car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line
// and initalizate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let nums = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numAboveZero = nums[i];
  }
}
