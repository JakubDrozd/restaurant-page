import photo1 from "./1.jpg";
import photo2 from "./2.jpg";
import photo3 from "./3.jpg";
import photo4 from "./4.jpg";
import photo5 from "./5.jpg";
import photo6 from "./6.jpg";

export function homePage() {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.classList.add("header");

  content.appendChild(header);

  const title = document.createElement("div");
  header.appendChild(title);

  const list = document.createElement("ul");
  const nav1 = document.createElement("li");
  const nav2 = document.createElement("li");
  const nav3 = document.createElement("li");
  nav1.classList.add("homeLink");
  nav2.classList.add("menuLink");
  nav3.classList.add("contactLink");

  header.appendChild(list);

  const main = document.createElement("div");
  main.classList.add("main");

  content.appendChild(main);

  const mainBlocks = document.createElement("div");
  mainBlocks.classList.add("main-blocks");

  main.appendChild(mainBlocks);

  const blockquote = document.createElement("blockquote");
  mainBlocks.appendChild(blockquote);
  blockquote.innerHTML = `"Excellent food. Menu is extensive and seasonal to a particularly
  high standard. Definitely fine dining. It can be expensive but worth
  it and they do different deals on different nights so it’s worth
  checking them out before you book. Highly recommended."
  <div class="sign">- Wojciech Modest Amaro</div>`;

  const mainBlocksHours = document.createElement("div");
  mainBlocksHours.classList.add("main-blocks", "hours");
  main.appendChild(mainBlocksHours);

  const h4InHours = document.createElement("h4");
  h4InHours.innerHTML = `~Hours~`;

  mainBlocksHours.appendChild(h4InHours);

  const day1 = document.createElement("div");
  day1.classList.add("day");
  day1.innerHTML = `Sunday: 8am - 8pm`;
  mainBlocksHours.appendChild(day1);

  const day2 = document.createElement("div");
  day2.classList.add("day");
  day2.innerHTML = `Monday: 6am - 6pm`;
  mainBlocksHours.appendChild(day2);

  const day3 = document.createElement("div");
  day3.classList.add("day");
  day3.innerHTML = `Tuesday: 6am - 6pm`;
  mainBlocksHours.appendChild(day3);

  const day4 = document.createElement("div");
  day4.classList.add("day");
  day4.innerHTML = `Wednesday: 6am - 6pm`;
  mainBlocksHours.appendChild(day4);

  const day5 = document.createElement("div");
  day5.classList.add("day");
  day5.innerHTML = `Thursday: 6am - 10pm`;
  mainBlocksHours.appendChild(day5);

  const day6 = document.createElement("div");
  day6.classList.add("day");
  day6.innerHTML = `Friday: 6am - 10pm`;
  mainBlocksHours.appendChild(day6);

  const day7 = document.createElement("div");
  day7.classList.add("day");
  day7.innerHTML = `Saturday: 8am - 10pm`;
  mainBlocksHours.appendChild(day7);

  const mainBlocksLocation = document.createElement("div");
  mainBlocksLocation.classList.add("main-blocks", "location");
  main.appendChild(mainBlocksLocation);

  const h4InLocation = document.createElement("h4");
  h4InLocation.innerHTML = `Location`;
}
