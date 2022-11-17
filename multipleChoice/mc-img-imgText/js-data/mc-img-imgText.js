//СКРИПТ УНИВЕРСАЛЬНЫЙ ДЛЯ КАРТИНОК/КАРТИНКА+ТЕКСТ

// подключение функции, которая позволяет увеличить картинку
// import scaleImage from "./funcScaleImage.js";

(() => {
  // массив входящих картинок (минимум 4, максимум 15 элементов),
  //поле title заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  const arrayOfElements = [
    {
      id: 1,
      name: "bus",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_1.png",
      tag: "true",
      title: "Автобус",
    },
    {
      id: 2,
      name: "ambulance",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_2.jpg",
      tag: "false",
      title: "Скорая помощь",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "Автомобиль",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "Поезд",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "true";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-1");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoiceMarkup(
    arrayOfElements,
    rightAnswer,
    taskWrapper,
    imageFolder
  );
})();

(() => {
  // массив входящих картинок (минимум 4, максимум 15 элементов),
  //поле title заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  //в поле tag заполняется принадлежность к правильному/неправильному ответу

  const arrayOfElements = [
    {
      id: 1,
      name: "bus",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_1.png",
      tag: "true",
      title: "",
    },
    {
      id: 2,
      name: "ambulance",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_2.jpg",
      tag: "false",
      title: "",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "",
    },
    {
      id: 1,
      name: "bus",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_1.png",
      tag: "true",
      title: "",
    },
    {
      id: 2,
      name: "ambulance",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_2.jpg",
      tag: "false",
      title: "",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "true";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-3");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoiceMarkup(
    arrayOfElements,
    rightAnswer,
    taskWrapper,
    imageFolder
  );
})();
(() => {
  // массив входящих картинок (максимум 15 элементов),
  //поле title заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  const arrayOfElements = [
    {
      id: 1,
      name: "bus",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_1.png",
      tag: "true",
      title: "Автобус",
    },
    {
      id: 2,
      name: "ambulance",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_2.jpg",
      tag: "false",
      title: "Скорая помощь",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "Автомобиль",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "Поезд",
    },
    {
      id: 1,
      name: "bus",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_1.png",
      tag: "true",
      title: "Автобус",
    },
    {
      id: 2,
      name: "ambulance",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_2.jpg",
      tag: "false",
      title: "Скорая помощь",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "Автомобиль",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "Поезд",
    },
    {
      id: 1,
      name: "bus",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_1.png",
      tag: "true",
      title: "Автобус",
    },
    {
      id: 2,
      name: "ambulance",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_2.jpg",
      tag: "false",
      title: "Скорая помощь",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "Автомобиль",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "Поезд",
    },
    {
      id: 3,
      name: "car",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_3.jpg",
      tag: "false",
      title: "Автомобиль",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "Поезд",
    },
    {
      id: 4,
      name: "train",
      src: "Images_1/mc-img-imgText/DO_3-4_8_1_4.jpg",
      tag: "true",
      title: "Поезд",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "true";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-2");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoiceMarkup(
    arrayOfElements,
    rightAnswer,
    taskWrapper,
    imageFolder
  );
})();

function renderMultipleChoiceMarkup(
  arrayOfElements,
  rightAnswer,
  taskWrapper,
  imageFolder
) {
  const arrayLength = arrayOfElements.length;
  const rightAnswersLength = arrayOfElements.filter(
    (el) => el.tag === rightAnswer
  ).length;

  const listContainer = taskWrapper.querySelector(".multiChoicePictureList");
  const btnReset = taskWrapper.querySelector("#reset");
  const btnTest = taskWrapper.querySelector("#test");

  const controlsBox = taskWrapper.querySelector(".show-answer-controls");

  const infoBox = taskWrapper.querySelector(".show-answer-info");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  listContainer.addEventListener("click", matchingHandler);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

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
      .map((item) => {
        const isTitle =
          item.title && `<h3 class='multiChoiceTitle'>${item.title}</h3>`;

        let widthItem;
        let heightItem;
        if (arrayLength > 10) {
          widthItem = `"width: calc(100% / 5 - 10px)"`;
          heightItem = "multiChoicePictureCard_small";
        } else if (arrayLength > 8 && arrayLength <= 10) {
          widthItem = `"width: calc(100% / 5 - 20px)"`;
          heightItem = "multiChoicePictureCard_middle";
        } else if (arrayLength > 6 && arrayLength <= 8) {
          widthItem = `"width: calc(100% / 4 - 20px)"`;
          heightItem = "multiChoicePictureCard_middle";
        } else if (arrayLength > 4 && arrayLength <= 6) {
          widthItem = `"width: calc(100% / 3 - 20px)"`;
          heightItem = "multiChoicePictureCard_middle";
        } else if (arrayLength === 4) {
          widthItem = `"width: calc(100% / 2 - 10px)"`;
          heightItem = "multiChoicePictureCard_big";
        }

        return `<div class="multiChoicePictureCard ${heightItem}" data=${item.tag} style=${widthItem}>
                    <div class="multiChoicePicture" style="background-image: url(${item.src})">
                        <div class="enlarge_picture" title="увеличить" style='background-image: url("${imageFolder}/expand.svg")'></div>
                    </div>
                    ${isTitle}
                    </div>
                    `;
      })
      .join("");
  }

  function onBtnResetClick() {
    [...listContainer.children].forEach((item) => {
      let randomPos = Math.floor(Math.random() * 12);
      item.style.order = randomPos;
      removeCheckClasses(item);
    });
    checkingAnswerReset();
    listContainer.addEventListener("click", matchingHandler);
  }

  function onBtnTestClick() {
    let winCount = 0;

    const selectedItems = [...listContainer.children].filter((el) =>
      el.classList.contains("multiChoicePictureCardActive")
    );

    selectedItems.forEach((item) => {
      if (item.attributes.getNamedItem("data").value === rightAnswer) {
        winCount += 1;
        addRightChoiceClass(item);
      } else {
        winCount -= 1;
        addWrongChoiceClass(item);
      }
    });
    if (winCount === rightAnswersLength) {
      checkingAnswerPositive();
    } else checkingAnswerNegative();

    listContainer.removeEventListener("click", matchingHandler);
  }

  function matchingHandler(e) {
    if (e.target.classList.contains("enlarge_picture")) {
      scaleImage(e.target.parentElement, `${imageFolder}/close.png`);
    }
    const isImgEl =
      e.target.classList.contains("multiChoicePictureCard") ||
      e.target.classList.contains("multiChoicePicture") ||
      e.target.classList.contains("multiChoiceTitle");

    if (!isImgEl) {
      return;
    }

    const matchedItem = e.target.classList.contains("multiChoicePictureCard")
      ? e.target
      : e.target.offsetParent;

    addCheckClass(matchedItem);
  }

  function addCheckClass(card) {
    card.classList.toggle("multiChoicePictureCardActive");
  }

  function addRightChoiceClass(card) {
    card.classList.add("multipleChoicePictureRight");
  }

  function addWrongChoiceClass(card) {
    card.classList.add("multipleChoicePictureWrong");
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

  function removeCheckClasses(item) {
    item.classList.remove("multiChoicePictureCardActive");
    item.classList.remove("multipleChoicePictureWrong");
    item.classList.remove("multipleChoicePictureRight");
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
