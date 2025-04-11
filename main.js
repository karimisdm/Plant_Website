document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        if (navMenu.style.left === "0%") {
            navMenu.style.left = "-100%";
        } else {
            navMenu.style.left = "37%";
            navMenu.style.top="30%";
        }
    });
});