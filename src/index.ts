// const btn = document.getElementById('btn');

// // Non-Null Assertion Operator
const btn = document.getElementById('btn')!;

btn?.addEventListener('click', function () {
	alert('Clicked');
});