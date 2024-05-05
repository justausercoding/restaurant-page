import './style.css';
import homePage from "./modules/home_page.js";
import menuPage from "./modules/menu_page.js";
import contactPage from "./modules/contact-page.js"

const content = document.querySelector("#content");
content.appendChild(homePage());
content.appendChild(menuPage());
content.appendChild(contactPage());
