import {
  removeActiveCardClass,
  addCheckClass,
  addRightChoiceClass,
  addWrongChoiceClass,
  onSoundIconClick,
  resetSound,
  getRandomPositionToCard,
  shuffleCards,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

//ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ ЗВУК + ТЕКСТ

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_4_task-1";
  // массив входящих вариантов ответа(звуков) (максимум 5-6 элементов),
  // поле text заполняется по необходимости, если надписи у звука нет, то ставится ''
  // поле id должно быть уникальным, по нему происходит воспроизведение звуков
  // в поле answerTag заполняется принадлежность к правильному/неправильному ответу, правильное значение указывается ниже
  const arrayOfElements = [
    {
      id: 1,
      text: "Зонтиков больше, чем дождевиков.",
      audioSrc: "sound/singleChoice_4/005.mp3",
      answerTag: "wrong",
    },
    {
      id: 2,
      text: "Зонтиков меньше, чем дождевиков.",
      audioSrc: "sound/singleChoice_4/006.mp3",
      answerTag: "wrong",
    },
    {
      id: 3,
      text: "Дождевиков больше, чем зонтиков.",
      audioSrc: "sound/singleChoice_4/007.mp3",
      answerTag: "wrong",
    },
    {
      id: 4,
      text: "Дождевиков меньше, чем зонтиков.",
      audioSrc: "sound/singleChoice_4/008.mp3",
      answerTag: "wrong",
    },
    {
      id: 5,
      text: "Зонтиков столько, сколько дождевиков. Их поровну.",
      audioSrc: "sound/singleChoice_4/009.mp3",
      answerTag: "right",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoice_4_Markup(arrayOfElements, rightAnswer, taskId);
})();

//ВЫЗОВ ФУНКЦИИ ДЛЯ СЛУЧАЯ ТОЛЬКО ЗВУК
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoice_4_task-2";
  // массив входящих вариантов ответа(звуков) (максимум 5-6 элементов),
  // поле text заполняется по необходимости, если надписи у звука нет, то ставится ''
  // поле id должно быть уникальным, по нему происходит воспроизведение звуков
  // в поле answerTag заполняется принадлежность к правильному/неправильному ответу, правильное значение указывается ниже
  const arrayOfElements = [
    {
      id: 1,
      text: "",
      audioSrc: "sound/singleChoice_4/moroz.mp3",
      answerTag: "wrong",
    },
    {
      id: 2,
      text: "",
      audioSrc: "sound/singleChoice_4/ulibka.mp3",
      answerTag: "wrong",
    },
    {
      id: 3,
      text: "",
      audioSrc: "sound/singleChoice_4/umka.mp3",
      answerTag: "right",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "right";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoice_4_Markup(arrayOfElements, rightAnswer, taskId);
})();

// ФУНКЦИЯ
function renderSingleChoice_4_Markup(arrayOfElements, rightAnswer, taskId) {
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
  const listContainer = taskWrapper.querySelector(".singleChoice_4_List");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  const audioFiles = document.querySelectorAll(`.singleChoice_4_audio`);

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  listContainer.addEventListener("click", onListItemClick);
  btnReset.addEventListener("click", onBtnResetClick);

  function onBtnResetClick(e) {
    [...listContainer.children].forEach((el) => {
      getRandomPositionToCard(el);
      removeActiveCardClass(el);
    });

    listContainer.addEventListener("click", onListItemClick);

    resetSound(soundSetStates);

    currentActiveCard = null;

    isGameStart = false;
    checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onBtnTestClick(e) {
    if (!currentActiveCard) {
      return;
    }

    if (currentActiveCard && currentActiveCard.dataset.name === rightAnswer) {
      addRightChoiceClass(currentActiveCard);

      feedBackChanger("win", isGameStart, result);
    } else {
      addWrongChoiceClass(currentActiveCard);

      feedBackChanger("lose", isGameStart, result);
    }

    resetSound(soundSetStates);

    listContainer.removeEventListener("click", onListItemClick);
  }

  function createCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        let widthItem;
        if (picture.text) {
          if (arrayLength > 4) {
            widthItem = `"width: calc(100% / 3 - 10px)"`;
          } else if (arrayLength < 4) {
            widthItem = `"width: calc(100% / ${arrayLength} - 10px)"`;
          } else if (arrayLength === 4) {
            widthItem = `"width: calc(100% / 2 - 10px)"`;
          }
        } else widthItem = `"width: calc(100% / ${arrayLength} - 10px)"`;

        const isTitle =
          picture.text &&
          `<div class='singleChoice_4_Title'>${picture.text}</div>`;

        return `
                  <div class="singleChoice_4_Item oneMultiChoice_border" data-name="${picture.answerTag}" style=${widthItem}>
                  <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${picture.id}${taskId}">
                      <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                      <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                        <audio class="singleChoice_4_audio" id="${picture.id}${taskId}" src="${picture.audioSrc}">Your browser does not support the <code>audio</code> element.
                       </audio>
                  </div>
                  ${isTitle}
                  </div>
                  `;
      })
      .join("");
  }

  function onListItemClick(e) {
    let imgEl;
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
    const isImgEl =
      e.target.classList.contains("singleChoice_4_Title") ||
      e.target.classList.contains("singleChoice_4_Item");

    if (!isImgEl) {
      return;
    }

    if (e.target.classList.contains("singleChoice_4_Title")) {
      imgEl = e.target.parentElement;
    } else imgEl = e.target;

    if (!isGameStart) {
      isGameStart = true;
      checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    }

    if (imgEl.classList.contains("targetChoice_color")) {
      removeActiveCardClass(imgEl);

      isGameStart = false;
      checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    } else if (imgEl.classList.contains("singleChoice_4_Item")) {
      currentActiveCard && removeActiveCardClass(currentActiveCard);

      addCheckClass(imgEl);
      currentActiveCard = imgEl;
    }
  }
}
