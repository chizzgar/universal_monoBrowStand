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
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "dnd_MoveWordsNoCopy_task-1";

  // массив предложений, в которые нужно вставлять слова
  //title - заголовок для текста
  // в место предложения в поле text, куда нужно будет перетаскивать слово,
  //  вставлять значок флажка &#9873;
  const textForRender = [
    {
      id: 1,
      title: "",
      text: "I have got a lot of &#9873;",
    },
    {
      id: 2,
      title: "",

      text: "This is my &#9873;",
    },
    {
      id: 3,
      title: "",

      text: "It is  &#9873;",
    },
    {
      id: 4,
      title: "",

      text: "I like to &#9873; with my &#9873;",
    },
  ];

  // массив перетаскиваемых слов
  // в поле text указывается само перетаскиваемое слово
  // в поле tag в [] через запятую указываются номера полей для вставки (поля нумеруются по порядку сверху вниз),
  // в которые можно вставить данное слово
  const dragTextForRender = [
    {
      id: 1,
      text: "toys",
      tag: [1],
    },
    {
      id: 2,
      text: "car",
      tag: [2, 5],
    },
    {
      id: 3,
      text: "red",
      tag: [3],
    },
    {
      id: 4,
      text: "play",
      tag: [4],
    },
    {
      id: 5,
      text: "car",
      tag: [2, 5],
    },
  ];

  //сама функция, которая запускается, здесь ничего менять не нужно
  renderMoveWordsIntoSentenceWithoutCopyMarkup(
    textForRender,
    dragTextForRender,
    taskId
  );
})();
(() => {
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "dnd_MoveWordsNoCopy_task-2";
  // массив предложений, в которые нужно вставлять слова
  // в место предложения в поле text, куда нужно будет перетаскивать слово,
  //  вставлять значок флажка &#9873;
  const textForRender = [
    {
      id: 1,
      title: "Seva",
      text: "I go to school five days a week. I like school. We learn many things. I have four lessons on M &#9873;, W &#9873; and Fridays. We read, &#9873; and write every day. On Tuesdays and T &#9873; I have five lessons. We learn English and sing. We do sports &#9873; days a week. On Saturdays and Sundays I read &#9873; and play games.",
    },
    {
      id: 2,
      title: "Polina",
      text: "I have school &#9873; days a week. I am a good student. I have five lessons on T &#9873;, Wednesdays and Thursdays. We count, write and learn &#9873;. On Mondays, F&#9873; and Saturdays I have four lessons. We read and learn French. We draw and do &#9873; on Wednesdays, Thursdays and S &#9873;. On Mondays, Tuesdays and Fridays we &#9873; and sing. On Sundays I &#9873; all day long.",
    },
  ];

  // массив перетаскиваемых слов
  // в поле text указывается само перетаскиваемое слово
  // в поле tag в [] через запятую указываются номера полей для вставки (поля нумеруются по порядку сверху вниз),
  // в которые можно вставить данное слово
  const dragTextForRender = [
    {
      id: 1,
      text: "ednesdays",
      tag: [2],
    },
    {
      id: 2,
      text: "books",
      tag: [6],
    },
    {
      id: 3,
      text: "sports",
      tag: [11],
    },
    {
      id: 4,
      text: "sleep",
      tag: [14],
    },
    {
      id: 5,
      text: "count",
      tag: [3],
    },
    {
      id: 6,
      text: "hursdays",
      tag: [4],
    },
    {
      id: 7,
      text: "ondays",
      tag: [1],
    },
    {
      id: 8,
      text: "three",
      tag: [5],
    },
    {
      id: 9,
      text: "aturdays",
      tag: [12],
    },
    {
      id: 10,
      text: "six",
      tag: [7],
    },
    {
      id: 11,
      text: "ridays",
      tag: [10],
    },
    {
      id: 12,
      text: "dance",
      tag: [13],
    },
    {
      id: 13,
      text: "uesdays",
      tag: [8],
    },
    {
      id: 14,
      text: "English",
      tag: [9],
    },
  ];

  //сама функция, которая запускается, здесь ничего менять не нужно
  renderMoveWordsIntoSentenceWithoutCopyMarkup(
    textForRender,
    dragTextForRender,
    taskId
  );
})();

//  ФУНКЦИЯ
function renderMoveWordsIntoSentenceWithoutCopyMarkup(
  textForRender,
  dragTextForRender,
  taskId
) {
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  const taskWrapper = document.getElementById(`${taskId}`);

  const dropBox = taskWrapper.querySelector(
    ".dnd_MoveWordsNoCopy_dropPlaceWrapper"
  );

  const dragBox = taskWrapper.querySelector(
    ".dnd_MoveWordsNoCopy_dragPlaceWrapper"
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
    ".dnd_MoveWordsNoCopy_dropPlacePart"
  );

  taskWrapper.addEventListener("pointerdown", mouseDown);
  btnReset.addEventListener("click", onBtnResetClick);

  function onBtnResetClick() {
    [...allSpans].forEach((el, index) => {
      removeActiveCardClass(el);
      if (el.children.length > 0) {
        let randomPos = Math.floor(Math.random() * 12);

        el.firstElementChild.style.order = randomPos;

        dragBox.appendChild(el.firstElementChild);
      }
      taskWrapper.addEventListener("pointerdown", mouseDown);
    });

    draggingItem = null;

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
      return '<div class="dnd_MoveWordsNoCopy_dropPlacePart"></div>';
    }
    return str.replace(/&#9873;/gi, changeSymbol);
  }

  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        return `
                    <div class='dnd_MoveWordsNoCopy_dragPlace' drag-data="${picture.tag}">
                   ${picture.text}
                    </div>
                                          `;
      })
      .join("");
  }
  function createDropPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        const isTitle =
          picture.title &&
          `<div class="dnd_MoveWordsNoCopy_dropPlaceTitle">${picture.title}</div>`;
        const newText = changeIncomingString(picture.text);
        return `<div class="dnd_MoveWordsNoCopy_dropPlace" >
        ${isTitle}
        <div class="dnd_MoveWordsNoCopy_dropPlaceText" drag-data="${picture.tag}">${newText}</div>

        </div>
        `;
      })
      .join("");
  }

  function mouseDown(event) {
    if (event.button !== 0) return;

    if (!event.target.classList.contains("dnd_MoveWordsNoCopy_dragPlace"))
      return;

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

    elemBelow = document.elementFromPoint(event.clientX, event.clientY);

    let clickWithoutMove = true;
    function onMouseMove(event) {
      if (clickWithoutMove) {
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

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
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

      if (elemBelow.classList.contains("dnd_MoveWordsNoCopy_dropPlacePart")) {
        dropAppend(elemBelow, draggingItem);

        isGameStart = true;
        checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
      } else {
        dragAppend(dragBox, draggingItem, findIdx);
      }
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }
}
