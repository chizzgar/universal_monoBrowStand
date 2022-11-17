import {
  checkingAnswerPositive,
  checkingAnswerNegative,
  checkingAnswerReset,
  removeActiveCardClass,
  addCheckClass,
  addRightChoiceClass,
  addWrongChoiceClass,
  onSoundIconClick,
  resetSound,
  getRandomPositionToCard,
  shuffleCards,
  toggleOpacityAndEventsElement,
  renderCheckPanel,
  getCheckPanelElements,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_2_task-1";
  // массив входящих данных (минимум 4, максимум 15 элементов),
  //поле text заполняется по необходимости, если заголовка нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу
  // поле id должно быть уникально, по нему идет воспроизведение звуков
  const arrayOfElements = [
    {
      id: 1,
      name: "born",
      answerTag: "right",
      audioSrc: "",
      text: "Свет",
    },
    {
      id: 2,
      name: "summer",
      audioSrc: "",
      answerTag: "wrong",
      text: "Атмосферное давление",
    },
    {
      id: 3,
      name: "cold",
      audioSrc: "",
      answerTag: "right",
      text: "Вода",
    },
    {
      id: 4,
      name: "clouds",
      audioSrc: "",
      answerTag: "wrong",
      text: "Mорские течения",
    },
    {
      id: 5,
      name: "cold",
      audioSrc: "",
      answerTag: "wrong",
      text: "Ветер",
    },
    {
      id: 6,
      name: "clouds",
      audioSrc: "",
      answerTag: "right",
      text: "Температура",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_2(arrayOfElements, rightAnswer, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_2_task-2";
  // массив входящих данных (минимум 4, максимум 15 элементов),
  //поле text заполняется по необходимости, если заголовка нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу
  // поле id должно быть уникально, по нему идет воспроизведение звуков
  const arrayOfElements = [
    {
      id: 1,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_9.mp3",
      text: "В лесу родилась ёлочка",
    },
    {
      id: 2,
      name: "summer",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "Песенка о лете",
    },
    {
      id: 3,
      name: "cold",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "Маленькой ёлочке холодно зимой",
    },
    {
      id: 4,
      name: "clouds",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "Облака",
    },
    {
      id: 5,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_9.mp3",
      text: "В лесу родилась ёлочка",
    },
    {
      id: 6,
      name: "summer",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "Песенка о лете",
    },
    {
      id: 7,
      name: "cold",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "Маленькой ёлочке холодно зимой",
    },
    {
      id: 8,
      name: "clouds",
      audioSrc: "sound/multipleChoice_2/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "Облака",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_2(arrayOfElements, rightAnswer, taskId);
})();

function renderMultipleChoice_2(arrayOfElements, rightAnswer, taskId) {
  const arrayLength = arrayOfElements.length;
  const rightAnswersLength = arrayOfElements.filter(
    (el) => el.answerTag === rightAnswer
  ).length;

  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  let isGameStart = false;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const listContainer = taskWrapper.querySelector(".multipleChoice_2_List");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );
  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  const audioFiles = taskWrapper.querySelectorAll(".multipleChoice_2_audio");

  listContainer.addEventListener("click", matchingHandler);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map((item) => {
        const isAudio =
          item.audioSrc &&
          `<div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${item.id}${taskId}">
                        <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                        <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                        <audio class="multipleChoice_2_audio" id="${item.id}${taskId}" src="${item.audioSrc}">
                              Your browser does not support the <code>audio</code> element.
                            </audio>
                      </div>`;
        let widthItem;
        let heightItem;
        if (arrayLength > 10) {
          widthItem = `"width: calc(100% / 5 - 10px)"`;
          heightItem = "multipleChoice_2_Card_small";
        } else if (arrayLength > 8 && arrayLength <= 10) {
          widthItem = `"width: calc(100% / 5 - 20px)"`;
          heightItem = "multipleChoice_2_Card_middle";
        } else if (arrayLength > 6 && arrayLength <= 8) {
          widthItem = `"width: calc(100% / 4 - 20px)"`;
          heightItem = "multipleChoice_2_Card_middle";
        } else if (arrayLength > 4 && arrayLength <= 6) {
          widthItem = `"width: calc(100% / 3 - 20px)"`;
          heightItem = "multipleChoice_2_Card_middle";
        } else if (arrayLength === 4) {
          widthItem = `"width: calc(100% / 2 - 10px)"`;
          heightItem = "multipleChoice_2_Card_big";
        }
        return `<div class="multipleChoice_2_Card ${heightItem} oneMultiChoice_border" data="${item.answerTag}" style=${widthItem}>

                  ${isAudio}
                  <div class='multipleChoice_2_Title'>${item.text}</div>

                  </div>
                  `;
      })
      .join("");
  }

  function onBtnResetClick() {
    [...listContainer.children].forEach((el) => {
      removeActiveCardClass(el);
      getRandomPositionToCard(el);
    });

    checkingAnswerReset(controlsBox, infoBox);
    resetSound(soundSetStates);
    listContainer.addEventListener("click", matchingHandler);
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
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
      checkingAnswerPositive(controlsBox, infoBox);
    } else checkingAnswerNegative(controlsBox, infoBox);

    resetSound(soundSetStates);
    listContainer.removeEventListener("click", matchingHandler);
  }

  function matchingHandler(e) {
    let matchedItem;
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
      return;
    }
    const isImgEl =
      e.target.classList.contains("multipleChoice_2_Card") ||
      e.target.classList.contains("multipleChoice_2_Title") ||
      e.target.classList.contains("multipleChoice_2_Img");

    if (!isImgEl) {
      return;
    }

    if (e.target.classList.contains("multipleChoice_2_Title")) {
      matchedItem = e.target.parentElement;
    } else if (e.target.classList.contains("multipleChoice_2_Card")) {
      matchedItem = e.target;
    }

    if (!isGameStart) {
      // открываем кнопку ПРОВЕРИТЬ
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = true;
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
      // закрываем кнопку ПРОВЕРИТЬ
      isGameStart = false;
      toggleOpacityAndEventsElement(btnTest);
    }
  }
}
