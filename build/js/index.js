"use strict";
// const btn = document.getElementById('btn');
// // Non-Null Assertion Operator
const btn = document.getElementById('btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    alert('Clicked');
});
