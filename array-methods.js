const products = [
    { name: 'laptop', price: '234002', brand: 'lenovo', color: 'green' },
    { name: 'watch', price: '300000', brand: 'ray', color: 'white' },
    { name: 'mobile', price: '20000', brand: 'iPhone', color: 'red' },
    { name: 'book', price: '5000000', brand: 'panjeree', color: 'black' },
    { name: 'sunglass', price: '200', brand: 'samsung', color: 'yellow' },
];


// map use for create a new array with some elements. its return an array with the element
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// forEach loop --- use for get a product from an array like object, and it's don't return anything.

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3. filter
/* filter give an array with the results */
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);


/* includes give that results which one includes the value */
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find
/* find give a first result of the search */


const special = products.find(product => product.name.includes('n'));
console.log(special)