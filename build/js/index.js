"use strict";
// const btn = document.getElementById('btn');
// // Non-Null Assertion Operator  '!'  TypeScript Considers it to be not Null
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.querySelector('form');
const list = document.getElementById('list');
// //  Another Syntax
// (<HTMLInputElement>input).value;
const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = input.value;
    const newLi = document.createElement('li');
    newLi.append(newItem);
    list.append(newLi);
    input.value = '';
};
form.addEventListener('submit', handleSubmit);
// // Type Assertions
const mystery = 'Hello';
const charLength = mystery.length;
console.log(charLength);
console.log(mystery); // Still the Type Remains Unknown as Declared Before
