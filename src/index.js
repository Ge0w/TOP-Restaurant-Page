import { contact } from "../dist/js/contact";
import { menu } from "../dist/js/menu";
import { aboutPage } from "../dist/js/about-page";
import { header } from "../dist/js/header";

// Initial Load
const content = document.querySelector("#content");
content.append(header());
content.append(aboutPage());

// Tab Button Functions
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");
const menuBtn = document.querySelector("#menuBtn");

aboutBtn.addEventListener("click", () => {
  content.childNodes[2].remove();
  content.append(aboutPage());
});

contactBtn.addEventListener("click", () => {
  content.childNodes[2].remove();
  content.append(contact());
});

menuBtn.addEventListener("click", () => {
  content.childNodes[2].remove();
  content.append(menu());
});
