import {
  scaleImage,
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

// ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ КАРТИНКА + ЗВУК + ТЕКСТ

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_3_task-1";
  // массив входящих картинок (максимум 5-6 элементов),
  // поле text, audioSrc  заполняется по необходимости, если надписи или звука нет, то ставится ''
  // в поле answerTag указывается уникальное слово или цифра, по которой будет сверяться правильный ответ
  // в поле id указывается уникальное слово или цифра, по которым воспроизводятся звуки

  const arrayOfElements = [
    {
      id: 1,
      name: "bear",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_1.jpg",
      text: "Медведь",
      audioSrc: "sound/singleChoice_3/bear.mp3",
      answerTag: "bear",
    },
    {
      id: 2,
      name: "fox",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_2.jpg",
      text: "Лиса",
      audioSrc: "sound/singleChoice_3/fox.mp3",
      answerTag: "fox",
    },
    {
      id: 3,
      name: "wolf",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_3.jpg",
      text: "Волк",
      audioSrc: "sound/singleChoice_3/wolf.mp3",
      answerTag: "wolf",
    },
    {
      id: 4,
      name: "squirrel",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_4.jpg",
      text: "Белка",
      audioSrc: "sound/singleChoice_3/squirrel.mp3",
      answerTag: "squirrel",
    },
    {
      id: 5,
      name: "monkey",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_5.jpg",
      text: "Обезьяна",
      audioSrc: "sound/singleChoice_3/monkey.mp3",
      answerTag: "monkey",
    },
    {
      id: 6,
      name: "giraffe",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_6.jpg",
      text: "Жираф",
      audioSrc: "sound/singleChoice_3/giraffe.mp3",
      answerTag: "giraffe",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "bear";

  // сама функция, которая запускается, здесь ничего менять не нужно

  renderSingleChoice_3_Markup(arrayOfElements, rightAnswer, taskId);
})();
// ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ ТОЛЬКО КАРТИНКА И ЗВУК

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_3_task-2";
  // массив входящих картинок (максимум 5-6 элементов),
  // поле text, audioSrc  заполняется по необходимости, если надписи или звука нет, то ставится ''
  // в поле answerTag указывается уникальное слово или цифра, по которой будет сверяться правильный ответ
  // в поле id указывается уникальное слово или цифра, по которым воспроизводятся звуки
  const arrayOfElements = [
    {
      id: 1,
      name: "bear",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_1.jpg",
      text: "",
      audioSrc: "sound/singleChoice_3/bear.mp3",
      answerTag: "bear",
    },
    {
      id: 2,
      name: "fox",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_2.jpg",
      text: "",
      audioSrc: "sound/singleChoice_3/fox.mp3",
      answerTag: "fox",
    },
    {
      id: 3,
      name: "wolf",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_3.jpg",
      text: "",
      audioSrc: "sound/singleChoice_3/wolf.mp3",
      answerTag: "wolf",
    },
    {
      id: 4,
      name: "squirrel",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_4.jpg",
      text: "",
      audioSrc: "sound/singleChoice_3/squirrel.mp3",
      answerTag: "squirrel",
    },
    // {
    //   id: 5,
    //   name: "monkey",
    //   imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_5.jpg",
    //   text: "",
    //   audioSrc: "sound/singleChoice_3/monkey.mp3",
    //   answerTag: "monkey",
    // },
    // {
    //   id: 6,
    //   name: "giraffe",
    //   imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_6.jpg",
    //   text: "",
    //   audioSrc: "sound/singleChoice_3/giraffe.mp3",
    //   answerTag: "giraffe",
    // },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "bear";

  // сама функция, которая запускается, здесь ничего менять не нужно

  renderSingleChoice_3_Markup(arrayOfElements, rightAnswer, taskId);
})();
// ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ ТОЛЬКО КАРТИНКА

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_3_task-3";
  // массив входящих картинок (максимум 5-6 элементов),
  // поле text, audioSrc  заполняется по необходимости, если надписи или звука нет, то ставится ''
  // в поле answerTag указывается уникальное слово или цифра, по которой будет сверяться правильный ответ
  // в поле id указывается уникальное слово или цифра, по которым воспроизводятся звуки
  const arrayOfElements = [
    {
      id: 1,
      name: "lion",
      imgSrc: "Images_1/singleChoice_3/lion.dbd8c13b.png",
      text: "",
      audioSrc: "",
      answerTag: "lion",
    },
    {
      id: 2,
      name: "monkey",
      imgSrc: "Images_1/singleChoice_3/monkey.0cf4077b.png",
      text: "",
      audioSrc: "",
      answerTag: "monkey",
    },
    {
      id: 2,
      name: "tiger",
      imgSrc: "Images_1/singleChoice_3/tiger.7bc5058d.png",
      text: "",
      audioSrc: "",
      answerTag: "tiger",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "monkey";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoice_3_Markup(arrayOfElements, rightAnswer, taskId);
})();
// ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ ТОЛЬКО КАРТИНКА + НАДПИСЬ

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_3_task-4";
  // массив входящих картинок (максимум 5-6 элементов),
  // поле text, audioSrc  заполняется по необходимости, если надписи или звука нет, то ставится ''
  // в поле answerTag указывается уникальное слово или цифра, по которой будет сверяться правильный ответ
  // в поле id указывается уникальное слово или цифра, по которым воспроизводятся звуки
  const arrayOfElements = [
    {
      id: 1,
      name: "bear",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_1.jpg",
      text: "Медведь",
      audioSrc: "",
      answerTag: "bear",
    },
    {
      id: 2,
      name: "fox",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_2.jpg",
      text: "Лиса",
      audioSrc: "",
      answerTag: "fox",
    },
    {
      id: 3,
      name: "wolf",
      imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_3.jpg",
      text: "Волк",
      audioSrc: "",
      answerTag: "wolf",
    },
    // {
    //   id: 4,
    //   name: "squirrel",
    //   imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_4.jpg",
    //   text: "Белка",
    //   audioSrc: "",
    //   answerTag: "squirrel",
    // },
    // {
    //   id: 5,
    //   name: "monkey",
    //   imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_5.jpg",
    //   text: "Обезьяна",
    //   audioSrc: "sound/singleChoice_3/monkey.mp3",
    //   answerTag: "monkey",
    // },
    // {
    //   id: 6,
    //   name: "giraffe",
    //   imgSrc: "Images_1/singleChoice_3/DO_3-4_21_5_6.jpg",
    //   text: "Жираф",
    //   audioSrc: "sound/singleChoice_3/giraffe.mp3",
    //   answerTag: "giraffe",
    // },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "bear";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoice_3_Markup(arrayOfElements, rightAnswer, taskId);
})();

