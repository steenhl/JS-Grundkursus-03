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

showInput(inputDOM, resultDOM);
