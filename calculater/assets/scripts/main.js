let myName = "steen hjalmar larsen";

// input felt DOM
const inputDOM = document.querySelector("#calc-text-input");
// Show result in DOM
const resultDOM = document.querySelector("#calc-result-text");

// inputDOM, resultDOM
function showInput(inputDOM, resultDOM) {
	inputDOM.addEventListener("change", (event) => {
		const curResult = parseFloat(event.target.value);
		resultDOM.innerHTML = curResult;
	});
}

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
