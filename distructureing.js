// 1. array destructuring

const numbers = [42, 65];

/* 
---------- 1st way -----------
const x = numbers[0];
const y = numbers[1];
console.log(x, y);
*/

const [x, y] = numbers;
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [first, second] = [90, 34]; //or
const [a, b] = boxify(90, 34);


console.log(boxify(90, 34));

const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar mastan']
}

const [firstMovie, secondMovie] = ['king khan', 'Dhakar mastan']; //for array serial must to maintain 

// object destructuring 
const { name, age } = { name: 'alu', age: 14 };
const { name1, age1 } = { id: 2, name1: 'alu', salary: 12343, age1: 14 }; //serial is not mandatory for object.


const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}


const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;

// use ( ? ) for optional caining if there is any object or not.