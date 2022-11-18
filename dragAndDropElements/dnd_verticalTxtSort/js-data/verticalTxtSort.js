import {
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

//максимальное количество элементов:7-8
//text - содержимое блока с текстом
//audioSrc - путь к аудиофайлу(опционально)
//если не надо оставляем пустые кавычки "" БЕЗ ПРОБЕЛА!!!
//

(() => {
  const taskId = "verticalTxtSort_task-1";

  const data = [
    {
      id: 1,
      text: "1 Береза",
      audioSrc: "sound/007.mp3",
    },
    {
      id: 2,
      text: "2 Дуб",
      audioSrc: "sound/008.mp3",
    },
    {
      id: 3,
      text: "3 Ель",
      audioSrc: "sound/009.mp3",
    },
    {
      id: 4,
      text: "4 Сосна",
      audioSrc: "sound/011.mp3",
    },
  ];

  renderVerticalTxtSort(data, taskId);
})();

function renderVerticalTxtSort(data, taskId) {
  let isGameStart = false;
  let targetItem;
  let draggingItem;
  let elemBelow;
  let shiftY;
  const taskWrapper = document.querySelector(`#${taskId}`);

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  const sort_list = taskWrapper.querySelector(".verticalTxtSort_task_list");

  const soundDataAttribute = "drop-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };

  sort_list.insertAdjacentHTML(
    "beforeend",
    createListMarkup(shuffleCards([...data]))
  );
  shuffleTracing();

  let audioFiles = taskWrapper.querySelectorAll(".verticalTxtSort_audio");

  taskWrapper.addEventListener("pointerdown", mousDownListner);
  btnReset.addEventListener("click", resetTask);

  taskWrapper.addEventListener("click", onIconClick);

  function mousDownListner(e) {
    if (e.target.classList.contains("verticalTxtSort_task_item")) {
      mouseDown(e);
    }
  }

  function onIconClick(e) {
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
  }

  function shuffleTracing() {
    let winVar = 0;
    let cards = taskWrapper.querySelectorAll(".verticalTxtSort_task_item");

    cards.forEach((item, index) => {
      if (index + 1 === +item.getAttribute("data-id")) {
        winVar++;
      }
    });
    if (winVar === data.length) {
      resetTask();
    }
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    if (event.target.classList.contains("verticalTxtSort_task_item")) {
      targetItem = event.target;
      targetItem.classList.add("verticalTxtSort_selected");
      draggingItem = event.target.cloneNode(true);

      draggingItem.style.touchAction = "none"; //ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ(МОЖНО УБРАТЬ И ПРОПИСАТЬ В СТИЛЬ САМОМУ ОБЪЕКТУ)

      draggingItem.style.position = "absolute";
      draggingItem.style.zIndex = 100;

      event.target.parentElement.append(draggingItem);
      shiftY =
        event.target.parentElement.getBoundingClientRect().top +
        (event.clientY - event.target.getBoundingClientRect().top);
      moveAt(event.pageY);
    }

    draggingItem.style.cursor = "grabbing";
    // ЛИММИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
    //  (ПО УМОЛЧАНИЮ interact_zadanie - РОДИТЕЛЬ ВАШЕГО БЛОКА
    let limits = {
      top: taskWrapper.offsetTop,
      right: taskWrapper.offsetWidth + taskWrapper.offsetLeft,
      bottom: taskWrapper.offsetHeight + taskWrapper.offsetTop,
      left: taskWrapper.offsetLeft,
    };

    function moveAt(pageY) {
      draggingItem.style.top = pageY - shiftY + "px";
    }

    elemBelow = document.elementFromPoint(event.clientX, event.clientY);

    let clickWithoutMove = true;

    function onMouseMove(event) {
      clickWithoutMove = false;
      draggingItem.style.touchAction = "none";

      isGameStart = true;
      checkButton_classList_changer(isGameStart, checkingTask, btnTest);

      moveAt(event.pageY);
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

      moveAt(newLocation.y);

      draggingItem.style.visibility = "hidden";
      elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      draggingItem.style.visibility = "visible";
      if (!elemBelow) return;

      if (
        elemBelow.classList.contains("verticalTxtSort_task_item") &&
        elemBelow.innerText !== draggingItem.innerText
      ) {
        const nextElement = getNextElement(event.clientY, elemBelow);
        if (draggingItem.parentNode.contains(nextElement)) {
          draggingItem.parentNode.insertBefore(targetItem, nextElement);
        }
      }

      function getNextElement(cursorPosition, currentElement) {
        const currentElementCoord = currentElement.getBoundingClientRect();
        const currentElementCenter =
          currentElementCoord.y + currentElementCoord.height / 2;
        let nextElement =
          cursorPosition < currentElementCenter
            ? currentElement
            : currentElement.nextElementSibling;
        return nextElement;
      }
    }

    taskWrapper.addEventListener("pointermove", onMouseMove);
    document.addEventListener("pointerup", onpointerup);

    // КОГДА КУРСОР В ЗОНЕ ДЛЯ ПЕРЕТАСКИВАНИЙ И ПОЛЬЗОВАТЕЛЬ ОТПУСТИЛ ЗАХВАТ ЭЛЕМЕНТА

    function onpointerup() {
      resetSound(soundSetStates);
      taskWrapper.removeEventListener("pointermove", onMouseMove);
      draggingItem.remove();
      targetItem.classList.remove("verticalTxtSort_selected");
      document.removeEventListener("pointerup", onpointerup);
    }
  }

  function resetTask() {
    resetSound(soundSetStates);
    taskWrapper.addEventListener("pointerdown", mousDownListner);
    let answers = taskWrapper.querySelectorAll(".verticalTxtSort_task_item");
    shuffleCards([...answers]).forEach((item) => {
      sort_list.append(item);
      removeActiveCardClass(item);
    });
    shuffleTracing();

    isGameStart = false;
    checkButton_classList_changer(isGameStart, checkingTask, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function checkingTask() {
    resetSound(soundSetStates);
    let winVar = 0;
    let elements = taskWrapper.querySelectorAll(".verticalTxtSort_task_item");
    elements.forEach((item, index) => {
      if (index + 1 === +item.getAttribute("data-id")) {
        winVar++;
        addRightChoiceClass(item);
      } else addWrongChoiceClass(item);
    });

    if (winVar === data.length) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
    taskWrapper.removeEventListener("pointerdown", mousDownListner);
  }

  function createListMarkup(data) {
    return data
      .map((picture) => {
        const isSound =
          picture.audioSrc &&
          `
                          <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${picture.id}${taskId}">
                            <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                            <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                            <audio class="verticalTxtSort_audio" id='${picture.id}${taskId}' src=${picture.audioSrc} style="display:none !important">
                                  Your browser does not support the <code>audio</code> element.
                                </audio>
                          </div>`;

        return `
                <div class="verticalTxtSort_task_item oneMultiChoice_border" data-id=${picture.id}>
                   ${isSound}
                   ${picture.text}
                </div>
                `;
      })
      .join("");
  }
}
