var visits = localStorage.getItem("visits");
if(visits == null) {
  visits = 1;
  localStorage.setItem("visits", visits);
} else {
  visits = parseInt(visits);
  visits += 1;
  localStorage.setItem("visits", visits);
}

document.getElementById('visits').innerHTML = visits;

changeTheme("false")

var buttonElement = document.getElementById('change_theme');

buttonElement.addEventListener('click', function () {
  changeTheme("true");
});

function changeTheme(update) {
  var theme = localStorage.getItem("theme");
  if(theme == null || (theme == "night" && update == "false") || (theme == "day" && update == "true")) {
    theme = "night";
    document.body.setAttribute('class', 'night-theme');
  } else {
    theme = "day";
    document.body.setAttribute('class', 'day-theme');
  }
  if(update == "true") {
    localStorage.setItem("theme", theme);
  }
}
