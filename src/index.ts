// const btn = document.getElementById('btn');

// // Non-Null Assertion Operator  '!'  TypeScript Considers it to be not Null
const btn = document.getElementById('btn')!;
const input = document.getElementById('input')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('list')!;

// //  Another Syntax

// (<HTMLInputElement>input).value;
const handleSubmit = (e: SubmitEvent) => {
	e.preventDefault();
	const newItem = input.value;
	const newLi = document.createElement('li');
	newLi.append(newItem);
	list.append(newLi);
	input.value = '';
};

form.addEventListener('submit', handleSubmit);

// // Type Assertions

const mystery: unknown = 'Hello';

const charLength = (mystery as string).length;

console.log(charLength);
console.log(mystery); // Still the Type Remains Unknown as Declared Before
