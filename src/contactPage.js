import { homePage } from "./homePage";
import { menuPage } from "./menuPage";

export function contactPage() {
  content.innerHTML = "";

  let header = document.createElement("div");
  header.classList.add("header");

  content.appendChild(header);

  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "Homeistic";
  header.appendChild(title);

  let ul = document.createElement("ul");

  let homeLink = document.createElement("li");
  homeLink.classList.add("homeLink");
  homeLink.innerHTML = `Home`;
  homeLink.addEventListener("click", homePage);

  let menuLink = document.createElement("li");
  menuLink.classList.add("menuLink");
  menuLink.innerHTML = `Menu`;
  menuLink.addEventListener("click", menuPage);

  let contactLink = document.createElement("li");
  contactLink.classList.add("contactLink");
  contactLink.innerHTML = `Contact`;

  header.appendChild(ul);

  ul.appendChild(homeLink);
  ul.appendChild(menuLink);
  ul.appendChild(contactLink);

  let main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  let mainBlocks = document.createElement("div");
  mainBlocks.classList.add("main-blocks");
  main.appendChild(mainBlocks);

  let h4 = document.createElement("h4");
  h4.innerHTML = `Contact Us`;
  mainBlocks.appendChild(h4);

  let dish = document.createElement("div");
  dish.classList.add("dish");
  dish.innerHTML = `heart@atelieramaro.pl`;
  mainBlocks.appendChild(dish);

  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `Copyright © 2022 Veanty`;

  content.appendChild(footer);
}
