//СКРИПТ УНИВЕРСАЛЬНЫЙ ДЛЯ КАРТИНОК/КАРТИНКА+ТЕКСТ

// подключение функции, которая позволяет увеличить картинку
// import scaleImage from "./funcScaleImage.js";

// ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ КАРТИНКА + ТЕКСТ
(() => {
  // массив входящих картинок (максимум 5-6 элементов),
  //поле title заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  const arrayOfElements = [
    {
      id: 1,
      name: "bear",
      src: "Images_1/sc-imgText/DO_3-4_21_5_1.jpg",
      title: "Медведь",
    },
    {
      id: 2,
      name: "fox",
      src: "Images_1/sc-imgText/DO_3-4_21_5_2.jpg",
      title: "Лиса",
    },
    {
      id: 3,
      name: "wolf",
      src: "Images_1/sc-imgText/DO_3-4_21_5_3.jpg",
      title: "Волк",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "bear";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-1");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoiceMarkup(
    arrayOfElements,
    rightAnswer,
    taskWrapper,
    imageFolder
  );
})();

// ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ ТОЛЬКО КАРТИНКА

(() => {
  // массив входящих картинок (максимум 5-6 элементов),
  //поле title заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  const arrayOfElements = [
    {
      id: 1,
      name: "bear",
      src: "Images_1/sc-imgText/DO_3-4_21_5_1.jpg",
      title: "",
    },
    {
      id: 2,
      name: "fox",
      src: "Images_1/sc-imgText/DO_3-4_21_5_2.jpg",
      title: "",
    },
    {
      id: 3,
      name: "wolf",
      src: "Images_1/sc-imgText/DO_3-4_21_5_3.jpg",
      title: "",
    },
    {
      id: 4,
      name: "squirrel",
      src: "Images_1/sc-imgText/DO_3-4_21_5_4.jpg",
      title: "",
    },
    {
      id: 5,
      name: "monkey",
      src: "Images_1/sc-imgText/DO_3-4_21_5_5.jpg",
      title: "",
    },
    {
      id: 6,
      name: "giraffe",
      src: "Images_1/sc-imgText/DO_3-4_21_5_6.jpg",
      title: "",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "bear";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-2");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoiceMarkup(
    arrayOfElements,
    rightAnswer,
    taskWrapper,
    imageFolder
  );
})();

