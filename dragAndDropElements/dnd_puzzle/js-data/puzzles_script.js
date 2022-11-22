import {
  dropAppend,
  dragAppend,
  addRightChoiceClass,
  addWrongChoiceClass,
  removeActiveCardClass,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  const taskId = "puzzle_task-1";
  // Входящие данные:
  // важно соблюдать синтаксис, слово оборачивать одинарными ковычками и ставить между ними запятые

  const lettersPuzzle = ["robot", "table", "cat", "red", "doll"];

  renderPuzzle(taskId, lettersPuzzle);
})();

function renderPuzzle(taskId, lettersPuzzleArr) {
  let interaction = 0;
  let wordPuzzleDropWord = null;
  let draggingPuzzle = null;
  let draggingElemsWidth = null;
  let wordPuzzleLettersHeight = null;
  let wordPuzzleDropsHeight = null;
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  const taskWrapper = document.getElementById(`${taskId}`);
  const wordPuzzle_dropWrapper = taskWrapper.querySelector(
    ".wordPuzzle_dropWrapper"
  );
  const wordPuzzle_letters = taskWrapper.querySelector(".wordPuzzle_letters");

  const { btnReset, result } = getOldPanelLinks(taskWrapper);

  btnReset.addEventListener("click", resetPuzzle);
  taskWrapper.addEventListener("pointerdown", mouseDown);

  interaction === 0 && changeInteraction();

  function createSvgPuzzle() {
    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min)) + min;
    const rgb = `rgb(${getRandomInt(100, 255)},${getRandomInt(
      80,
      255
    )},${getRandomInt(80, 255)})`;
    return `<svg class="wordPuzzle_letter_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none" version="1.1"  style="width:100%" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g><path style="opacity:0.994" fill="${rgb}" d="M 304.5,0.5 C 342.422,-2.64579 366.255,14.0209 376,50.5C 378.575,68.2 374.575,84.2 364,98.5C 363.5,105.826 363.334,113.159 363.5,120.5C 408.835,120.333 454.168,120.5 499.5,121C 504.631,121.816 508.131,124.649 510,129.5C 510.5,176.165 510.667,222.832 510.5,269.5C 502.493,269.666 494.493,269.5 486.5,269C 468.839,255.88 449.505,252.88 428.5,260C 398.776,274.279 386.609,297.779 392,330.5C 399.236,355.069 415.403,369.903 440.5,375C 457.603,377.517 472.936,373.517 486.5,363C 494.493,362.5 502.493,362.334 510.5,362.5C 510.667,409.168 510.5,455.835 510,502.5C 508.833,506.333 506.333,508.833 502.5,510C 455.835,510.5 409.168,510.667 362.5,510.5C 362.334,502.493 362.5,494.493 363,486.5C 379.284,462.756 379.617,438.756 364,414.5C 340.264,387.698 312.764,383.198 281.5,401C 258.327,419.509 251.16,443.009 260,471.5C 262.245,476.997 265.245,481.997 269,486.5C 269.5,494.493 269.666,502.493 269.5,510.5C 222.832,510.667 176.165,510.5 129.5,510C 124.901,508.402 122.068,505.235 121,500.5C 120.5,454.835 120.333,409.168 120.5,363.5C 113.159,363.334 105.826,363.5 98.5,364C 79.3003,377.522 58.6336,380.189 36.5,372C 7.17816,356.517 -4.32184,332.35 2,299.5C 13.9742,266.586 37.4742,252.086 72.5,256C 82.2073,257.855 90.8739,261.855 98.5,268C 105.826,268.5 113.159,268.666 120.5,268.5C 120.333,222.832 120.5,177.165 121,131.5C 122.5,126 126,122.5 131.5,121C 177.165,120.5 222.832,120.333 268.5,120.5C 268.666,113.159 268.5,105.826 268,98.5C 255.8,82.3496 252.133,64.3496 257,44.5C 264.735,20.9263 280.568,6.25964 304.5,0.5 Z"/></g>
                </svg>`;
  }

  function changeInteraction() {
    removeActiveCardClass(wordPuzzle_dropWrapper);
    lettersPuzzleArr[interaction].split("").forEach((elem) => {
      const dropPlace = document.createElement("div");
      dropPlace.classList.add("wordPuzzle_dropWord");
      dropPlace.setAttribute("drop-data", elem);
      wordPuzzle_dropWrapper.appendChild(dropPlace);
    });

    const arrPuzz = [...lettersPuzzleArr.map((elem) => elem.split(""))];
    const randomLetters = [...arrPuzz][interaction].sort(() =>
      Math.random() > 0.5 ? 1 : -1
    );

    function sortedWord(random) {
      const randomWord = randomLetters.join("");
      const rightWord = lettersPuzzleArr[interaction];
      return randomWord === rightWord
        ? sortedWord(random.sort(() => (Math.random() > 0.5 ? 1 : -1)))
        : random;
    }

    sortedWord(randomLetters).forEach((elem) => {
      const div = document.createElement("div");
      div.classList.add("wordPuzzle_letter");
      div.setAttribute("drag-data", elem);
      const paragraph = document.createElement("p");
      paragraph.classList.add("wordPuzzle_letter_p");
      paragraph.append(elem);
      div.insertAdjacentHTML("afterbegin", createSvgPuzzle());
      div.appendChild(paragraph);
      wordPuzzle_letters.appendChild(div);
    });
    wordPuzzleDropWord = document.querySelectorAll(".wordPuzzle_dropWord");
    draggingPuzzle = document.querySelectorAll(".wordPuzzle_letter");
    draggingElemsWidth = `${
      lettersPuzzleArr[interaction].length *
      (draggingPuzzle[0].clientWidth - draggingPuzzle[0].clientWidth * 0.2)
    }px`;
    wordPuzzleLettersHeight = `${20 + draggingPuzzle[0].clientWidth}px`;
    wordPuzzleDropsHeight = `${
      draggingPuzzle[0].clientWidth + draggingPuzzle[0].clientWidth * 0.1
    }px`;
    wordPuzzle_letters.style.height = wordPuzzleLettersHeight;
    wordPuzzle_dropWrapper.style.width = draggingElemsWidth;
    wordPuzzleDropWord.forEach((elem) => {
      elem.style.height = wordPuzzleDropsHeight;
    });
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    if (event.target.classList.contains("wordPuzzle_letter")) {
      draggingItem = event.target;
    } else return;

    wordPuzzle_dropWrapper.style.backgroundColor = "#ffff";
    const elemDraggingBanBorder = taskWrapper; //элемент за границы которого запрещён вылет перетаскиваемой фигуры
    const elemDraggingStartPlace = wordPuzzle_letters; //элемент первоначального расположения перетаскиваемых фигур (стартовое состояние)

    draggingItem.style.touchAction = "none"; //ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ(МОЖНО УБРАТЬ И ПРОПИСАТЬ В СТИЛЬ САМОМУ ОБЪЕКТУ)
    draggingItem.style.cursor = "grabbing";
    let shiftX = event.clientX - draggingItem.getBoundingClientRect().left;
    let shiftY = event.clientY - draggingItem.getBoundingClientRect().top;

    // ЛИММИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
    //  (ПО УМОЛЧАНИЮ interact_zadanie - РОДИТЕЛЬ ВАШЕГО БЛОКА)
    let limits = {
      top: elemDraggingBanBorder.offsetTop,
      right:
        elemDraggingBanBorder.offsetWidth + elemDraggingBanBorder.offsetLeft,
      bottom:
        elemDraggingBanBorder.offsetHeight + elemDraggingBanBorder.offsetTop,
      left: elemDraggingBanBorder.offsetLeft,
    };

    function moveAt(pageX, pageY) {
      draggingItem.style.left = pageX - shiftX + "px";
      draggingItem.style.top = pageY - shiftY + "px";
    }

    let clickWithoutMove = true;
    let currentDroppable = null;

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
      // ОБРАБОТКА СОБЫТИЯ НАХОЖДЕНИЯ НАД БЛОКОМ И ВЫЛЕТА ИЗ НЕГО (ПО НЕОБХОДИМИОСТИ)

      let droppableBelow = elemBelow.closest(".wordPuzzle_dropWord"); // БЕРЁМ НУЖНЫЙ БЛОК

      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          // ЛОГИКА ОБРАБОТКИ ПРОЦЕССА "ВЫЛЕТА" ИЗ DROPPABLE
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        // ЛОГИКА ОБРАБОТКИ ПРОЦЕССА, КОГДА МЫ "ВЛЕТАЕМ" В ЭЛЕМЕНТ
        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    }
    // КОГДА НАД ВЫБРАННЫМ БЛОКОМ
    function enterDroppable(currentDroppable) {
      !currentDroppable.hasChildNodes() &&
        currentDroppable.classList.add("wordPuzzle_backgroundDrop");
    }
    // КОДА ВЫЛЕТЕЛИ ИЗ БЛОКА
    function leaveDroppable(currentDroppable) {
      currentDroppable.classList.remove("wordPuzzle_backgroundDrop");
    }

    document.addEventListener("pointermove", onMouseMove);

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
    function moveOut(e) {
      dragAppend(elemDraggingStartPlace, draggingItem);
      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }
    draggingItem.addEventListener("pointerup", onpointerup);
    // КОГДА КУРСОР В ЗОНЕ ДЛЯ ПЕРЕТАСКИВАНИЙ И ПОЛЬЗОВАТЕЛЬ ОТПУСТИЛ ЗАХВАТ ЭЛЕМЕНТА
    function onpointerup() {
      document.removeEventListener("pointermove", onMouseMove);
      draggingItem.style.cursor = "grab";

      if (clickWithoutMove) {
        dropAppend(elemDraggingStartPlace, draggingItem);
      }

      // ЛОГИКА ОБРАБОТКИ ПОПАДАНИЯ НА НУЖНЫЙ БЛОК И НАОБОРОТ
      if (elemBelow.classList.contains("wordPuzzle_dropWord")) {
        dropAppend(elemBelow, draggingItem);
        isGameStart = true;
      } else {
        dropAppend(elemDraggingStartPlace, draggingItem);
      }
      currentDroppable &&
        currentDroppable.classList.remove("wordPuzzle_backgroundDrop");

      checkPuzzleWord();
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }

  function resetPuzzle() {
    taskWrapper.addEventListener("pointerdown", mouseDown);

    interaction = 0;
    while (wordPuzzle_dropWrapper.firstChild) {
      wordPuzzle_dropWrapper.removeChild(wordPuzzle_dropWrapper.lastChild);
    }
    while (wordPuzzle_letters.firstChild) {
      wordPuzzle_letters.removeChild(wordPuzzle_letters.lastChild);
    }
    changeInteraction();
    isGameStart = false;
    feedBackChanger("reset", isGameStart, result);
  }

  function checkPuzzleWord() {
    let gameCount = 0;
    let winCount = 0;
    wordPuzzle_dropWrapper.childNodes.forEach((item) => {
      if (item.childNodes.length > 0) {
        gameCount++;

        if (
          item.attributes.getNamedItem("drop-data").value ===
          item.childNodes[0].attributes.getNamedItem("drag-data").value
        ) {
          winCount++;
        }
      }
    });

    if (winCount === lettersPuzzleArr[interaction].split("").length) {
      addRightChoiceClass(wordPuzzle_dropWrapper);
      btnReset.removeEventListener("click", resetPuzzle);
      taskWrapper.removeEventListener("pointerdown", mouseDown);

      setTimeout(() => {
        interaction = interaction + 1;

        if (
          lettersPuzzleArr[interaction] &&
          interaction < lettersPuzzleArr.length
        ) {
          while (wordPuzzle_dropWrapper.firstChild) {
            wordPuzzle_dropWrapper.firstChild.remove();
          }
          draggingItem = null;
          changeInteraction();
          taskWrapper.addEventListener("pointerdown", mouseDown);
          btnReset.addEventListener("click", resetPuzzle);
        } else {
          btnReset.addEventListener("click", resetPuzzle);
          feedBackChanger("win", isGameStart, result);
        }
      }, 2500);
    } else if (
      gameCount === lettersPuzzleArr[interaction].split("").length &&
      winCount !== lettersPuzzleArr[interaction].split("").length
    ) {
      taskWrapper.removeEventListener("pointerdown", mouseDown);
      btnReset.removeEventListener("click", resetPuzzle);
      addWrongChoiceClass(wordPuzzle_dropWrapper);
      setTimeout(() => {
        if (
          lettersPuzzleArr[interaction] &&
          interaction < lettersPuzzleArr.length
        ) {
          while (wordPuzzle_dropWrapper.firstChild) {
            wordPuzzle_dropWrapper.firstChild.remove();
          }
          draggingItem = null;
          taskWrapper.addEventListener("pointerdown", mouseDown);
          btnReset.addEventListener("click", resetPuzzle);
          changeInteraction();
        }
      }, 2500);
    }
  }
}
