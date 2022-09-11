// How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 6 basic condition: >, <, ===, !==, <= , >= 
// multiple conditon : && and ||

if (fatherName === 'arnold' || 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array declare
//  index, 
// length, push

const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = number[i];
    console.log(number);
}

// function
function mutiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = mutiply(35, 78);


// 6. object
//  3 ways to access property by name

const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar mastan']


}

const myVariable = 'age';
//direct by property 
console.log(student.age);
// access via property name sting.
console.log(student['age']);
// access via property name in a variable
console.log(student[myVariable]); 
