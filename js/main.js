const viewBurgerMenuButton = document.querySelector(".view-burger-menu-button");
const closeBurgerMenuButton = document.querySelector(".close-burger-menu-button");
const navMenu = document.querySelector(".header-nav__list");

viewBurgerMenuButton.addEventListener("click", () => {
    navMenu.style.display = "flex";
    viewBurgerMenuButton.style.display = "none";
    closeBurgerMenuButton.style.display = "block";
});

closeBurgerMenuButton.addEventListener("click", () => {
    navMenu.style.display = "";
    viewBurgerMenuButton.style.display = "block";
    closeBurgerMenuButton.style.display = "none";
})