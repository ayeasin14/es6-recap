const numbers = [89, 35, 98, 12];
const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar mastan']
}

// 1. template string 
const about = `My name is ${student.name} age of ${student.age} has number ${number[2]} also liked movies ${student.movies[0]}`;

console.log(about);

// 2 arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator

// create a new array (copy an array)
const newNumbers = [...numbers];
//  create a new array from an older array and add a new element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);