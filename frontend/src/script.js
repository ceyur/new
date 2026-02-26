const profile = document.querySelector(".profile");
const notes = document.querySelector(".notes");
const button_profile = document.querySelector(".nav_profil");
const button_notes = document.querySelector(".nav_notes");
const button_check = document.querySelector(".nav_check");
const button_charts = document.querySelector(".nav_charts");

function del () {
    profile.style.display = "none";
    notes.style.display = "none";
    // check.style.display = "none";
    // charts.style.display = "none";
}

button_profile.onclick = () => {
    del();
    profile.style.display = "block";
}
button_notes.onclick = () => {
    del();
    notes.style.display = "block";
}
button_check.onclick = () => {
    del();
    check.style.display = "block";
}
button_charts.onclick = () => {
    del();
    charts.style.display = "block";
}