// Date in footer
let today = new Date();
let year = today.getFullYear();
document.getElementById("yearRightsReserved").innerHTML = year;

// Navbar show/hide
let navOpen = document.getElementById("navOpen");
let navBar = document.getElementById("navbar");
let navClose = document.getElementById("navClose");

navOpen.addEventListener("click", () => {
    navBar.classList.add("--show-navbar");
});

navClose.addEventListener("click", () => {
    navBar.classList.remove("--show-navbar");
});