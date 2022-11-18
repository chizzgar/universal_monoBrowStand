import {
  dropAppend,
  dragAppend,
  shuffleCards,
  addRightChoiceClass,
  addWrongChoiceClass,
  removeActiveCardClass,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  const taskId = "alphabetSimple_task-1";

  const data = [
    {
      id: "al_1",
      letter: "A a",
    },
    {
      id: "al_2",
      letter: "B b",
    },
    {
      id: "al_3",
      letter: "C c",
    },
    {
      id: "al_4",
      letter: "D d",
    },
    {
      id: "al_5",
      letter: "E e",
    },
    {
      id: "al_6",
      letter: "F f",
    },
    {
      id: "al_7",
      letter: "G g",
    },
    {
      id: "al_8",
      letter: "H h",
    },
    {
      id: "al_9",
      letter: "I i",
    },
    {
      id: "al_10",
      letter: "J j",
    },
    {
      id: "al_11",
      letter: "K k",
    },
    {
      id: "al_12",
      letter: "L l",
    },
    {
      id: "al_13",
      letter: "M m",
    },
    {
      id: "al_14",
      letter: "N n",
    },
    {
      id: "al_15",
      letter: "O o",
    },
    {
      id: "al_16",
      letter: "P p",
    },
    {
      id: "al_17",
      letter: "Q q",
    },
    {
      id: "al_18",
      letter: "R r",
    },
    {
      id: "al_19",
      letter: "S s",
    },
    {
      id: "al_20",
      letter: "T t",
    },
    {
      id: "al_21",
      letter: "U u",
    },
    {
      id: "al_22",
      letter: "V v",
    },
    {
      id: "al_23",
      letter: "W w",
    },
    {
      id: "al_24",
      letter: "X x",
    },
    {
      id: "al_25",
      letter: "Y y",
    },
    {
      id: "al_26",
      letter: "Z z",
    },
  ];

  renderAlphabetSimple(data, taskId);
})();

function renderAlphabetSimple(data, taskId) {
  let isGameStart = false;
  let draggingItem;
  let elemBelow;
  let shiftX;
  let shiftY;
  const taskWrapper = document.querySelector(`#${taskId}`);

  const alphabetDropPlace = taskWrapper.querySelector(
    ".alphabetSimpleDropPlace_simple"
  );
  const alphabetDragPlace = taskWrapper.querySelector(
    ".alphabetSimpleDragPlace_simple"
  );
  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  createLettersMarkup(data);

  const letterCard_drop = document.querySelectorAll(".alphabetSimpleCard_drop");

  taskWrapper.addEventListener("pointerdown", mouseDown);
  btnTest.addEventListener("click", taskChecking);
  btnReset.addEventListener("click", resetTask);

  function createLettersMarkup(data) {
    data.forEach((elem) => {
      const dropPalce = document.createElement("div");
      dropPalce.classList.add("alphabetSimpleCard_drop");
      dropPalce.style.display = "block";
      dropPalce.setAttribute("drop-data", elem.id);
      alphabetDropPlace.appendChild(dropPalce);
    });

    shuffleCards(data).forEach((elem) => {
      const div = document.createElement("div");
      div.classList.add("alphabetSimpleCard_drag");
      div.classList.add("oneMultiChoice_border");
      div.setAttribute("drag-data", elem.id);
      div.append(elem.letter);
      alphabetDragPlace.appendChild(div);
    });
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    if (event.target.classList.contains("alphabetSimpleCard_drag")) {
      draggingItem = event.target;
    } else return;

    const findIdx = [...alphabetDragPlace.children].findIndex(
      (el) => el === draggingItem
    );

    draggingItem.classList.remove("alphabetSimpleCard_drag_active");

    const elemDraggingStartPlace = alphabetDragPlace; //элемент первоначального расположения перетаскиваемых фигур (стартовое состояние)

    draggingItem.style.touchAction = "none"; //ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ(МОЖНО УБРАТЬ И ПРОПИСАТЬ В СТИЛЬ САМОМУ ОБЪЕКТУ)
    draggingItem.style.cursor = "grabbing";
    shiftX = event.clientX - event.target.getBoundingClientRect().left;
    shiftY = event.clientY - event.target.getBoundingClientRect().top;

    // ЛИММИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
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

    elemBelow = document.elementFromPoint(event.clientX, event.clientY);

    let clickWithoutMove = true;
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

      draggingItem.style.visibility = "hidden";
      elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      draggingItem.style.visibility = "visible";

      if (!elemBelow) return;
    }

    document.addEventListener("pointermove", onMouseMove);

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
    function moveOut(e) {
      const elemUnderPount = document.elementFromPoint(e.clientX, e.clientY);
      if (elemUnderPount !== draggingItem) {
        dragAppend(elemDraggingStartPlace, draggingItem, findIdx);
      }
      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }
    draggingItem.addEventListener("pointerup", onpointerup);

    // КОГДА КУРСОР В ЗОНЕ ДЛЯ ПЕРЕТАСКИВАНИЙ И ПОЛЬЗОВАТЕЛЬ ОТПУСТИЛ ЗАХВАТ ЭЛЕМЕНТА
    function onpointerup() {
      draggingItem.style.cursor = "grab";
      if (clickWithoutMove) {
        dragAppend(elemDraggingStartPlace, draggingItem, findIdx);
      }
      document.removeEventListener("pointermove", onMouseMove);

      // ЛОГИКА ОБРАБОТКИ ПОПАДАНИЯ НА НУЖНЫЙ БЛОК И НАОБОРОТ
      if (elemBelow.classList.contains("alphabetSimpleCard_drop")) {
        draggingItem.classList.add("alphabetSimpleCard_drag_active");
        dropAppend(elemBelow, draggingItem);
        isGameStart = true;
        checkButton_classList_changer(isGameStart, taskChecking, btnTest);
      } else {
        dragAppend(elemDraggingStartPlace, draggingItem, findIdx);
      }
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }

  function resetTask() {
    letterCard_drop.forEach((elem) => {
      if (elem.firstChild) {
        elem.firstChild.classList.remove("alphabetSimpleCard_drag_active");
        removeActiveCardClass(elem.firstChild);
        dragAppend(alphabetDragPlace, elem.firstChild);
      }
    });
    taskWrapper.addEventListener("pointerdown", mouseDown);

    isGameStart = false;
    checkButton_classList_changer(isGameStart, taskChecking, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function taskChecking() {
    taskWrapper.removeEventListener("pointerdown", mouseDown);
    let winCount = 0;
    letterCard_drop.forEach((elem) => {
      if (
        !!elem.firstChild?.attributes.getNamedItem("drag-data").value &&
        elem.attributes.getNamedItem("drop-data").value ===
          elem.firstChild.attributes.getNamedItem("drag-data").value
      ) {
        winCount++;
        addRightChoiceClass(elem.firstChild);
      } else if (elem.firstChild) {
        addWrongChoiceClass(elem.firstChild);
      }
    });
    if (winCount === data.length) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
  }
}