// НИЖЕ САМА ФУНКЦИЯ
function renderSingleChoice_3_Markup(arrayOfElements, rightAnswer, taskId) {
  let currentActiveCard;
  let isGameStart = false;

  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };

  const arrayLength = arrayOfElements.length;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const listContainer = taskWrapper.querySelector(".singleChoice_3_List");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  listContainer.addEventListener("pointerdown", onListItemClick);

  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  const audioFiles = taskWrapper.querySelectorAll(".singleChoice_3_audio");

  function onBtnResetClick(e) {
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }

    currentActiveCard && removeActiveCardClass(currentActiveCard);

    [...listContainer.children].forEach((el) => getRandomPositionToCard(el));

    resetSound(soundSetStates);
    checkingAnswerReset(controlsBox, infoBox);
    currentActiveCard = null;

    listContainer.addEventListener("pointerdown", onListItemClick);
  }

  function onBtnTestClick(e) {
    if (currentActiveCard && currentActiveCard.dataset.name === rightAnswer) {
      addRightChoiceClass(currentActiveCard);
      checkingAnswerPositive(controlsBox, infoBox);
    } else {
      addWrongChoiceClass(currentActiveCard);
      checkingAnswerNegative(controlsBox, infoBox);
    }

    resetSound(soundSetStates);

    listContainer.removeEventListener("pointerdown", onListItemClick);
  }

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        let widthItem;
        if (arrayLength > 4) {
          widthItem = `"width: calc(100% / 3 - 10px)"`;
        } else if (arrayLength < 4) {
          widthItem = `"width: calc(100% / ${arrayLength} - 10px)"`;
        } else if (arrayLength === 4) {
          widthItem = `"width: calc(100% / 2 - 10px)"`;
        }
        const isTitle =
          picture.text &&
          `<div class='singleChoice_3_Title'>${picture.text}</div>`;
        const isSound =
          picture.audioSrc &&
          `
                <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${picture.id}${taskId}">
                    <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                    <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                    <audio class="singleChoice_3_audio" id="${picture.id}${taskId}" src="${picture.audioSrc}">
                              Your browser does not support the
                              <code>audio</code> element.
                    </audio>
                </div>
            `;

        return `
                <div class="singleChoice_3_Item oneMultiChoice_border" data-name="${picture.answerTag}" style=${widthItem}>
                    <div class='singleChoice_3_ImageBox' style="background-image: url(${picture.imgSrc})">
                       <div class="zoom_open_button_white singleChoice_3_enlarge_picture" title="Увеличить изображение">
                          <div class="icon_zoomPicture whiteZoomImg"></div>
                       </div>
                    </div>
                    ${isSound}
                    ${isTitle}
                    </div>
                    `;
      })
      .join("");
  }

  function onListItemClick(e) {
    let imgEl;
    if (e.target.classList.contains("singleChoice_3_enlarge_picture")) {
      scaleImage(e.target.parentElement);
    }
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
    const isImgEl =
      e.target.classList.contains("singleChoice_3_ImageBox") ||
      e.target.classList.contains("singleChoice_3_Title") ||
      e.target.classList.contains("singleChoice_3_Item");

    if (!isImgEl) {
      return;
    }

    if (
      e.target.classList.contains("singleChoice_3_ImageBox") ||
      e.target.classList.contains("singleChoice_3_Title")
    ) {
      imgEl = e.target.parentElement;
    } else imgEl = e.target;

    if (!isGameStart) {
      // открываем кнопку ПРОВЕРИТЬ
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = true;
    }

    if (imgEl.classList.contains("targetChoice_color")) {
      removeActiveCardClass(imgEl);
      // закрываем кнопку ПРОВЕРИТЬ
      isGameStart = false;
      toggleOpacityAndEventsElement(btnTest);
    } else if (imgEl.classList.contains("singleChoice_3_Item")) {
      currentActiveCard && removeActiveCardClass(currentActiveCard);
      addCheckClass(imgEl);
      currentActiveCard = imgEl;
    }
  }
}
