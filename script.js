function switchTheme() {
	// // let menuItems = document.querySelectorAll('light');
	// const buttonTheme = document.getElementById("themeButton");
	// // const elementCard = document.querySelectorAll(".card");
	// const tableElemement = document.querySelectorAll(".table");
	// const btnElem = document.querySelectorAll(".btn");
	// const bgElem = document.querySelectorAll(".bg");
	// const dropdownEl = document.querySelectorAll(".dropdown");
	// // Create a NodeIterator to represent all elements in the document body
	// var ni = document.createNodeIterator(
	// 	document.body,
	// 	NodeFilter.SHOW_ELEMENT,
	// 	null,
	// 	false
	// );
	// // Loop forward through all nodes in the iterator
	// for (var e = ni.nextNode(); e != null; e = ni.nextNode()) {
	// 	// Do something with element e
	// 	console.log(e);
	// }

	// // console.log(elementCard);
	// // elementCard.forEach((element) => {
	// // 	element.classList.toggle("bg-dark");
	// // 	element.classList.toggle("text-white");
	// // 	element.classList.toggle("table-dark");
	// // });
	// tableElemement.forEach((element) => {
	// 	element.classList.toggle("table-dark");
	// });
	// btnElem.forEach((elem) => {
	// 	elem.classList.toggle("btn-dark");
	// });
	// bgElem.forEach((elem) => {
	// 	elem.classList.toggle("bg-dark");
	// });
	// const span = document.querySelector(".navbar", ".bg");
	// const classes = span.classList;
	// console.log(classes);
	// classes.replace(".navbar-light", ".navbar-dark");
	// classes.replace(".bg-light", ".bg-dark");
	const switcher = document.getElementById("themeSwitch");
	console.log(switcher);
	switcher?.addEventListener("click", () => {
		console.log("btn clicked");
		document.body.classList.toggle("dark");
	});
}

console.log(switchTheme());
