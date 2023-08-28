import { helper } from "./helper.js";

// DOM point to insert the navigation
const mainNavSection = document.querySelector("#main-nav-section");

async function getData() {
	// fetch json data
	const response = await fetch("./assets/data/mainData.json");
	const jsonData = await response.json();
	// build the nav list
	// HTML string nav
	const navDomStart = jsonData.nav.navDomStart;
	const navDomEnd = jsonData.nav.navDomEnd;
	// HTML string ul
	const ulDomStart = jsonData.ul.ulDomStart;
	const ulDomEnd = jsonData.ul.ulDomEnd;

	// HTML string of list items
	const allListItems = jsonData.navList.reduce((accumulator, currentValue) => accumulator.item + currentValue.item);
	const nav = navDomStart + ulDomStart + allListItems + ulDomEnd + navDomEnd;
	// helper class => coverting html string to DOM object
	const thisHelper = new helper();
	const domNav = thisHelper.htmlToElement(nav);
	// insert the navigation into DOM
	mainNavSection.insertAdjacentElement("afterbegin", domNav);
}

// domName
getData();
