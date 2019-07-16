//console.warn("Hello World"); 
/*
const name = "John";
const age = 30;
const isCool = false;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

//concat
//console.log("My name is" + name + "and I am" + age);


//template string
console.log(`My name is ${name} and I am ${age}`);
*/
/*
const s = "Hello world!";

console.log(s.substring(0,5).toUpperCase());
*/
/*
const numbers = new Array(1,2,3,4,5); //'new' is a constructor
const fruits = ['apples', 'oranges', 'pears'];

fruits.push('mangos');

fruits.unshift('strawberry');

console.log(Array.isArray(numbers));

console.log(fruits.indexOf('apples'));

console.log(fruits);

*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ['Music', 'driving', 'sports'],
    address: {
        street: '5860 W Brookdale Dr.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.address.city);

for(let i = 0; i < 10; i++){
    console.log(i); 
}
