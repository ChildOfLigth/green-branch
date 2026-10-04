const technologyData = [
  {
    name: "Довгий меч",
    imgSrc: "/imgs/mainPage/longsword.png",
    href: "/pages/equipment.html?type=long-sword",
  },
  {
    name: "Меч",
    imgSrc: "/imgs/mainPage/sword.png",
    href: "/pages/equipment.html?type=sword",
  },
  {
    name: "Еспада",
    imgSrc: "/imgs/mainPage/espada.png",
    href: "/pages/equipment.html?type=espada",
  },
  {
    name: "Шабля",
    imgSrc: "/imgs/mainPage/shablya.png",
    href: "/pages/equipment.html?type=saber",
  },
  {
    name: "Спис",
    imgSrc: "/imgs/mainPage/spear.png",
    href: "/pages/equipment.html?type=spear",
  },
  {
    name: "Бій без зброї",
    imgSrc: "/imgs/mainPage/unarmed.png",
    href: "/pages/equipment.html?type=unarmed",
  },
];

const technologyList = document.querySelector(
  ".about-technology_technology-list",
);
const cardsHtml = technologyData.map(
  (el) =>
    `<li>
      <a class="technology-list_el" href="${el.href}">
       <img src="${el.imgSrc}" alt="Демонстрація ${el.name}" />
      <h4 class="el-title">
      ${el.name}
      </h4>
      </a>
    </li>`,
);

const aboutBlock = document.querySelector(".main_about-us");

const changeHtmlFrAbout = () => {
  if(window.innerWidth > 640) {
    aboutBlock.innerHTML = `
     <div class="about-us_text-content">
          <h2 class="text-content_title">"Зелена гілка"</h2>
          <p class="text-content_info-text">
            — це школа старовинного фехтування. Старовинне фехтування є
            реконструкцією техніки традиційного використання зброї, яким воно
            було до перетворення фехтування на спорт.
          </p>
          <p class="text-content_addit-text">
            Школа використовує різні види клинкової та древкової зброї та
            додатково бій без озброєння.
          </p>
          <span class="text-content_marker-text"
            >Програма школи затверджена МОН України.</span
          >
        </div>

        <img
          src="/imgs/mainPage/about-us-block.png"
          class="about-us_decorative-el"
          alt="Photo of the team with the teacher"
      />
    `
  } else {
    aboutBlock.innerHTML = `
    <div class="about-us_content">
      <h2 class="content_title">"Зелена гілка"</h2>
      <p class="content_info-text">
       Школа старовинного фехтування — це реконструкція традиційного мистецтва бою.
      </p>

      <img 
        class="content_decorative-el"
        src="/imgs/mainPage/about-us-block.png" 
        alt="Photo of the team with the teacher" 
      />

      <p class="content_info-text">
      Школа використовує різні види клинкової та древкової зброї та додатково бій без озброєння. 
      Програма школи затверджена МОН України.
      </p>
    </div>
    `;
  }
}
changeHtmlFrAbout();
window.addEventListener("resize", changeHtmlFrAbout);

technologyList.innerHTML = cardsHtml.join(" ");

const trainingInfoBlock = document.querySelector(".training-info_info-text");

const changeTxtFrTrainingBlock = () => {
  if(window.innerWidth > 640) {
    trainingInfoBlock.innerHTML = `
    <p class="info-text_paragraph">
      Тренування на Оболоні/Героїв Дніпра проводимо для хлопаків та дівчат
      до 25-ти років, а група для дорослих, розташована на
      Березняках/Тельбіні, створена спеціально для чоловіків та жінок від
      25-ти років.
    </p>
    <span class="info-text_marker">
      Зацікавило? Тоді чекаємо на Вас!
    </span>
    `;
  } else {
    trainingInfoBlock.innerHTML = `
    <p class="info-text_paragraph">
      Тренування проводимо для хлопаків та дівчат до 25-ти років (Оболонь) та дорослих від 25-ти років (Березняки).
    </p>
    <span class="info-text_marker">
      Зацікавило? Тоді чекаємо на Вас!
    </span>
    `;
  };
};
changeTxtFrTrainingBlock();
window.addEventListener("resize", changeTxtFrTrainingBlock);