const technologyData = [
  { name: "Довгий меч", imgSrc: "/imgs/mainPage/longsword.png" },
  { name: "Меч", imgSrc: "/imgs/mainPage/sword.png" },
  { name: "Еспада", imgSrc: "/imgs/mainPage/espada.png" },
  { name: "Шабля", imgSrc: "/imgs/mainPage/shablya.png" },
  { name: "Спис", imgSrc: "/imgs/mainPage/spear.png" },
  { name: "Бій без зброї", imgSrc: "/imgs/mainPage/unarmed.png" },
];

const technologyList = document.querySelector(
  ".about-technology_technology-list",
);
const cardsHtml = technologyData.map(
  (el) =>
    `<li class="technology-list_el" >
      <img src="${el.imgSrc}" alt="Демонстрація ${el.name}" />
      <h4 class="el-title">
      ${el.name}
      </h4>
    </li>`,
);

technologyList.innerHTML = cardsHtml.join(" ");
