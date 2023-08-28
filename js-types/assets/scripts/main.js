let myName = "steen hjalmar larsen";

// input felt DOM
const inputDOM = document.querySelector("#types-text-input");
// Show result in DOM
const resultDOM = document.querySelector("#types-result-text");

function showType(text, resultDOM) {
	resultDOM.innerHTML = text;
}

//
let a_undefined; // undefined
let b_undefined = undefined; // undefined

const type = typeof b_undefined;

showType(type, resultDOM);

// const t2 = 2;
// console.log(typeof parseFloat(t1));
// let t3 = t1 + t2;
// console.log(t3);
