import {
  scaleImage,
  dropAppend,
  dragAppend,
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
  const taskId = "task-1"
  // порядок перетаскивания: одна картинка в одно поле
  // массивы входящих данных:
  // 1) arrayOfDropElements - минимум 3 максимум 9 элементов:
  //    а) поле imgSrc заполняется опционально, если нужен фон для поля для перетаскивания или между, если не нужен оставлять ''
  //    б) поле answerTag заполняется для тех полей, в которые будет происходить перетаскивание элементов, если нет, то оставить ''

  // 2) arrayOfDragElements - максимум 6 элементов, в поле answerTag указывается принадлежность к полю, куда перетаскивать

  // поля answerTag для каждой пары данных должны быть уникальны

  const arrayOfDropElements = [
    {
      id: 1,
      name: "",
      answerTag: "",
      imgSrc: "",
    },
    {
      id: 2,
      name: "",
      answerTag: "2",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_7.png",
    },
    {
      id: 3,
      name: "",
      answerTag: "",
      imgSrc: "",
    },
    {
      id: 4,
      name: "",
      answerTag: "4",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_8.png",
    },
    {
      id: 5,
      name: "",
      answerTag: "",
      imgSrc: "",
    },
    {
      id: 6,
      name: "",
      answerTag: "6",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_9.png",
    },
    {
      id: 7,
      name: "",
      answerTag: "",
      imgSrc: "",
    },
    {
      id: 8,
      name: "",
      answerTag: "8",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_10.png",
      // imgSrc: "",
    },
    {
      id: 9,
      name: "",
      answerTag: "",
      imgSrc: "",
      // imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_10.png",
    },
  ];
  const arrayOfDragElements = [
    {
      id: 1,
      name: "red_fish",
      answerTag: "6",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_11.png",
    },
    {
      id: 2,
      name: "blue_fish",
      answerTag: "4",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_12.png",
    },
    {
      id: 3,
      name: "yellow_fish",
      answerTag: "2",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_13.png",
    },
    {
      id: 4,
      name: "green_fish",
      answerTag: "8",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_14.png",
    },
  ];

  

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDnDFillRandomPlacesMarkup(
    arrayOfDropElements,
    arrayOfDragElements,
    taskId
  );
})();
(() => {
  
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "task-2"
  // порядок перетаскивания: одна картинка в одно поле
  // массивы входящих данных:
  // 1) arrayOfDropElements - минимум 3 максимум 9 элементов:
  //    а) поле imgSrc заполняется опционально, если нужен фон для поля для перетаскивания или между, если не нужен оставлять ''
  //    б) поле answerTag заполняется для тех полей, в которые будет происходить перетаскивание элементов, если нет, то оставить ''

  // 2) arrayOfDragElements - максимум 6 элементов, в поле answerTag указывается принадлежность к полю, куда перетаскивать

  // поля answerTag для каждой пары данных должны быть уникальны
  const arrayOfDropElements = [
    {
      id: 1,
      name: "",
      answerTag: "",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_7.png",
    },
    {
      id: 2,
      name: "",
      answerTag: "2",
      imgSrc: "",
    },
    {
      id: 3,
      name: "",
      answerTag: "",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_8.png",
    },
    {
      id: 4,
      name: "",
      answerTag: "4",
      imgSrc: "",
    },
    {
      id: 5,
      name: "",
      answerTag: "",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_9.png",
    },
    {
      id: 6,
      name: "",
      answerTag: "6",
      imgSrc: "",
    },
    // {
    //   id: 7,
    //   name: "",
    //   answerTag: "",
    //   imgSrc: "",
    // },
    // {
    //   id: 8,
    //   name: "",
    //   answerTag: "8",
    //   // imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_10.png",
    //   imgSrc: "",
    // },
    // {
    //   id: 9,
    //   name: "",
    //   answerTag: "",
    //   // imgSrc: "",
    //   imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_10.png",
    // },
  ];
  const arrayOfDragElements = [
    {
      id: 1,
      name: "red_fish",
      answerTag: "6",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_11.png",
    },
    {
      id: 2,
      name: "blue_fish",
      answerTag: "4",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_12.png",
    },
    {
      id: 3,
      name: "yellow_fish",
      answerTag: "2",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_13.png",
    },
    {
      id: 4,
      name: "green_fish",
      answerTag: "8",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_14.png",
    },
  ];


  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDnDFillRandomPlacesMarkup(
    arrayOfDropElements,
    arrayOfDragElements,
    taskId
  );
})();
(() => {
  
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "task-3"

  // порядок перетаскивания: одна картинка в одно поле
  // массивы входящих данных:
  // 1) arrayOfDropElements - минимум 3 максимум 9 элементов:
  //    а) поле imgSrc заполняется опционально, если нужен фон для поля для перетаскивания или между, если не нужен оставлять ''
  //    б) поле answerTag заполняется для тех полей, в которые будет происходить перетаскивание элементов, если нет, то оставить ''

  // 2) arrayOfDragElements - максимум 6 элементов, в поле answerTag указывается принадлежность к полю, куда перетаскивать

  // поля answerTag для каждой пары данных должны быть уникальны
  const arrayOfDropElements = [
    {
      id: 1,
      name: "",
      answerTag: "",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_7.png",
    },
    {
      id: 2,
      name: "",
      answerTag: "",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_13.png",
    },
    {
      id: 3,
      name: "",
      answerTag: "",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_8.png",
    },
    {
      id: 4,
      name: "",
      answerTag: "4",
      imgSrc: "",
    },
    {
      id: 5,
      name: "",
      answerTag: "5",
      imgSrc: "",
    },
    // {
    //   id: 6,
    //   name: "",
    //   answerTag: "6",
    //   imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_9.png",
    // },
    // {
    //   id: 7,
    //   name: "",
    //   answerTag: "",
    //   imgSrc: "",
    // },
    // {
    //   id: 8,
    //   name: "",
    //   answerTag: "8",
    //   // imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_10.png",
    //   imgSrc: "",
    // },
    // {
    //   id: 9,
    //   name: "",
    //   answerTag: "",
    //   // imgSrc: "",
    //   imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_10.png",
    // },
  ];
  const arrayOfDragElements = [
    {
      id: 1,
      name: "red_fish",
      answerTag: "4",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_11.png",
    },
    {
      id: 2,
      name: "orange_shell",
      answerTag: "5",
      imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_9.png",
    },
    // {
    //   id: 3,
    //   name: "yellow_fish",
    //   answerTag: "2",
    //   imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_13.png",
    // },
    // {
    //   id: 4,
    //   name: "green_fish",
    //   answerTag: "8",
    //   imgSrc: "Images_1/dnd_fillRandomPlaces/DOH_3-4_32_3_14.png",
    // },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDnDFillRandomPlacesMarkup(
    arrayOfDropElements,
    arrayOfDragElements,
    taskId
  );
})();

