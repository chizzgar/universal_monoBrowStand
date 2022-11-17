// подключение функции, которая позволяет увеличить картинку
// import scaleImage from "./funcScaleImage.js";

(() => {
  // массив входящих картинок (максимум 5-6 элементов),

  const arrayOfElements = [
    {
      id: 1,
      name: "four-matryoshkas",
      src: "Images_1/img-column/DOH_3-4_26_3_8.png",
    },
    {
      id: 2,
      name: "five-matryoshkas",
      src: "Images_1/img-column/DOH_3-4_26_3_9.png",
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю name  в массиве
  const rightAnswer = "five-matryoshkas";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-1");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";

  // сама функция, которая запускается, здесь ничего менять не нужно
  rendersingleChoiceColumnMarkup(
    arrayOfElements,
    rightAnswer,
    taskWrapper,
    imageFolder
  );
})();

function rendersingleChoiceColumnMarkup(
  arrayOfElements,
  rightAnswer,
  taskWrapper,
  imageFolder
) {
  let currentActiveCard;

  const arrayLength = arrayOfElements.length;

  const listContainer = taskWrapper.querySelector(".singleChoiceColumnList");
  const btnReset = taskWrapper.querySelector("#reset");
  const btnTest = taskWrapper.querySelector("#test");

  const controlsBox = taskWrapper.querySelector(".show-answer-controls");
  const infoBox = taskWrapper.querySelector(".show-answer-info");

  const cardsMarkup = createPictureCardsMarkup(
    shuffleCards([...arrayOfElements])
  );

  listContainer.insertAdjacentHTML("beforeend", cardsMarkup);

  listContainer.addEventListener("click", onListItemClick);
  btnReset.addEventListener("click", onBtnResetClick);
  btnTest.addEventListener("click", onBtnTestClick);

  function onBtnResetClick(e) {
    removeActiveCardClass(currentActiveCard);

    listContainer.addEventListener("click", onListItemClick);
    checkingAnswerReset();
    currentActiveCard = null;
  }

  function onBtnTestClick(e) {
    if (!currentActiveCard) {
      checkingAnswerNegative();
      return;
    }

    if (currentActiveCard && currentActiveCard.dataset.name === rightAnswer) {
      addRightChoiceClass(currentActiveCard);
      checkingAnswerPositive();
    } else {
      addWrongChoiceClass(currentActiveCard);
      checkingAnswerNegative();
    }
    listContainer.removeEventListener("click", onListItemClick);
  }

  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map(({ name, src, title }) => {
        return `
                <li class="singleChoiceColumnItem" data-name=${name}>
                  <div class="singleChoiceColumnImageBox" style="background-image: url(${src})">
                      <div class='enlarge_picture' title='увеличить' style='background-image: url("${imageFolder}/expand.svg")'></div>
                  </div>
                </li>
              `;
      })
      .join("");
  }

  function onListItemClick(e) {
    let imgEl;
    if (e.target.classList.contains("enlarge_picture")) {
      scaleImage(e.target.parentElement, `${imageFolder}/close.png`);
    }
    const isImgEl =
      e.target.classList.contains("singleChoiceColumnImageBox") ||
      e.target.classList.contains("singleChoiceColumnItem");

    if (!isImgEl) {
      return;
    }

    if (e.target.classList.contains("singleChoiceColumnImageBox")) {
      imgEl = e.target.parentElement;
    } else imgEl = e.target;

    if (imgEl.classList.contains("singleChoiceColumnPictureCheck")) {
      imgEl.classList.remove("singleChoiceColumnPictureCheck");
    } else {
      removeActiveCardClass(currentActiveCard);
      addCheckClass(imgEl);
    }
  }

  function addCheckClass(card) {
    card.classList.add("singleChoiceColumnPictureCheck");
    currentActiveCard = getActiveCard();
  }
  function addRightChoiceClass(card) {
    card.classList.add("singleChoiceColumnPictureRight");
  }
  function addWrongChoiceClass(card) {
    card.classList.add("singleChoiceColumnPictureWrong");
  }

  function getActiveCard() {
    return taskWrapper.querySelector(
      ".singleChoiceColumnItem.singleChoiceColumnPictureCheck"
    );
  }

  function removeActiveCardClass(currentActiveCard) {
    if (currentActiveCard) {
      currentActiveCard.classList.remove("singleChoiceColumnPictureCheck");

      if (
        currentActiveCard.classList.contains("singleChoiceColumnPictureWrong")
      ) {
        currentActiveCard.classList.remove("singleChoiceColumnPictureWrong");
      }
      if (
        currentActiveCard.classList.contains("singleChoiceColumnPictureRight")
      ) {
        currentActiveCard.classList.remove("singleChoiceColumnPictureRight");
      }
    }
  }

  function checkingAnswerPositive() {
    controlsBox.style.backgroundColor = "lightgreen";
    infoBox.textContent = "👍 Молодец!";
  }
  function checkingAnswerNegative() {
    controlsBox.style.backgroundColor = "lightpink";
    infoBox.textContent = "❌ Попробуй еще!";
  }
  function checkingAnswerReset() {
    controlsBox.style = "";
    infoBox.textContent = "";
  }
  function scaleImage(targetEl, imageUrl) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.bottom = 0;
    modal.style.right = 0;
    modal.style.background = "rgba(0,0,0,0.5)";
    modal.style.zIndex = 100;
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";

    let div = document.createElement("div");
    div.style.width = "50%";
    div.style.height = "80%";
    div.style.textAlign = "center";
    let img = document.createElement("img");
    if (targetEl.tagName === "IMG") {
      img.src = targetEl.src;
    } else {
      img.src = targetEl.style.backgroundImage.slice(5, -2);
    }
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";

    div.append(img);
    modal.append(div);
    let close = document.createElement("div");
    close.style.width = "25px";
    close.style.height = "25px";
    close.style.marginLeft = "calc(100% - 25px)";
    close.style.cursor = "pointer";

    close.style.backgroundImage = `url(${imageUrl})`;
    div.append(close);
    // document.body.style.overflow = "hidden";
    modal.addEventListener("pointerdown", () => {
      modal.remove();
      // document.body.style.overflow = "visible";
    });
    document.body.append(modal);
  }
}
