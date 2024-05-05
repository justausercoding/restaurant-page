import './style.css';
import homePage from "./modules/home_page.js";
import menuPage from "./modules/menu_page.js";
import contactPage from "./modules/contact-page.js"

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".header__btn-home");
const menuBtn = document.querySelector(".header__btn-menu");
const contactBtn = document.querySelector(".header__btn-contact");

content.appendChild(homePage());

homeBtn.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(homePage());
})

menuBtn.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(menuPage());
})

contactBtn.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(contactPage());
})