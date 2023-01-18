"use strict";
// const btn = document.getElementById('btn');
// // Non-Null Assertion Operator  '!'  TypeScript Considers it to be not Null
const btn = document.getElementById('btn');
const input = document.getElementById('input');
//  Another Syntax
input.value;
btn.addEventListener('click', function () {
    alert(input.value);
    input.value = '';
});
// // Type Assertions
const mystery = 'Hello';
const charLength = mystery.length;
console.log(charLength);
console.log(mystery); // Still the Type Remains Unknown as Declared Before
