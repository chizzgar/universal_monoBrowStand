import {
  getRandomPositionToCard,
  scaleImage,
  dropAppend,
  dragAppend,
  resetSound,
  onSoundIconClick,
  shuffleCards,
  addRightChoiceClass,
  addWrongChoiceClass,
  removeActiveCardClass,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "dnd_soundToSomething_task-1";
  // массив входящих картинок ( до 6 элементов),
  // поля imgSrc, text, audioSrc_2 заполняются опционально, если контента нет, оставлять ''
  // в поле answerTag вписывается слово по которому будет сверяться правильность сопоставления звука и картинки
  // поле id должно быть уникальным, т.к. по нему происходит воспроизведение звуков
  // в  audioSrc -  звуки для перетаскиваемых элементов
  // в  audioSrc_2 -  звуки для озвучки картинок
  const arrayOfElements = [
    {
      id: 1,
      name: "whistle",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_12.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_8.mp3",
      audioSrc_2: "sound/dnd_imagesWithSound/003.mp3",
      text: "Свистулька",
      answerTag: "whistle",
    },
    {
      id: 2,
      name: "balalaika",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_13.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_7.mp3",
      audioSrc_2: "sound/dnd_imagesWithSound/002.mp3",
      text: "Балалайка",
      answerTag: "balalaika",
    },
    {
      id: 3,
      name: "flute",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_14.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_11.mp3",
      audioSrc_2: "sound/dnd_imagesWithSound/006.mp3",
      text: "Свирель",
      answerTag: "flute",
    },
    {
      id: 4,
      name: "ratchet",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_15.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_9.mp3",
      audioSrc_2: "sound/dnd_imagesWithSound/004.mp3",
      text: "Трещотка",
      answerTag: "ratchet",
    },
    {
      id: 5,
      name: "spoons",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_16.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_10.mp3",
      audioSrc_2: "sound/dnd_imagesWithSound/005.mp3",
      text: "Ложки",
      answerTag: "spoons",
    },
  ];

  renderDnDImagesWithSoundMarkup(arrayOfElements, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "dnd_soundToSomething_task-2";
  // массив входящих картинок (от 6 до 10 элементов),
  // поля imgSrc, text, audioSrc_2 заполняются опционально, если контента нет, оставлять ''
  // в поле answerTag вписывается слово по которому будет сверяться правильность сопоставления звука и картинки
  // поле id должно быть уникальным, т.к. по нему происходит воспроизведение звуков
  // в  audioSrc -  звуки для перетаскиваемых элементов
  // в  audioSrc_2 -  звуки для озвучки картинок
  const arrayOfElements = [
    {
      id: 1,
      name: "whistle",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_12.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_8.mp3",
      audioSrc_2: "",
      text: "Свистулька",
      answerTag: "whistle",
    },
    {
      id: 2,
      name: "balalaika",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_13.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_7.mp3",
      audioSrc_2: "",
      text: "Балалайка",
      answerTag: "balalaika",
    },
    {
      id: 3,
      name: "flute",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_14.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_11.mp3",
      audioSrc_2: "",
      text: "Свирель",
      answerTag: "flute",
    },
  ];

  renderDnDImagesWithSoundMarkup(arrayOfElements, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "dnd_soundToSomething_task-3";
  // массив входящих картинок (от 6 до 10 элементов),
  // поля imgSrc, text, audioSrc_2 заполняются опционально, если контента нет, оставлять ''
  // в поле answerTag вписывается слово по которому будет сверяться правильность сопоставления звука и картинки
  // поле id должно быть уникальным, т.к. по нему происходит воспроизведение звуков
  // в  audioSrc -  звуки для перетаскиваемых элементов
  // в  audioSrc_2 -  звуки для озвучки картинок
  const arrayOfElements = [
    {
      id: 1,
      name: "whistle",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_12.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_8.mp3",
      audioSrc_2: "",
      text: "",
      answerTag: "whistle",
    },
    {
      id: 2,
      name: "balalaika",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_13.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_7.mp3",
      audioSrc_2: "",
      text: "",
      answerTag: "balalaika",
    },
    {
      id: 3,
      name: "flute",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_14.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_11.mp3",
      audioSrc_2: "",
      text: "",
      answerTag: "flute",
    },
    {
      id: 4,
      name: "ratchet",
      imgSrc: "Images_1/dnd_imagesWithSound/DO_3-4_26_5_15.jpg",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_9.mp3",
      audioSrc_2: "",
      text: "",
      answerTag: "ratchet",
    },
  ];

  renderDnDImagesWithSoundMarkup(arrayOfElements, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "dnd_soundToSomething_task-4";
  // массив входящих картинок (от 6 до 10 элементов),
  // поля imgSrc, text, audioSrc_2 заполняются опционально, если контента нет, оставлять ''
  // в поле answerTag вписывается слово по которому будет сверяться правильность сопоставления звука и картинки
  // поле id должно быть уникальным, т.к. по нему происходит воспроизведение звуков
  // в  audioSrc -  звуки для перетаскиваемых элементов
  // в  audioSrc_2 -  звуки для озвучки картинок
  const arrayOfElements = [
    {
      id: 1,
      name: "whistle",
      imgSrc: "",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_8.mp3",
      audioSrc_2: "",
      text: "Свистулька",
      answerTag: "whistle",
    },
    {
      id: 2,
      name: "balalaika",
      imgSrc: "",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_7.mp3",
      audioSrc_2: "",
      text: "Балалайка",
      answerTag: "balalaika",
    },
    {
      id: 3,
      name: "flute",
      imgSrc: "",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_11.mp3",
      audioSrc_2: "",
      text: "Свирель",
      answerTag: "flute",
    },
    {
      id: 4,
      name: "ratchet",
      imgSrc: "",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_9.mp3",
      audioSrc_2: "",
      text: "Трещотка",
      answerTag: "ratchet",
    },
    {
      id: 5,
      name: "spoons",
      imgSrc: "",
      audioSrc: "sound/dnd_imagesWithSound/DO_3-4_26_5_10.mp3",
      audioSrc_2: "",
      text: "Ложки",
      answerTag: "spoons",
    },
  ];

  renderDnDImagesWithSoundMarkup(arrayOfElements, taskId);
})();

//ФУНКЦИЯ
function renderDnDImagesWithSoundMarkup(arrayOfElements, taskId) {
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  const dropId = "drop";
  const dragId = "drag";
  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };

  const taskWrapper = document.querySelector(`#${taskId}`);

  const dropBox = taskWrapper.querySelector(
    ".dnd_soundToSomething_dropPlaceWrapper"
  );
  const dragBox = taskWrapper.querySelector(
    ".dnd_soundToSomething_dragPlaceWrapper"
  );

  dropBox.insertAdjacentHTML(
    "beforeend",
    createDropPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );
  dragBox.insertAdjacentHTML(
    "beforeend",
    createDragPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  const audioFiles = taskWrapper.querySelectorAll(".dnd_imagesWithSound_audio");

  taskWrapper.addEventListener("pointerdown", mouseDown);

  btnReset.addEventListener("click", onBtnResetClick);

  dropBox.addEventListener("pointerdown", onDropBoxClick);

  taskWrapper.addEventListener("click", onIconClick);

  function onIconClick(e) {
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
  }

  function onDropBoxClick(event) {
    if (event.target.classList.contains("dnd_soundToSomething_dropPicture")) {
      scaleImage(event.target);
    }
  }

  function onBtnResetClick() {
    resetSound(soundSetStates);

    [...dropBox.children].forEach((item) => {
      if (item.children[1].children.length === 2) {
        getRandomPositionToCard(item.children[1].children[1]);
        removeActiveCardClass(item.children[1].children[1]);
        dragBox.appendChild(item.children[1].children[1]);
      }
      item.children[1].children[0].classList.remove("wrongChoice_answered");
    });

    draggingItem = null;
    taskWrapper.addEventListener("pointerdown", mouseDown);

    isGameStart = false;
    checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onBtnTestClick() {
    let winVar = 0;
    resetSound(soundSetStates);
    [...dropBox.children].forEach((item) => {
      if (item.children[1].children.length === 2) {
        if (
          item.children[1].children[0].attributes.getNamedItem("drop-data")
            .value ===
          item.children[1].children[1].attributes.getNamedItem("drag-data")
            .value
        ) {
          winVar += 1;

          addRightChoiceClass(item.children[1].children[1]);
        } else addWrongChoiceClass(item.children[1].children[1]);
      }
    });

    if (winVar === arrayOfElements.length) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
    taskWrapper.removeEventListener("pointerdown", mouseDown);
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    if (!event.target.classList.contains("dnd_soundToSomething_dragSoundBox"))
      return;

    draggingItem = event.target;
    draggingItem.style.touchAction = "none";

    const findIdx = [...dragBox.children].findIndex(
      (el) => el === draggingItem
    );

    draggingItem.style.cursor = "grabbing";

    let shiftX = event.clientX - draggingItem.getBoundingClientRect().left;
    let shiftY = event.clientY - draggingItem.getBoundingClientRect().top;

    // ЛИММИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
    //  (ПО УМОЛЧАНИЮ interact_zadanie - РОДИТЕЛЬ ВАШЕГО БЛОКА)
    let limits = {
      top: taskWrapper.offsetTop,
      right: taskWrapper.offsetWidth + taskWrapper.offsetLeft,
      bottom: taskWrapper.offsetHeight + taskWrapper.offsetTop,
      left: taskWrapper.offsetLeft,
    };

    function moveAt(pageX, pageY) {
      draggingItem.style.left = pageX - shiftX + "px";
      draggingItem.style.top = pageY - shiftY + "px";
    }

    let clickWithoutMove = true;
    resetSound(soundSetStates);
    function onMouseMove(event) {
      if (clickWithoutMove) {
        draggingItem.style.position = "absolute";
        draggingItem.style.zIndex = 1000;
        document.body.appendChild(draggingItem);
      }
      let newLocation = {
        x: limits.left,
        y: limits.top,
      };
      if (event.pageX > limits.right) {
        newLocation.x = limits.right;
      } else if (event.pageX > limits.left) {
        newLocation.x = event.pageX;
      }
      if (event.pageY > limits.bottom) {
        newLocation.y = limits.bottom;
      } else if (event.pageY > limits.top) {
        newLocation.y = event.pageY;
      }

      clickWithoutMove = false;
      moveAt(newLocation.x, newLocation.y);

      if (!event.composedPath().includes(draggingItem)) {
        window.addEventListener("pointerup", moveOut);
      }
      if (event.composedPath().includes(draggingItem)) {
        window.removeEventListener("pointerup", moveOut);
      }

      draggingItem.hidden = true;
      elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      draggingItem.hidden = false;

      if (!elemBelow) return;
    }
    document.addEventListener("pointermove", onMouseMove);

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
    function moveOut(e) {
      dragAppend(dragBox, draggingItem, findIdx);

      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }

    draggingItem.addEventListener("pointerup", onpointerup);

    function onpointerup() {
      draggingItem.style.cursor = "grab";

      document.removeEventListener("pointermove", onMouseMove);
      if (elemBelow) {
        if (
          elemBelow.classList.contains(
            "dnd_soundToSomething_dropPlace_soundBox"
          )
        ) {
          dropAppend(elemBelow.parentElement, draggingItem);

          isGameStart = true;
          checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
          elemBelow = null;
        } else {
          dragAppend(dragBox, draggingItem, findIdx);
        }
      }
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }

  function createDropPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        const isTitle =
          picture.text &&
          `<div class="dnd_soundToSomething_title">${picture.text}</div>`;
        const isSound =
          picture.audioSrc_2 &&
          `
          <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${dropId}_${picture.id}${taskId}">
          <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
          <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
          <audio class="dnd_imagesWithSound_audio" id="${dropId}_${picture.id}${taskId}" src="${picture.audioSrc_2}">
                    Your browser does not support the
                    <code>audio</code> element.
          </audio>
          </div>`;
        const isImage =
          picture.imgSrc &&
          `<div class="dnd_soundToSomething_dropPicture" style="background-image:url(${picture.imgSrc})"  draggable="false">
          </div>`;

        return `<div class="dnd_soundToSomething_dropPlace">
                    <div class="dnd_soundToSomething_dropPicture_box">
                        ${isImage}
                        ${isSound}
                        ${isTitle}
                    </div>
                    <div drop-data="${picture.answerTag}" class ="dnd_soundToSomething_dropPlace_box">
                        <div drop-data="${picture.answerTag}" class ="dnd_soundToSomething_dropPlace_soundBox"></div>
                    </div>
                </div>
                                `;
      })
      .join("");
  }
  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        return `
                <div class="dnd_soundToSomething_dragSoundBox" draggable="false" drag-data="${picture.answerTag}">
                <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${dragId}_${picture.id}${taskId}">
                <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                <audio class="dnd_imagesWithSound_audio" id="${dragId}_${picture.id}${taskId}" src="${picture.audioSrc}">
                          Your browser does not support the
                          <code>audio</code> element.
                </audio>
                </div>
                </div>
                                `;
      })
      .join("");
  }
}
