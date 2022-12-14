import {
  removeActiveCardClass,
  addCheckClass,
  addRightChoiceClass,
  addWrongChoiceClass,
  shuffleCards,
  getRandomPositionToCard,
  togglePointerEventElement,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_5_task-1";
  // массив входящих звуков (минимум 4, максимум 6 элементов),
  // поле text заполняется по необходимости, если текста нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу

  const arrayOfElements = [
    {
      id: 1,
      answerTag: "many",
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_1.mp4",
      text: "Заяц",
    },
    {
      id: 2,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_2.mp4",
      answerTag: "one",
      text: "Лиса",
    },
    {
      id: 3,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_3.mp4",
      answerTag: "many",
      text: "Медведь",
    },
    {
      id: 4,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_4.mp4",
      answerTag: "one",
      text: "Волк",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "many";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_5(arrayOfElements, rightAnswer, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_5_task-2";
  // массив входящих звуков (минимум 4, максимум 6 элементов),
  // поле text заполняется по необходимости, если текста нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу

  const arrayOfElements = [
    {
      id: 1,
      answerTag: "many",
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_1.mp4",
      text: "",
    },
    {
      id: 2,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_2.mp4",
      answerTag: "one",
      text: "",
    },
    {
      id: 3,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_3.mp4",
      answerTag: "many",
      text: "",
    },
    {
      id: 4,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_4.mp4",
      answerTag: "one",
      text: "",
    },
    {
      id: 5,
      answerTag: "many",
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_1.mp4",
      text: "",
    },
    {
      id: 6,
      videoSrc: "media/multipleChoice_5/DOH_3-4_31_3_2.mp4",
      answerTag: "one",
      text: "",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "many";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_5(arrayOfElements, rightAnswer, taskId);
})();

function renderMultipleChoice_5(arrayOfElements, rightAnswer, taskId) {
  let isGameStart = false;

  const arrayLength = arrayOfElements.length;
  const rightAnswersLength = arrayOfElements.filter(
    (el) => el.answerTag === rightAnswer
  ).length;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const listContainer = taskWrapper.querySelector(
    ".multipleChoice_5_VideoList"
  );

  listContainer.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  listContainer.addEventListener("click", matchingHandler);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map((item) => {
        let heightItem;

        if (arrayLength === 4) {
          heightItem = "multipleChoice_5_VideoCard_big";
        } else {
          heightItem = "multipleChoice_5_VideoCard_middle";
        }
        const isTitle =
          item.text &&
          `<div class='multipleChoice_5_VideoTitle'>${item.text}</div>`;

        return `<div class="multipleChoice_5_VideoCard oneMultiChoice_border ${heightItem}" data="${item.answerTag}" >
                    <video class="multipleChoice_5_Video " controls
                           src="${item.videoSrc}"
                           id="${item.id}${taskId}"
                           type="video/mp4"
                    >
                    </video>
                    ${isTitle}
                </div>`;
      })
      .join("");
  }

  function onBtnResetClick() {
    [...listContainer.children].forEach((item) => {
      removeActiveCardClass(item);
      getRandomPositionToCard(item);
      const videoEl = item.querySelector("video");
      videoEl.pause();
      videoEl.currentTime = 0;
    });

    if (listContainer.classList.contains("noEventElement")) {
      togglePointerEventElement(listContainer);
    }

    isGameStart = false;
    checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onBtnTestClick() {
    let winCount = 0;

    const selectedItems = [...listContainer.children].filter((el) =>
      el.classList.contains("targetChoice_color")
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
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }

    [...listContainer.children].forEach((el) => {
      const videoEl = el.querySelector("video");
      videoEl.pause();
      videoEl.currentTime = 0;
    });
    if (!listContainer.classList.contains("noEventElement")) {
      togglePointerEventElement(listContainer);
    }
  }

  function matchingHandler(e) {
    let matchedItem;
    const isImgEl =
      e.target.classList.contains("multipleChoice_5_VideoCard") ||
      e.target.classList.contains("multipleChoice_5_Video") ||
      e.target.classList.contains("multipleChoice_5_VideoTitle");

    if (!isImgEl) {
      return;
    }

    if (e.target.classList.contains("multipleChoice_5_VideoCard")) {
      matchedItem = e.target;
    } else if (e.target.classList.contains("multipleChoice_5_VideoTitle")) {
      matchedItem = e.target.parentElement;
    }

    if (!isGameStart) {
      isGameStart = true;
      checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    }

    if (matchedItem) {
      if (matchedItem.classList.contains("targetChoice_color")) {
        removeActiveCardClass(matchedItem);
      } else {
        addCheckClass(matchedItem);
      }
    }
    const isSelectedItems = [...listContainer.children].some((el) =>
      el.classList.contains("targetChoice_color")
    );
    if (!isSelectedItems) {
      isGameStart = false;
      checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    }
  }
}
