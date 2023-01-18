// const btn = document.getElementById('btn');

// // Non-Null Assertion Operator  '!'  TypeScript Considers it to be not Null
const btn = document.getElementById('btn')!;
const input = document.getElementById('input')! as HTMLInputElement;

//  Another Syntax

(<HTMLInputElement>input).value;

btn.addEventListener('click', function () {
	alert(input.value);
	input.value = '';
});

// // Type Assertions

const mystery: unknown = 'Hello';

const charLength = (mystery as string).length;

console.log(charLength);
console.log(mystery); // Still the Type Remains Unknown as Declared Before
