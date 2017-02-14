visits = localStorage.getItem("visits");
if(visits == null) {
	visits = 1;
	localStorage.setItem("visits", visits);
} else {
	visits = parseInt(visits);
	visits += 1;
	localStorage.setItem("visits", visits);
}

document.getElementById('visits').innerHTML = visits;

theme = localStorage.getItem("theme");
if(theme == null || theme == "day") {
	theme = "day";
	document.body.setAttribute('class', 'day-theme');
} else {
	document.body.setAttribute('class', 'night-theme');
}

function changeTheme() {
    theme = localStorage.getItem("theme");
	if(theme == null || theme == "day") {
		theme = "night";
		document.body.setAttribute('class', 'night-theme');
		localStorage.setItem("theme", theme);
	} else {
		theme = "day";
		document.body.setAttribute('class', 'day-theme');
		localStorage.setItem("theme", theme);
	}
}