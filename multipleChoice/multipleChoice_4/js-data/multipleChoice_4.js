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

// на 4 элемента
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_4_task-1";
  // массив входящих звуков (минимум 4, максимум 15 элементов),
  //поле text заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу
  // поле name должно быть уникально, по нему идет воспроизведение звуков
  const arrayOfElements = [
    {
      id: 1,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_4/moroz.mp3",
      text: "",
    },
    {
      id: 2,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/ulibka.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 3,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/umka.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 4,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/moroz.mp3",
      answerTag: "right",
      text: "",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_4(arrayOfElements, rightAnswer, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_4_task-2";
  // массив входящих звуков (минимум 4, максимум 15 элементов),
  //поле text заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу
  // поле name должно быть уникально, по нему идет воспроизведение звуков
  const arrayOfElements = [
    {
      id: 1,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_9.mp3",
      text: "В лесу родилась ёлочка",
    },
    {
      id: 2,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "Песенка о лете",
    },
    {
      id: 3,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "Маленькой ёлочке холодно зимой",
    },
    {
      id: 4,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "Облака",
    },
    {
      id: 5,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_9.mp3",
      text: "В лесу родилась ёлочка",
    },
    {
      id: 6,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "Песенка о лете",
    },
    {
      id: 7,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "Маленькой ёлочке холодно зимой",
    },
    {
      id: 8,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "Облака",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_4(arrayOfElements, rightAnswer, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "multipleChoice_4_task-3";
  // массив входящих звуков (минимум 4, максимум 15 элементов),
  //поле text заполняется по необходимости, если заголовка у картинки нет, то ставится ''
  //в поле answerTag заполняется принадлежность к правильному/неправильному ответу
  // поле name должно быть уникально, по нему идет воспроизведение звуков
  const arrayOfElements = [
    {
      id: 1,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_9.mp3",
      text: "",
    },
    {
      id: 2,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 3,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "",
    },
    {
      id: 4,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 5,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_9.mp3",
      text: "",
    },
    {
      id: 6,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 7,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "",
    },
    {
      id: 8,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 9,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 10,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "",
    },
    {
      id: 11,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 12,
      name: "born",
      answerTag: "right",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_9.mp3",
      text: "",
    },
    {
      id: 13,
      name: "summer",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_10.mp3",
      answerTag: "wrong",
      text: "",
    },
    {
      id: 14,
      name: "cold",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_11.mp3",
      answerTag: "right",
      text: "",
    },
    {
      id: 15,
      name: "clouds",
      audioSrc: "sound/multipleChoice_4/DO_3-4_17_2_12.mp3",
      answerTag: "wrong",
      text: "",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoice_4(arrayOfElements, rightAnswer, taskId);
})();

function renderMultipleChoice_4(arrayOfElements, rightAnswer, taskId) {
  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  let isGameStart = false;

  const arrayLength = arrayOfElements.length;

  const rightAnswersLength = arrayOfElements.filter(
    (el) => el.answerTag === rightAnswer
  ).length;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const listContainer = taskWrapper.querySelector(".multipleChoice_4_List");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  listContainer.addEventListener("click", matchingHandler);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  const audioFiles = taskWrapper.querySelectorAll(".multipleChoice_4_audio");

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map((item) => {
        const isTitle =
          item.text && `<div class='multipleChoice_4_Title'>${item.text}</div>`;
        let widthItem;
        let heightItem;
        if (arrayLength > 10) {
          widthItem = `"width: calc(100% / 5 - 10px)"`;
          heightItem = "multipleChoice_4_Card_small";
        } else if (arrayLength > 8 && arrayLength <= 10) {
          widthItem = `"width: calc(100% / 5 - 20px)"`;
          heightItem = "multipleChoice_4_Card_middle";
        } else if (arrayLength > 6 && arrayLength <= 8) {
          widthItem = `"width: calc(100% / 4 - 20px)"`;
          heightItem = "multipleChoice_4_Card_middle";
        } else if (arrayLength > 4 && arrayLength <= 6) {
          widthItem = `"width: calc(100% / 3 - 20px)"`;
          heightItem = "multipleChoice_4_Card_middle";
        } else if (arrayLength === 4) {
          widthItem = `"width: calc(100% / 2 - 10px)"`;
          heightItem = "multipleChoice_4_Card_big";
        }

        return `<div class="multipleChoice_4_Card ${heightItem} oneMultiChoice_border" data="${item.answerTag}" style=${widthItem}>
                       <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${item.id}${taskId}">
                         <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                         <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                            <audio class="multipleChoice_4_audio" id="${item.id}${taskId}" src="${item.audioSrc}">Your browser does not support the <code>audio</code> element.
                             </audio>
                         </div>
                   ${isTitle}

                  </div>
                  `;
      })
      .join("");
  }

  function matchingHandler(e) {
    let matchedItem;
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
    const isImgEl =
      e.target.classList.contains("multipleChoice_4_Card") ||
      e.target.classList.contains("multipleChoice_4_Title");
    if (!isImgEl) {
      return;
    }

    if (e.target.classList.contains("multipleChoice_4_Title")) {
      matchedItem = e.target.parentElement;
    } else if (e.target.classList.contains("multipleChoice_4_Card")) {
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

  function onBtnResetClick() {
    checkingAnswerReset(controlsBox, infoBox);
    [...listContainer.children].forEach((item) => {
      getRandomPositionToCard(item);
      removeActiveCardClass(item);
    });

    resetSound(soundSetStates);

    listContainer.addEventListener("click", matchingHandler);
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
  }
}
