import {
  dropAppend,
  shuffleCards,
  addRightChoiceClass,
  addWrongChoiceClass,
  removeActiveCardClass,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "dnd_MoveWordsWithCopy_task-1";
  // массив предложений, в которые нужно вставлять слова
  // в место предложения в поле text, куда нужно будет перетаскивать слово,
  //  вставлять значок флажка &#9873;

  const textForRender = [
    {
      id: 1,
      text: "On Sunday &#9873; &#9873;",
    },
    {
      id: 2,
      text: "&#9873; &#9873; on Sunday",
    },
    {
      id: 3,
      text: "&#9873; &#9873; on Monday",
    },
    {
      id: 4,
      text: "On Monday &#9873; &#9873;",
    },
    {
      id: 5,
      text: "On Tuesday &#9873; &#9873;",
    },
    {
      id: 6,
      text: "&#9873; &#9873; on Tuesday",
    },
    {
      id: 7,
      text: "&#9873; &#9873; on Wednesday",
    },
    {
      id: 8,

      text: "On Wednesday &#9873; &#9873;",
    },
    {
      id: 9,
      text: "&#9873; &#9873; on Thursday",
    },
    {
      id: 10,
      text: "On Thursday &#9873; &#9873;",
    },
    {
      id: 11,
      text: "On Friday &#9873; &#9873;",
    },
    {
      id: 12,
      text: "&#9873; &#9873; on Friday",
    },
    {
      id: 13,
      text: "On Saturday &#9873; &#9873;",
    },
    {
      id: 14,
      text: "&#9873; &#9873; 	on Saturday",
    },
  ];

  // массив перетаскиваемых слов
  // в поле text указывается само перетаскиваемое слово
  // в поле answerTag в [] через запятую указываются номера полей для вставки (поля нумеруются по порядку сверху вниз),
  // в которые можно вставить данное слово
  const dragTextForRender = [
    {
      id: 1,
      text: "I",
      answerTag: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    },
    {
      id: 2,
      text: "do homework",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 3,
      text: "do sports",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 4,
      text: "eat ice-cream",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 5,
      text: "feed birds",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 6,
      text: "go home",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 7,
      text: "go to school",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 8,
      text: "have fun",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 9,
      text: "I have school",
      answerTag: [0],
    },
    {
      id: 10,
      text: "learn English",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 11,
      text: "meet friends",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 12,
      text: "play computer games",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 13,
      text: "read books",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 14,
      text: "sleep all day long",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    {
      id: 15,
      text: "watch cartoons",
      answerTag: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
  ];

  //сама функция, которая запускается, здесь ничего менять не нужно
  renderMoveWordsIntoSentenceWithCopyMarkup(
    textForRender,
    dragTextForRender,
    taskId
  );
})();
(() => {
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "dnd_MoveWordsWithCopy_task-2";
  // массив предложений, в которые нужно вставлять слова
  // в место предложения в поле text, куда нужно будет перетаскивать слово,
  //  вставлять значок флажка &#9873;

  const textForRender = [
    {
      id: 1,
      text: "I have got a lot of &#9873;",
    },
    {
      id: 2,
      text: "This is my &#9873;",
    },
    {
      id: 3,
      text: "It is  &#9873;",
    },
    {
      id: 4,
      text: "I like to &#9873; with my &#9873;",
    },
  ];

  // массив перетаскиваемых слов
  // в поле text указывается само перетаскиваемое слово
  // в поле answerTag в [] через запятую указываются номера полей для вставки (поля нумеруются по порядку сверху вниз),
  // в которые можно вставить данное слово
  const dragTextForRender = [
    {
      id: 1,
      text: "toys",
      answerTag: [1],
    },
    {
      id: 2,
      text: "car",
      answerTag: [2, 5],
    },
    {
      id: 3,
      text: "red",
      answerTag: [3],
    },
    {
      id: 4,
      text: "play",
      answerTag: [4],
    },
  ];

  //сама функция, которая запускается, здесь ничего менять не нужно
  renderMoveWordsIntoSentenceWithCopyMarkup(
    textForRender,
    dragTextForRender,
    taskId
  );
})();

//  ФУНКЦИЯ
function renderMoveWordsIntoSentenceWithCopyMarkup(
  textForRender,
  dragTextForRender,
  taskId
) {
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  const taskWrapper = document.getElementById(`${taskId}`);

  const dropBox = taskWrapper.querySelector(
    ".dnd_MoveWordsWithCopy_dropPlaceWrapper"
  );

  const dragBox = taskWrapper.querySelector(
    ".dnd_MoveWordsWithCopy_dragPlaceWrapper"
  );

  dropBox.insertAdjacentHTML(
    "beforeend",
    createDropPictureCardsMarkup(textForRender)
  );
  dragBox.insertAdjacentHTML(
    "beforeend",
    createDragPictureCardsMarkup(shuffleCards([...dragTextForRender]))
  );

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  const allSpans = taskWrapper.querySelectorAll(
    ".dnd_MoveWordsWithCopy_dropPlacePart"
  );

  taskWrapper.addEventListener("pointerdown", mouseDown);
  btnReset.addEventListener("click", onBtnResetClick);

  function onBtnResetClick() {
    [...allSpans].forEach((el) => {
      removeActiveCardClass(el);
      if (el.children.length > 0) {
        el.removeChild(el.firstElementChild);
      }
    });

    draggingItem = null;
    taskWrapper.addEventListener("pointerdown", mouseDown);

    isGameStart = false;
    checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onBtnTestClick() {
    taskWrapper.removeEventListener("pointerdown", mouseDown);

    let winCount = 0;

    [...allSpans].forEach((el, index) => {
      if (
        el.children[0]?.attributes
          .getNamedItem("drag-data")
          .value.includes(String(index + 1))
      ) {
        winCount += 1;
        addRightChoiceClass(el);
      } else addWrongChoiceClass(el);
    });

    if (winCount === [...allSpans].length) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
  }

  function changeIncomingString(str) {
    function changeSymbol(match) {
      return '<div class="dnd_MoveWordsWithCopy_dropPlacePart "></div>';
    }
    return str.replace(/&#9873;/gi, changeSymbol);
  }

  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        return `
                    <div class='dnd_MoveWordsWithCopy_dragPlace' drag-data="${picture.answerTag}">
                   ${picture.text}
                    </div>
                                          `;
      })
      .join("");
  }
  function createDropPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        const newText = changeIncomingString(picture.text);
        return `<div class="dnd_MoveWordsWithCopy_dropPlace " >

       ${newText}

        </div>
        `;
      })
      .join("");
  }

  function mouseDown(event) {
    let shiftX;
    let shiftY;
    if (event.button !== 0) return;
    if (event.target.classList.contains("dnd_MoveWordsWithCopy_dragPlace")) {
      if (
        !event.target.classList.contains(
          "dnd_MoveWordsWithCopy_dragPlace_clone"
        )
      ) {
        draggingItem = event.target.cloneNode(true);
        draggingItem.classList.add("dnd_MoveWordsWithCopy_dragPlace_clone");

        draggingItem.style.touchAction = "none";
        shiftX = event.clientX - event.target.getBoundingClientRect().left;
        shiftY = event.clientY - event.target.getBoundingClientRect().top;
      } else if (
        event.target.classList.contains("dnd_MoveWordsWithCopy_dragPlace_clone")
      ) {
        draggingItem = event.target;
        draggingItem.style.touchAction = "none";
        shiftX = event.clientX - draggingItem.getBoundingClientRect().left;
        shiftY = event.clientY - draggingItem.getBoundingClientRect().top;
      }
    } else {
      return;
    }

    draggingItem.style.touchAction = "none"; //ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ(МОЖНО УБРАТЬ И ПРОПИСАТЬ В СТИЛЬ САМОМУ ОБЪЕКТУ)
    draggingItem.style.cursor = "grabbing";

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
    draggingItem.style.visibility = "hidden";
    elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    draggingItem.style.visibility = "visible";

    function onMouseMove(event) {
      if (clickWithoutMove) {
        draggingItem.style.touchAction = "auto";
        draggingItem.style.position = "absolute";
        draggingItem.style.zIndex = 1000;
        taskWrapper.appendChild(draggingItem);
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
    taskWrapper.addEventListener("pointerup", onpointerup);

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
    function moveOut(e) {
      const elemUnderPount = document.elementFromPoint(e.clientX, e.clientY);
      if (elemUnderPount !== draggingItem) {
        draggingItem.remove();
      }
      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }
    // КОГДА КУРСОР В ЗОНЕ ДЛЯ ПЕРЕТАСКИВАНИЙ И ПОЛЬЗОВАТЕЛЬ ОТПУСТИЛ ЗАХВАТ ЭЛЕМЕНТА

    function onpointerup(e) {
      document.removeEventListener("pointermove", onMouseMove);
      const elemUnderPount = document.elementFromPoint(e.clientX, e.clientY);
      if (elemUnderPount !== draggingItem) {
        draggingItem.remove();
        taskWrapper.removeEventListener("pointerup", onpointerup);
        return;
      }
      // ЛОГИКА ОБРАБОТКИ ПОПАДАНИЯ НА НУЖНЫЙ БЛОК И НАОБОРОТ
      if (elemBelow) {
        if (
          elemBelow.closest(".dnd_MoveWordsWithCopy_dropPlacePart") &&
          elemBelow.closest(".dnd_MoveWordsWithCopy_dropPlacePart").children
            .length === 0
        ) {
          elemBelow = elemBelow.closest(".dnd_MoveWordsWithCopy_dropPlacePart");
          dropAppend(elemBelow, draggingItem);
          elemBelow = null;

          isGameStart = true;
          checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
        } else {
          draggingItem.remove();
        }
      } else {
        draggingItem.remove();
      }
      taskWrapper.removeEventListener("pointerup", onpointerup);
    }
  }
}