//ФУНКЦИЯ
function renderDnDFillRandomPlacesMarkup(
  arrayOfDropElements,
  arrayOfDragElements,
  taskId
) {
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  const taskWrapper = document.getElementById(`${taskId}`)
  const arrayDropLength = arrayOfDropElements.length;
  const dropPlacesCount = arrayOfDropElements.filter((el) => el.answerTag).length;

  const dropBox = taskWrapper.querySelector(
    ".dnd_fillRandomPlaces_dropPlaceWrapper"
  );

  const dragBox = taskWrapper.querySelector(
    ".dnd_fillRandomPlaces_dragPlaceWrapper"
  );

  dropBox.insertAdjacentHTML(
    "beforeend",
    createDropPictureCardsMarkup(arrayOfDropElements)
  );
  dragBox.insertAdjacentHTML(
    "beforeend",
    createDragPictureCardsMarkup(shuffleCards([...arrayOfDragElements]))
  );
  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);

  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);
  dropBox.addEventListener("pointerdown", onDropBoxClick);
  taskWrapper.addEventListener("pointerdown", mouseDown);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  function onDropBoxClick(event) {
    if (
      !event.target.classList.contains("dnd_fillRandomPlaces_dropPlacePart") &&
      !event.target.classList.contains("dnd_fillRandomPlaces_dropPlace")
    )
      return;

    if (
      event.target.classList.contains("dnd_fillRandomPlaces_dropPlacePart") &&
      event.target.parentElement.style.backgroundImage
    ) {
      scaleImage(event.target.parentElement);
    } else if (
      event.target.classList.contains("dnd_fillRandomPlaces_dropPlace") &&
      event.target.style.backgroundImage
    ) {
      scaleImage(event.target);
    }
  }

  function onBtnResetClick() {
    [...dropBox.children].forEach((item) => {
      if (item.children.length > 0) {
        if (item.children[0].children.length > 0) {
          let randomPos = Math.floor(Math.random() * 12);
          item.children[0].children[0].style.order = randomPos;
          removeActiveCardClass(item.children[0].children[0]);
          dragBox.appendChild(item.children[0].children[0]);
        }
      }
    });
    draggingItem = null;
    checkingAnswerReset(controlsBox, infoBox);
    taskWrapper.addEventListener("pointerdown", mouseDown);
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
  }
  function onBtnTestClick() {
    let winVar = 0;
    [...dropBox.children].forEach((item) => {
      if (item.children.length > 0) {
        if (item.children[0].children.length !== 0) {
          if (
            item.children[0].attributes.getNamedItem("drop-data").value ===
            item.children[0].children[0].attributes.getNamedItem("drag-data")
              .value
          ) {
            winVar += 1;
            addRightChoiceClass(item.children[0].children[0]);
          } else addWrongChoiceClass(item.children[0].children[0]);
        }
      }
    });

    if (winVar === dropPlacesCount) {
      checkingAnswerPositive(controlsBox, infoBox);
    } else {
      checkingAnswerNegative(controlsBox, infoBox);
    }
    taskWrapper.removeEventListener("pointerdown", mouseDown);
  }
  function createDropPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        let elementWidth;
        let elementHeight;
        if (arrayDropLength === 3 || arrayDropLength === 5) {
          elementWidth = `width: calc(100% / ${arrayDropLength} - 10px)`;
          elementHeight = "dnd_fillRandomPlaces_bigHeight";
        } else if (arrayDropLength === 4) {
          elementWidth = `width: calc(100% / 2 - 10px)`;
          elementHeight = "dnd_fillRandomPlaces_middleHeight";
        } else if (arrayDropLength === 6) {
          elementWidth = `width: calc(100% / 3 - 10px)`;
          elementHeight = "dnd_fillRandomPlaces_middleHeight";
        } else if (arrayDropLength > 6 && arrayDropLength <= 9) {
          elementWidth = `width: calc(100% / 3 - 10px)`;
          elementHeight = "dnd_fillRandomPlaces_smallHeight";
        }

        const isHiddenPart =
          picture.answerTag === ""
            ? ""
            : `<div class='dnd_fillRandomPlaces_dropPlacePart'
                       draggable="false"
                       drop-data=${picture.answerTag}
                  ></div>`;
        const isBackgroundAndData =
          picture.imgSrc === ""
            ? `style="${elementWidth}"`
            : `drop-data='${picture.answerTag}' style="background-image: url(${picture.imgSrc}); ${elementWidth}"`;

        const isZoomIn = picture.imgSrc && "dnd_fillRandomPlaces_dropPlace_zoom";

        return `<div class="dnd_fillRandomPlaces_dropPlace ${elementHeight} ${isZoomIn}" ${isBackgroundAndData}>
                  ${isHiddenPart}
              </div>
              `;
      })
      .join("");
  }
  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        return `
              <div class='dnd_fillRandomPlaces_dragPlace oneMultiChoice_border' drag-data="${picture.answerTag}" style="background-image: url(${picture.imgSrc})">
              </div>
              `;
      })
      .join("");
  }

  function mouseDown(event) {
    if (event.button !== 0) return;

    if (!event.target.classList.contains("dnd_fillRandomPlaces_dragPlace"))
      return;

    let draggingItemPosition;

    draggingItem = event.target;
    draggingItemPosition = draggingItem.parentElement;

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

    let clickWithoutMove = true;

    function onMouseMove(event) {
      if (clickWithoutMove) {
        draggingItem.style.position = "absolute";
        draggingItem.style.zIndex = 1000;
        document.body.appendChild(draggingItem);
        moveAt(event.pageX, event.pageY);
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

    function onpointerup(event) {
      document.removeEventListener("pointermove", onMouseMove);
      draggingItem.style.cursor = "grab";
      if (clickWithoutMove) {
         scaleImage(event.target)
      } else if (!clickWithoutMove) {
        if (
          elemBelow.classList.contains("dnd_fillRandomPlaces_dropPlacePart") &&
          elemBelow.children.length === 0
        ) {
          dropAppend(elemBelow, draggingItem);
          // открываем кнопку ПРОВЕРИТЬ
          if (!isGameStart) {
            toggleOpacityAndEventsElement(btnTest);
            isGameStart = true;
          }
        } else if (elemBelow === draggingItem) {
          dropAppend(draggingItemPosition, draggingItem);
        } else {
          dragAppend(dragBox, draggingItem, findIdx);
        }
      }
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }
}
