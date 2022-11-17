import {
  checkingAnswerPositive,
  checkingAnswerNegative,
  checkingAnswerReset,
  addRightChoiceClass,
  addWrongChoiceClass,
  toggleOpacityAndEventsElement,
  renderCheckPanel,
  getCheckPanelElements,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "editableSentences_task-1";
  //входящий массив с предложениями
  //максимальное количество предложений в одну строчку 8
  const data = [
    //начало предложения
    [
      {
        id: 1, //id слова
        word: "There", //слово
        status: "true", //верное ли слово
        rightWord: "", //если выше false пишем правильное слово на которое надо будет заменить неправильное
      },
      {
        id: 2,
        word: "were",
        status: "true",
        rightWord: "",
      },
      {
        id: 3,
        word: "dirty",
        status: "false",
        rightWord: "clean",
      },
      {
        id: 4,
        word: "spoons",
        status: "true",
        rightWord: "",
      },
    ], //конец предложения
    [
      {
        id: 1,
        word: "There",
        status: "true",
        rightWord: "",
      },
      {
        id: 2,
        word: "was",
        status: "true",
        rightWord: "",
      },
      {
        id: 3,
        word: "chicken",
        status: "true",
        rightWord: "",
      },
      {
        id: 4,
        word: "in",
        status: "true",
        rightWord: "",
      },
      {
        id: 5,
        word: "the",
        status: "true",
        rightWord: "",
      },
      {
        id: 6,
        word: "cupboard",
        status: "false",
        rightWord: "fridge",
      },
    ],
    [
      {
        id: 1,
        word: "There",
        status: "true",
        rightWord: "",
      },
      {
        id: 2,
        word: "was",
        status: "false",
        rightWord: "were",
      },
      {
        id: 3,
        word: "dirty",
        status: "true",
        rightWord: "",
      },
      {
        id: 4,
        word: "forks,",
        status: "true",
        rightWord: "",
      },
      {
        id: 5,
        word: "knives,",
        status: "true",
        rightWord: "",
      },
      {
        id: 6,
        word: "plates",
        status: "true",
        rightWord: "",
      },
      {
        id: 7,
        word: "and",
        status: "true",
        rightWord: "",
      },
      {
        id: 8,
        word: "glasses",
        status: "true",
        rightWord: "",
      },
    ],
  ];

  //сама функция, здесь ничего менять не нужно
  renderEditableSentences(data, taskId);
})();

// ФУНКЦИЯ
function renderEditableSentences(data, taskId) {
  let isGameStart = false;
  const statusTrue = "true";
  const statusFalse = "false";

  const task = document.querySelector(`#${taskId}`);
  const sentences = task.querySelector(
    ".editableSentences_textChanging_sentences"
  );

  fillSentences();

  renderCheckPanel(task, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(task);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  btnReset.addEventListener("click", onReloadBtnClick);
  btnTest.addEventListener("click", onCheckTaskBtnClick);
  sentences.addEventListener("keydown", onChangeSentence);

  function onChangeSentence(e) {
    // открываем кнопку ПРОВЕРИТЬ
    if (!isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = true;
    }
  }

  function onReloadBtnClick() {
    checkingAnswerReset(controlsBox, infoBox);
    sentences.innerHTML = "";
    fillSentences();
    sentences.addEventListener("keydown", onChangeSentence);

    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
  }

  function onCheckTaskBtnClick() {
    let winVar = 0;
    [...sentences.children].forEach((elem, index) => {
      let winCount = 0;
      [...elem.children].forEach((child, idx) => {
        child.contentEditable = "false";
        if (
          (data[index][idx].status === statusTrue &&
            data[index][idx].word.toLowerCase() ===
              child.innerText.toLowerCase().trim()) ||
          (data[index][idx].status === statusFalse &&
            data[index][idx].rightWord.toLowerCase() ===
              child.innerText.toLowerCase().trim())
        ) {
          winCount += 1;
        }
      });
      if (winCount === elem.children.length) {
        winVar += 1;
        addRightChoiceClass(elem);
      } else addWrongChoiceClass(elem);
    });

    if (winVar === data.length) {
      checkingAnswerPositive(controlsBox, infoBox);
    } else {
      checkingAnswerNegative(controlsBox, infoBox);
    }
    sentences.removeEventListener("keydown", onChangeSentence);
  }

  function fillSentences() {
    data.forEach((item) => {
      let sentence = document.createElement("div");

      sentence.classList.add(
        "editableSentences_textChanging_sentence",
        "oneMultiChoice_border"
      );
      item.forEach((i) => {
        let span = document.createElement("span");
        span.classList.add("editableSentences_textChanging_word");
        if (i.status === statusFalse) {
          span.setAttribute("data-answer", i.rightWord);
        }
        span.contentEditable = "true";
        span.innerText = i.word;
        sentence.append(span);
      });
      sentences.append(sentence);
    });
  }
}
