import {
  checkingAnswerPositive,
  checkingAnswerNegative,
  checkingAnswerReset,
  removeActiveCardClass,
  addCheckClass,
  addRightChoiceClass,
  addWrongChoiceClass,
  getRandomPositionToCard,
  shuffleCards,
  toggleOpacityAndEventsElement,
  renderCheckPanel,
  getCheckPanelElements,
  togglePointerEventElement,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_5_task-1";
  // массив входящих звуков (минимум 2, максимум 6 элементов),

  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу

  const arrayOfElements = [
    {
      id: 1,
      answerTag: "right",
      videoSrc: "media/singleChoice_5/fly_ship_360p.mp4",
      text: "",
    },
    {
      id: 2,
      videoSrc: "media/singleChoice_5/pes_360p.mp4",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 3,
      videoSrc: "media/singleChoice_5/sneg_360p.mp4",
      answerTag: "wrong",
      text: "",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoice_5_Markup(arrayOfElements, rightAnswer, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_5_task-2";
  // массив входящих звуков (минимум 2, максимум 6 элементов),

  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу

  const arrayOfElements = [
    {
      id: 1,
      answerTag: "many",
      videoSrc: "media/singleChoice_5/DOH_3-4_31_3_1.mp4",
      text: "Заяц",
    },
    {
      id: 2,
      videoSrc: "media/singleChoice_5/DOH_3-4_31_3_2.mp4",
      answerTag: "one",
      text: "Лиса",
    },
    {
      id: 3,
      videoSrc: "media/singleChoice_5/DOH_3-4_31_3_3.mp4",
      answerTag: "one",
      text: "Медведь",
    },
    {
      id: 4,
      videoSrc: "media/singleChoice_5/DOH_3-4_31_3_4.mp4",
      answerTag: "one",
      text: "Волк",
    },
    {
      id: 5,
      videoSrc: "media/singleChoice_5/DOH_3-4_31_3_4.mp4",
      answerTag: "one",
      text: "Волк",
    },
    {
      id: 6,
      videoSrc: "media/singleChoice_5/DOH_3-4_31_3_4.mp4",
      answerTag: "one",
      text: "Волк",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "many";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoice_5_Markup(arrayOfElements, rightAnswer, taskId);
})();

// ФУНКЦИЯ
function renderSingleChoice_5_Markup(arrayOfElements, rightAnswer, taskId) {
  let currentActiveCard;
  let isGameStart = false;

  const arrayLength = arrayOfElements.length;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const listContainer = taskWrapper.querySelector(".singleChoice_5_List");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  listContainer.addEventListener("click", matchingHandler);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  function createCardsMarkup(pictures) {
    return pictures
      .map((item) => {
        let itemSizes;

        if (arrayLength === 4 || arrayLength === 2) {
          itemSizes = "singleChoice_5_Card_big";
        } else {
          itemSizes = "singleChoice_5_Card_middle";
        }
        const isText =
          item.text &&
          `<div class="singleChoice_5_CardText">${item.text}</div>`;

        return `<div class="singleChoice_5_Card oneMultiChoice_border ${itemSizes}" data="${item.answerTag}" >
                    <video class="singleChoice_5_video" controls
                           src="${item.videoSrc}"
                           id="${item.id}${taskId}"
                           type="video/mp4"
                    >
                    </video>
                    ${isText}
                </div>`;
      })
      .join("");
  }

  function onBtnResetClick() {
    [...listContainer.children].forEach((el) => {
      getRandomPositionToCard(el);
      removeActiveCardClass(el);
      el.firstElementChild.pause();
      el.firstElementChild.currentTime = 0;
      if (el.firstElementChild.classList.contains("noEventElement")) {
        togglePointerEventElement(el.firstElementChild);
      }
    });
    checkingAnswerReset(controlsBox, infoBox);
    listContainer.addEventListener("click", matchingHandler);
    currentActiveCard = null;
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
  }

  function onBtnTestClick() {
    if (!currentActiveCard) {
      return;
    }

    if (
      currentActiveCard &&
      currentActiveCard.attributes.getNamedItem("data").value === rightAnswer
    ) {
      addRightChoiceClass(currentActiveCard);
      checkingAnswerPositive(controlsBox, infoBox);
    } else {
      addWrongChoiceClass(currentActiveCard);
      checkingAnswerNegative(controlsBox, infoBox);
    }
    [...listContainer.children].forEach((el) => {
      el.firstElementChild.pause();
      if (!el.firstElementChild.classList.contains("noEventElement")) {
        togglePointerEventElement(el.firstElementChild);
      }
    });

    listContainer.removeEventListener("click", matchingHandler);
  }

  function matchingHandler(e) {
    let matchedItem;
    const isImgEl =
      e.target.classList.contains("singleChoice_5_Card") ||
      e.target.classList.contains("singleChoice_5_") ||
      e.target.classList.contains("singleChoice_5_CardText");

    if (!isImgEl) {
      return;
    }

    if (e.target.classList.contains("singleChoice_5_Card")) {
      matchedItem = e.target;
    } else if (e.target.classList.contains("singleChoice_5_CardText")) {
      matchedItem = e.target.parentElement;
    }
    // открываем кнопку ПРОВЕРИТЬ
    if (!isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = true;
    }
    if (matchedItem.classList.contains("targetChoice_color")) {
      removeActiveCardClass(matchedItem);
      // закрываем кнопку ПРОВЕРИТЬ
      isGameStart = false;
      toggleOpacityAndEventsElement(btnTest);
    } else if (matchedItem.classList.contains("singleChoice_5_Card")) {
      currentActiveCard && removeActiveCardClass(currentActiveCard);
      addCheckClass(matchedItem);
      currentActiveCard = matchedItem;
    }
  }
}
