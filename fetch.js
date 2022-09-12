// 1. JSON

const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar mastan']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentObj);



// 2. fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys , values
const keys = Object.keys(student);
const values = Object.values(student);


// for 
const numbers = [12, 42, 53, 23, 53];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of use on array like object
// for in use on object

// add or remove from an array

const products = [
    { name: 'laptop', price: '234002', brand: 'lenovo', color: 'green' },
    { name: 'watch', price: '300000', brand: 'ray', color: 'white' },
    { name: 'phone', price: '20000', brand: 'iPhone', color: 'red' },
    { name: 'book', price: '5000000', brand: 'panjeree', color: 'black' },
    { name: 'sunglass', price: '200', brand: 'samsung', color: 'yellow' },
];


const newProduct = { name: 'book', price: '5000000', brand: 'panjeree', color: 'black' };

// copy products array and then add newProduct

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');

console.log(remaining);


