'use strict';

// Array


// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// 3. Looping over an array
//print all fruits

for (let fruit of fruits){
    console.log(fruit);
}

// another way
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// another way c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('🍓', '🍋');
console.log(fruits); 

// shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits); 

/*NOTE
shift, unshift are slower than pop, push
*/

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1);
console.log(fruits); // ['🍎']

fruits.push('🍌', '🍓', '🍑', '🍋');
fruits.splice(1, 1);
console.log(fruits); // ['🍎', '🍓', '🍑', '🍋']

fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);    // ['🍎', '🍏', '🍉', '🍑', '🍋']


// concat: combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['🍎', '🍏', '🍉', '🍑', '🍋', '🍐', '🥥']


// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🍐')); // false
console.log(fruits.indexOf('🍐'));  // -1'

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
