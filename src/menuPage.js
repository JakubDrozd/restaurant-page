import photo1 from "./1.jpg";
import photo2 from "./2.jpg";
import photo3 from "./3.jpg";
import photo4 from "./4.jpg";
import photo5 from "./5.jpg";
import photo6 from "./6.jpg";
import { homePage } from "./homePage";
import { contactPage } from "./contactPage";

export function menuPage() {
  let ph1 = new Image();
  ph1.src = photo1;

  let ph2 = new Image();
  ph2.src = photo2;

  let ph3 = new Image();
  ph3.src = photo3;

  let ph4 = new Image();
  ph4.src = photo4;

  let ph5 = new Image();
  ph5.src = photo5;

  let ph6 = new Image();
  ph6.src = photo6;

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

  let contactLink = document.createElement("li");
  contactLink.classList.add("contactLink");
  contactLink.innerHTML = `Contact`;
  contactLink.addEventListener("click", contactPage);

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

  let menuH4 = document.createElement("h4");
  menuH4.innerHTML = `Menu`;
  mainBlocks.appendChild(menuH4);

  let menuH3 = document.createElement("h3");
  menuH3.innerHTML = `CALENDAR OF NATURE / 29<sup>th</sup> WEEK`;
  mainBlocks.appendChild(menuH3);

  let menuH32nd = document.createElement("h3");
  menuH32nd.innerHTML = `8 MOMENTS`;
  mainBlocks.appendChild(menuH32nd);

  let hr = document.createElement("hr");
  mainBlocks.appendChild(hr);

  let dishes = document.createElement("div");
  dishes.classList.add("dishes");
  mainBlocks.appendChild(dishes);

  let dish1 = document.createElement("div");
  dish1.classList.add("dish");
  dish1.innerHTML = `Potato chip with drops of vodka gel`;
  dish1.appendChild(ph1);
  dishes.appendChild(dish1);

  let dish2 = document.createElement("div");
  dish2.classList.add("dish");
  dish2.innerHTML = `Crispy cucumber with cress seeds and black cumin flowers filled
  eel mousse`;
  dish2.appendChild(ph2);
  dishes.appendChild(dish2);

  let dish3 = document.createElement("div");
  dish3.classList.add("dish");
  dish3.innerHTML = `Nasturtium flower with cherry`;
  dish3.appendChild(ph3);
  dishes.appendChild(dish3);

  let dish4 = document.createElement("div");
  dish4.classList.add("dish");
  dish4.innerHTML = `Bread with black cumin and roasted hay, croissant with caraway
  seeds, sweet roll with thyme; served with butter and smoked salt`;
  dish4.appendChild(ph4);
  dishes.appendChild(dish4);

  let dish5 = document.createElement("div");
  dish5.classList.add("dish");
  dish5.innerHTML = `Carbonated tomatoes, fried foie gras, lemon verbena and a delicate decoction of apple with rosemary, with a wonderful lemon verbena aftertaste`;
  dish5.appendChild(ph5);
  dishes.appendChild(dish5);

  let dish6 = document.createElement("div");
  dish6.classList.add("dish");
  dish6.innerHTML = `Rabbit kidneys and broad beans in asparagus and chervil emulsion topped with nasturtium leaves, plus a bit of lavender powder`;
  dish6.appendChild(ph6);
  dishes.appendChild(dish6);

  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `Copyright © 2022 Veanty`;

  content.appendChild(footer);
}
