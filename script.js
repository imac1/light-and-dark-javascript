function switchTheme() {
	// let menuItems = document.querySelectorAll('light');
	const buttonTheme = document.getElementById("themeButton");
	const elementCard = document.querySelectorAll(".card");
	console.log(elementCard);
	elementCard.forEach((element) => {
		element.classList.toggle("bg-dark");
		element.classList.toggle("text-white");
	});
}

console.log(changeTheme());
