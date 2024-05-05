import './style.css';
import homePage from "./modules/home_page.js";
import menuPage from "./modules/menu_page.js";

const content = document.querySelector("#content");
content.appendChild(homePage());
content.appendChild(menuPage())


