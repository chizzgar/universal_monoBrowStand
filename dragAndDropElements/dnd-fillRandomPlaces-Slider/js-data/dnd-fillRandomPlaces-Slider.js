import {
  onBtnRightClick,
  onBtnLeftClick,
  getBlocksSizes,
  showArrows,
  scaleImage,
  dropAppend,
  dragAppend,
  getRandomPositionToCard,
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
  const taskId = "dnd-fillRandomPlaces-Slider_task-1";

  // указывается количество верно перетащенных элементов ( или общее количество из arrayOfDragElements, или любое меньшее число)
  const rightCount = 7;
  // порядок перетаскивания: несколько картинок(максимум по 4) в одно поле
  // массивы входящих данных:
  // 1) arrayOfDropElements:
  //    a) минимум 1 максимум 4 элемента
  //    б) поле orientation заполняется 'v' - если поле будет вертикально расположено или будет всего 1, 'h' - если горизонтально
  //    в) поле answerTag должно быть уникальным и обязательно к заполнению

  // 2) arrayOfDragElements:
  //    а)- любое количество элементов,
  //    б) в поле answerTag указывается принадлежность к полю, куда перетаскивать, если элемент не нужно перетаскивать, указывается ''

  const arrayOfDropElements = [
    {
      id: "1",
      answerTag: "1",
      orientation: "v",
    },
    {
      id: "2",
      answerTag: "2",
      orientation: "h",
    },
    {
      id: "3",
      answerTag: "3",
      orientation: "h",
    },
    {
      id: "4",
      answerTag: "4",
      orientation: "v",
    },
  ];

  const arrayOfDragElements = [
    {
      id: 1,
      name: "blue_shirt",
      answerTag: "3",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_17.png",
    },
    {
      id: 2,
      name: "red_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_19.png",
    },
    {
      id: 3,
      name: "red_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_20.png",
    },
    {
      id: 4,
      name: "yellow_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_21.png",
    },
    {
      id: 5,
      name: "yellow_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_22.png",
    },
    {
      id: 6,
      name: "green_shirt",
      answerTag: "4",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_23.png",
    },
    {
      id: 7,
      name: "green_shirt",
      answerTag: "4",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_24.png",
    },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDndFillRandomPlacesSlider(
    arrayOfDropElements,
    arrayOfDragElements,
    taskId,
    rightCount
  );
})();
(() => {
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "dnd-fillRandomPlaces-Slider_task-2";

  // указывается количество верно перетащенных элементов ( или общее количество из arrayOfDragElements, или любое меньшее число)
  const rightCount = 7;

  // порядок перетаскивания: несколько картинок(максимум по 4) в одно поле
  // массивы входящих данных:
  // 1) arrayOfDropElements:
  //    a) минимум 1 максимум 4 элемента
  //    б) поле orientation заполняется 'v' - если поле будет вертикально расположено или будет всего 1, 'h' - если горизонтально
  //    в) поле answerTag должно быть уникальным и обязательно к заполнению

  // 2) arrayOfDragElements:
  //    а)- любое количество элементов,
  //    б) в поле answerTag указывается принадлежность к полю, куда перетаскивать, если элемент не нужно перетаскивать, указывается ''
  const arrayOfDropElements = [
    {
      id: "1",
      answerTag: "1",
      orientation: "h",
    },
    {
      id: "2",
      answerTag: "2",
      orientation: "h",
    },
    {
      id: "3",
      answerTag: "3",
      orientation: "h",
    },
  ];

  const arrayOfDragElements = [
    {
      id: 1,
      name: "blue_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_17.png",
    },
    {
      id: 2,
      name: "red_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_19.png",
    },
    {
      id: 3,
      name: "red_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_20.png",
    },
    {
      id: 4,
      name: "yellow_shirt",
      answerTag: "3",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_21.png",
    },
    {
      id: 5,
      name: "yellow_shirt",
      answerTag: "3",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_22.png",
    },
    {
      id: 6,
      name: "green_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_23.png",
    },
    {
      id: 7,
      name: "green_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_24.png",
    },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDndFillRandomPlacesSlider(
    arrayOfDropElements,
    arrayOfDragElements,
    taskId,
    rightCount
  );
})();
(() => {
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskId = "dnd-fillRandomPlaces-Slider_task-3";

  // указывается количество верно перетащенных элементов ( или общее количество из arrayOfDragElements, или любое меньшее число)
  const rightCount = 6;
  // порядок перетаскивания: несколько картинок(максимум по 4) в одно поле
  // массивы входящих данных:
  // 1) arrayOfDropElements:
  //    a) минимум 1 максимум 4 элемента
  //    б) поле orientation заполняется 'v' - если поле будет вертикально расположено или будет всего 1, 'h' - если горизонтально
  //    в) поле answerTag должно быть уникальным и обязательно к заполнению

  // 2) arrayOfDragElements:
  //    а)- любое количество элементов,
  //    б) в поле answerTag указывается принадлежность к полю, куда перетаскивать, если элемент не нужно перетаскивать, указывается ''
  const arrayOfDropElements = [
    {
      id: "1",
      answerTag: "1",

      orientation: "v",
    },
    {
      id: "2",
      answerTag: "2",

      orientation: "v",
    },
  ];

  const arrayOfDragElements = [
    {
      id: 1,
      name: "blue_shirt",
      answerTag: "",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_17.png",
    },
    {
      id: 2,
      name: "red_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_19.png",
    },
    {
      id: 3,
      name: "red_shirt",
      answerTag: "1",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_20.png",
    },
    {
      id: 4,
      name: "yellow_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_21.png",
    },
    {
      id: 5,
      name: "yellow_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_22.png",
    },
    {
      id: 6,
      name: "green_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_23.png",
    },
    {
      id: 7,
      name: "green_shirt",
      answerTag: "2",
      imgSrc: "Images_1/dnd-fillRandomPlaces-Slider/DOH_3-4_13_4_24.png",
    },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDndFillRandomPlacesSlider(
    arrayOfDropElements,
    arrayOfDragElements,
    taskId,
    rightCount
  );
})();

//ФУНКЦИЯ
function renderDndFillRandomPlacesSlider(
  arrayOfDropElements,
  arrayOfDragElements,
  taskId,
  rightCount
) {
  let draggingItem;
  let elemBelow;
  let isGameStart = false;
  let sliderSetStates = {
    sliderItemWidth: null,
    sliderSize: null,
    sliderWrapperSize: null,
    sliderShift: 0,
  };

  let maxQuantity;
  const taskWrapper = document.getElementById(`${taskId}`);
  const arrayOfDropElementsLength = arrayOfDropElements.length;

  // ограничения на количество перетаскиваемых в поле элементов
  switch (arrayOfDropElementsLength) {
    case 1:
      maxQuantity = 20;
      break;
    case 2:
      maxQuantity = 9;
      break;
    case 3:
      maxQuantity = 6;
      break;
    case 4:
      maxQuantity = 4;
      break;

    default:
      break;
  }

  const leftBtn = taskWrapper.querySelector(".arrowButton_left_event");
  const rightBtn = taskWrapper.querySelector(".arrowButton_right_event");

  const dropBox = taskWrapper.querySelector(
    ".dnd-fillRandomPlaces-Slider_dropPlaceWrapper"
  );
  const dragBox = taskWrapper.querySelector(
    ".dnd-fillRandomPlaces-Slider_slider_box"
  );

  dropBox.insertAdjacentHTML(
    "beforeend",
    createDropPictureCardsMarkup(arrayOfDropElements)
  );
  dragBox.insertAdjacentHTML(
    "beforeend",

    createDragPictureCardsMarkup(shuffleCards([...arrayOfDragElements]))
  );

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  getBlocksSizes(sliderSetStates, dragBox);
  showArrows(sliderSetStates, leftBtn, rightBtn);

  sliderSetStates.sliderWrapperSize = dragBox.offsetParent.clientWidth;
  if (sliderSetStates.sliderSize < sliderSetStates.sliderWrapperSize) {
    rightBtn.classList.add("noDisplayElement");
  }

  taskWrapper.addEventListener("pointerdown", mouseDown);
  btnReset.addEventListener("click", onBtnResetClick);

  leftBtn.addEventListener("click", onBtnSliderLeftClick);
  rightBtn.addEventListener("click", onBtnSliderRightClick);

  function onBtnSliderLeftClick() {
    onBtnLeftClick(sliderSetStates, dragBox, leftBtn, rightBtn);
  }
  function onBtnSliderRightClick() {
    onBtnRightClick(sliderSetStates, dragBox, leftBtn, rightBtn);
  }

  function onBtnResetClick() {
    [...dropBox.children].forEach((item) => {
      if (item.children[0].children.length > 0) {
        [...item.children[0].children].forEach((elem) => {
          getRandomPositionToCard(elem);
          removeActiveCardClass(elem);

          dragBox.appendChild(elem);
        });
      }
    });

    sliderSetStates.sliderShift = 0;
    sliderSetStates.sliderSize = dragBox.scrollWidth;
    showArrows(sliderSetStates, leftBtn, rightBtn);
    dragBox.style.left = `${sliderSetStates.sliderShift}px`;
    draggingItem = null;

    taskWrapper.addEventListener("pointerdown", mouseDown);

    isGameStart = false;
    checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onBtnTestClick() {
    let winVar = 0;
    [...dropBox.children].forEach((item) => {
      if (item.children[0].children.length !== 0) {
        [...item.children[0].children].forEach((elem) => {
          if (
            item.children[0].attributes.getNamedItem("drop-data").value ===
            elem.attributes.getNamedItem("drag-data").value
          ) {
            winVar += 1;

            addRightChoiceClass(elem);
          } else addWrongChoiceClass(elem);
        });
      }
    });

    if (winVar === rightCount) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
    taskWrapper.removeEventListener("pointerdown", mouseDown);
  }

  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        return `
                      <div class='dnd-fillRandomPlaces-Slider_dragPlace oneMultiChoice_border' drag-data="${picture.answerTag}" style="background-image: url(${picture.imgSrc})">
                      </div>
                      `;
      })
      .join("");
  }
  function createDropPictureCardsMarkup(pictures) {
    let elementWidth;
    if (arrayOfDropElements.every((el) => el.orientation === "v")) {
      dropBox.style.flexWrap = "wrap";
      elementWidth = `"width:calc(100% / ${arrayOfDropElementsLength})"`;
    } else if (arrayOfDropElements.every((el) => el.orientation === "h")) {
      dropBox.style.flexDirection = "column";
    } else if (arrayOfDropElementsLength === 4) {
      dropBox.style.flexWrap = "wrap";
      dropBox.style.flexDirection = "column";
      elementWidth = `"width:calc(100% / ${arrayOfDropElementsLength - 1})"`;
    } else {
      dropBox.style.flexWrap = "wrap";
      dropBox.style.flexDirection = "column";
      elementWidth = `"width:calc(100% / 2)"`;
    }
    return pictures
      .map((picture) => {
        let location;

        if (picture.orientation === "v") {
          location = "dnd-fillRandomPlaces-Slider_dropPlacePart_vertical";
        } else {
          location = "dnd-fillRandomPlaces-Slider_dropPlacePart_horisontal";
        }

        if (elementWidth) {
          return `<div class="dnd-fillRandomPlaces-Slider_dropPlace ${location}" drop-data="${picture.answerTag}" style=${elementWidth}>

                        <div class='dnd-fillRandomPlaces-Slider_dropPlacePart'
                         draggable="false"
                        drop-data="${picture.answerTag}"></div>
                        </div>
                        `;
        } else {
          return `<div class="dnd-fillRandomPlaces-Slider_dropPlace ${location}" drop-data="${picture.answerTag}" >

                        <div class='dnd-fillRandomPlaces-Slider_dropPlacePart'
                         draggable="false"
                        drop-data="${picture.answerTag}"></div>
                        </div>
                        `;
        }
      })
      .join("");
  }

  function mouseDown(event) {
    if (event.button !== 0) return;

    if (
      !event.target.classList.contains("dnd-fillRandomPlaces-Slider_dragPlace")
    )
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

    // ЛИМИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
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
      }

      moveAt(event.pageX, event.pageY);
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

      sliderSetStates.sliderSize = dragBox.scrollWidth;
      showArrows(sliderSetStates, leftBtn, rightBtn);

      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }

    draggingItem.addEventListener("pointerup", onpointerup);

    function onpointerup(event) {
      document.removeEventListener("pointermove", onMouseMove);
      draggingItem.style.cursor = "grab";
      if (clickWithoutMove) {
        setTimeout(() => scaleImage(event.target), 0);
      } else {
        if (
          elemBelow.classList.contains(
            "dnd-fillRandomPlaces-Slider_dropPlacePart"
          ) &&
          elemBelow.children.length < maxQuantity
        ) {
          dropAppend(elemBelow, draggingItem);

          isGameStart = true;
          checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
        } else if (
          elemBelow.classList.contains(
            "dnd-fillRandomPlaces-Slider_dragPlace"
          ) &&
          elemBelow.parentElement.parentElement.tagName !== "BODY" &&
          !elemBelow.parentElement.parentElement.classList.contains(
            "dnd-fillRandomPlaces-Slider_slider_box"
          ) &&
          elemBelow.parentElement.children.length < maxQuantity
        ) {
          dropAppend(elemBelow.parentElement, draggingItem);
        } else {
          dragAppend(dragBox, draggingItem, findIdx);
        }

        sliderSetStates.sliderSize = dragBox.scrollWidth;
        showArrows(sliderSetStates, leftBtn, rightBtn);
      }
      draggingItem.removeEventListener("pointerup", onpointerup);
    }
  }
}