function renderSingleChoiceMarkup(
  arrayOfElements,
  rightAnswer,
  taskWrapper,
  imageFolder
) {
  let currentActiveCard;

  const arrayLength = arrayOfElements.length;

  const listContainer = taskWrapper.querySelector(".singleChoiceList");
  const btnReset = taskWrapper.querySelector("#reset");
  const btnTest = taskWrapper.querySelector("#test");
  const controlsBox = taskWrapper.querySelector(".show-answer-controls");
  const infoBox = taskWrapper.querySelector(".show-answer-info");

  const cardsMarkup = createPictureCardsMarkup(
    shuffleCards([...arrayOfElements])
  );

  listContainer.insertAdjacentHTML("beforeend", cardsMarkup);

  listContainer.addEventListener("click", onListItemClick);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  function onBtnResetClick(e) {
    removeActiveCardClass(currentActiveCard);

    listContainer.addEventListener("click", onListItemClick);
    checkingAnswerReset();
    currentActiveCard = null;
  }

  function onBtnTestClick(e) {
    if (!currentActiveCard) {
      checkingAnswerNegative();
      return;
    }

    if (currentActiveCard && currentActiveCard.dataset.name === rightAnswer) {
      addRightChoiceClass(currentActiveCard);
      checkingAnswerPositive();
    } else {
      addWrongChoiceClass(currentActiveCard);
      checkingAnswerNegative();
    }
    listContainer.removeEventListener("click", onListItemClick);
  }

  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map(({ name, src, title }) => {
        const isTitle = title && `<h3 class='singleChoiceTitle'>${title}</h3>`;
        let widthItem;
        if (arrayLength > 4) {
          widthItem = `"width: calc(100% / 3 - 10px)"`;
        } else if (arrayLength < 4) {
          widthItem = `"width: calc(100% / ${arrayLength} - 10px)"`;
        } else if (arrayLength === 4) {
          widthItem = `"width: calc(100% / 2 - 10px)"`;
        }

        return `
                <li class="singleChoiceItem" data-name=${name} style=${widthItem}>
                  <div class="singleChoiceImageBox" style="background-image: url(${src})">
                      <div class='enlarge_picture' title='увеличить' style='background-image: url("${imageFolder}/expand.svg")'></div>
                  </div>
                  ${isTitle}
                </li>
              `;
      })
      .join("");
  }

  function onListItemClick(e) {
    let imgEl;
    if (e.target.classList.contains("enlarge_picture")) {
      scaleImage(e.target.parentElement, `${imageFolder}/close.png`);
    }
    const isImgEl =
      e.target.classList.contains("singleChoiceImageBox") ||
      e.target.classList.contains("singleChoiceTitle") ||
      e.target.classList.contains("singleChoiceItem");

    if (!isImgEl) {
      return;
    }

    if (
      e.target.classList.contains("singleChoiceImageBox") ||
      e.target.classList.contains("singleChoiceTitle")
    ) {
      imgEl = e.target.parentElement;
    } else imgEl = e.target;

    if (imgEl.classList.contains("singleChoicePictureCheck")) {
      imgEl.classList.remove("singleChoicePictureCheck");
    } else {
      removeActiveCardClass(currentActiveCard);
      addCheckClass(imgEl);
    }
  }

  function addCheckClass(card) {
    card.classList.add("singleChoicePictureCheck");
    currentActiveCard = getActiveCard();
  }
  function addRightChoiceClass(card) {
    card.classList.add("singleChoicePictureRight");
  }
  function addWrongChoiceClass(card) {
    card.classList.add("singleChoicePictureWrong");
  }

  function removeActiveCardClass(currentActiveCard) {
    if (currentActiveCard) {
      currentActiveCard.classList.remove("singleChoicePictureCheck");

      if (currentActiveCard.classList.contains("singleChoicePictureWrong")) {
        currentActiveCard.classList.remove("singleChoicePictureWrong");
      }
      if (currentActiveCard.classList.contains("singleChoicePictureRight")) {
        currentActiveCard.classList.remove("singleChoicePictureRight");
      }
    }
  }

  function getActiveCard() {
    return taskWrapper.querySelector(
      ".singleChoiceItem.singleChoicePictureCheck"
    );
  }

  function checkingAnswerPositive() {
    controlsBox.style.backgroundColor = "lightgreen";
    infoBox.textContent = "👍 Молодец!";
  }
  function checkingAnswerNegative() {
    controlsBox.style.backgroundColor = "lightpink";
    infoBox.textContent = "❌ Попробуй еще!";
  }
  function checkingAnswerReset() {
    controlsBox.style = "";
    infoBox.textContent = "";
  }

  function scaleImage(targetEl, imageUrl) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.bottom = 0;
    modal.style.right = 0;
    modal.style.background = "rgba(0,0,0,0.5)";
    modal.style.zIndex = 100;
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";

    let div = document.createElement("div");
    div.style.width = "50%";
    div.style.height = "80%";
    div.style.textAlign = "center";
    let img = document.createElement("img");
    if (targetEl.tagName === "IMG") {
      img.src = targetEl.src;
    } else {
      img.src = targetEl.style.backgroundImage.slice(5, -2);
    }
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";

    div.append(img);
    modal.append(div);
    let close = document.createElement("div");
    close.style.width = "25px";
    close.style.height = "25px";
    close.style.marginLeft = "calc(100% - 25px)";
    close.style.cursor = "pointer";

    close.style.backgroundImage = `url(${imageUrl})`;
    div.append(close);
    // document.body.style.overflow = "hidden";
    modal.addEventListener("pointerdown", () => {
      modal.remove();
      // document.body.style.overflow = "visible";
    });
    document.body.append(modal);
  }
}
