import {
  dropAppend,
  dragAppend,
  getRandomPositionToCard,
  checkingAnswerReset,
  checkingAnswerNegative,
  checkingAnswerPositive,
  shuffleCards,
  addRightChoiceClass,
  addWrongChoiceClass,
  removeActiveCardClass,
  toggleOpacityAndEventsElement,
  renderCheckPanel,
  getCheckPanelElements,
} from "../../../_common_files/common_scripts.js";

(() => {
   // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
   const taskId = "chronoNum_task-1"
  // массив входящих данных (максимум 9-10 элементов),
  // в поле text указывается число
  // в поле answerTag указывается наличие(true) или отсутствие(false) элемента для перетаскивания(пропуск)
  const arrayOfElements = [
    {
      id: 1,
      text: "s",
      answerTag: "true",
    },
    {
      id: 2,
      text: "i",
      answerTag: "true",
    },
    {
      id: 3,
      text: "t",
      answerTag: "true",
    },
    {
      id: 4,
      text: " ",
      answerTag: "true",
    },
    {
      id: 5,
      text: "d",
      answerTag: "true",
    },
    {
      id: 6,
      text: "o",
      answerTag: "true",
    },
    {
      id: 7,
      text: "w",
      answerTag: "true",
    },
    {
      id: 8,
      text: "n",
      answerTag: "true",
    }
  ];

  renderNumberChronology(arrayOfElements, taskId);
})();


function renderNumberChronology(arrayOfElements, taskId) {
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  const taskWrapper = document.getElementById(`${taskId}`)
  const dropBox = taskWrapper.querySelector(".chronoNum_dropPlaceWrapper");
  const dragBox = taskWrapper.querySelector(".chronoNum_dragPlaceWrapper");

  dropBox.insertAdjacentHTML(
    "beforeend",
    createDropPictureCardsMarkup(arrayOfElements)
  );
  dragBox.insertAdjacentHTML(
    "beforeend",
    createDragPictureCardsMarkup(shuffleCards([...arrayOfElements]))
  );
  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);

  taskWrapper.addEventListener("pointerdown", mouseDown);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  function createDropPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        return `<div class="chronoNum_dropPlace-border" drop-data="${picture.text}">
        <div class="chronoNum_dropPlace" drop-data="${picture.text}">

                  </div>
              </div>
             `;
      })
      .join("");
  }
  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        if (picture.answerTag === "true") {
          return `
              <div class="chronoNum_dragPlace oneMultiChoice_border" drag-data="${picture.text}" draggable="false" >${picture.text}</div>
              `;
        }
      })
      .join("");
  }

  function onBtnResetClick() {
    [...dropBox.children].forEach((item) => {
      if (item.children.length > 1) {
        getRandomPositionToCard(item.children[1]);
        removeActiveCardClass(item.children[1]);
        dragBox.appendChild(item.children[1]);
      }
    });
    checkingAnswerReset(controlsBox, infoBox);
    taskWrapper.addEventListener("pointerdown", mouseDown);
    draggingItem = null;
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
  }

  function onBtnTestClick() {
    taskWrapper.removeEventListener("pointerdown", mouseDown);

    let winCount = 0;

    [...dropBox.children].forEach((item, index) => {
      if (item.children[1]) {
        if (
          item.children[1].getAttribute("drag-data") ===
          item.getAttribute("drop-data")
        ) {
          winCount += 1;
          addRightChoiceClass(item.children[1]);
        } else addWrongChoiceClass(item.children[1]);
      }
    });
    let temp = 0;
    arrayOfElements.forEach((item) => {
      if (item.answerTag === "true") {
        temp++;
      }
    });
    if (winCount === temp) {
      checkingAnswerPositive(controlsBox, infoBox);
    } else {
      checkingAnswerNegative(controlsBox, infoBox);
    }
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    if (!event.target.classList.contains("chronoNum_dragPlace")) return;

    draggingItem = event.target;
    // находим индекс элемента, который берем в списке отрисованных. dragBox - контейнер для перетаскиваемых элементов
    const findIdx = [...dragBox.children].findIndex(
      (el) => el === draggingItem
    );
    draggingItem.style.touchAction = "none";
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

    // elemBelow = document.elementFromPoint(event.clientX, event.clientY);
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
    function moveOut(e) {
      dragAppend(dragBox, draggingItem, findIdx);
      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }

    draggingItem.addEventListener("pointerup", onpointerup);

    function onpointerup() {
      draggingItem.style.cursor = "grab";

      if (clickWithoutMove) {
        dragAppend(dragBox, draggingItem, findIdx);
        return document.removeEventListener("pointermove", onMouseMove);
      }
      document.removeEventListener("pointermove", onMouseMove);

      if (elemBelow.classList.contains("chronoNum_dropPlace")) {
        dropAppend(elemBelow.parentElement, draggingItem);
        // открываем кнопку ПРОВЕРИТЬ
        if (!isGameStart) {
          toggleOpacityAndEventsElement(btnTest);
          isGameStart = true;
        }
      } else {
        dragAppend(dragBox, draggingItem, findIdx);
      }
      elemBelow = null;
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }
}
