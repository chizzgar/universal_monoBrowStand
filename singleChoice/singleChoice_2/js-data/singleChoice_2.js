import {
  removeActiveCardClass,
  addCheckClass,
  addRightChoiceClass,
  addWrongChoiceClass,
  onSoundIconClick,
  resetSound,
  getRandomPositionToCard,
  shuffleCards,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoiсe_2_task-1";
  // массив входящих вариантов ответа (максимум 5-6 элементов),

  const answersData = [
    {
      id: 1,
      text: "8", // текст
      audioSrc: "sound/8_s.mp3", // звук опционально, если не нужен, то ставить ""
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 2,
      text: "7",
      audioSrc: "sound/7_s.mp3",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 3,
      text: "10",
      audioSrc: "sound/10_s.mp3",
      answerTag: "true", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 4,
      text: "12",
      audioSrc: "sound/12_s.mp3",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 5,
      text: "9",
      audioSrc: "sound/9_s.mp3",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const winVarTask = "true";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoiсe_2_Markup(answersData, winVarTask, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoiсe_2_task-2";
  // массив входящих вариантов ответа (максимум 5-6 элементов),

  const answersData = [
    {
      id: 1,
      text: "Картошка", // текст
      audioSrc: "sound/kar.mp3", // звук опционально, если не нужен, то ставить ""
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 2,
      text: "Капуста",
      audioSrc: "sound/kap.mp3",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 3,
      text: "Морковь",
      audioSrc: "sound/mork.mp3",
      answerTag: "true", // принадлежность к правильному/неправильному ответу
    },
    // {
    //   id: 1,
    //   text: "Картошка",
    //   audioSrc: '',
    // answerTag: "false", // принадлежность к правильному/неправильному ответу
    // },
    // {
    //   id: 2,
    //   text: "Капуста",
    //   audioSrc: '',
    // answerTag: "false", // принадлежность к правильному/неправильному ответу
    // },
    // {
    //   id: 3,
    //   text: "Огурец",
    //   audioSrc: '',
    // answerTag: "false", // принадлежность к правильному/неправильному ответу
    // },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const winVarTask = "Морковь";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoiсe_2_Markup(answersData, winVarTask, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "singleChoiсe_2_task-3";
  // массив входящих вариантов ответа (максимум 5-6 элементов),

  const answersData = [
    {
      id: 1,
      text: "фиолетовый круглый мячик", // текст
      audioSrc: "", // звук опционально, если не нужен, то ставить ""
      answerTag: "true", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 2,
      text: "Зелёное пластиковое ведёрко",
      audioSrc: "",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 3,
      text: "Разноцветная деревянная пирамидка",
      audioSrc: "",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 1,
      text: "Грузовая машинка с прицепом",
      audioSrc: "",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 2,
      text: "Жёлтый резиновый утёнок",
      audioSrc: "",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
    {
      id: 3,
      text: "Красный деревянный кубик",
      audioSrc: "",
      answerTag: "false", // принадлежность к правильному/неправильному ответу
    },
  ];

  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  // const winVarTask = "фиолетовый круглый мячик";
  const winVarTask = "true";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSingleChoiсe_2_Markup(answersData, winVarTask, taskId);
})();

// ФУНКЦИЯ
function renderSingleChoiсe_2_Markup(answersData, winVarTask, taskId) {
  let finishAnswer = null;

  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  let isGameStart = false;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const answers = taskWrapper.querySelector(".singleChoiсe_2_task_answers");

  createMarcup();

  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  const audioFiles = taskWrapper.querySelectorAll(".singleChoiсe_2_audio");

  answers.addEventListener("click", onAnswerClick);
  btnReset.addEventListener("click", onReloadBtnClick);
  btnTest.addEventListener("click", onCheckTaskBtnClick);

  function createMarcup() {
    answers.insertAdjacentHTML(
      "beforeend",
      insertAnswers(shuffleCards([...answersData]))
    );
  }

  function onAnswerClick(e) {
    if (e.target.classList.contains("singleChoiсe_2_task_answer")) {
      if (!isGameStart) {
        isGameStart = true;
        checkButton_classList_changer(
          isGameStart,
          onCheckTaskBtnClick,
          btnTest
        );
      }
      if (e.target.classList.contains("targetChoice_color")) {
        removeActiveCardClass(e.target);

        isGameStart = false;
        checkButton_classList_changer(
          isGameStart,
          onCheckTaskBtnClick,
          btnTest
        );
        finishAnswer = null;
      } else {
        if (finishAnswer) {
          removeActiveCardClass(finishAnswer);
        }

        addCheckClass(e.target);
        finishAnswer = e.target;
      }
    }
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
  }

  function insertAnswers(arr) {
    const widthText = arr.some((el) => el.text.length > 6);
    if (!widthText && arr.length > 5) {
      answers.classList.add("singleChoiсe_2_task_answers_width");
    }
    return arr
      .map((item) => {
        let elementWidth;
        let elWidthSmall = "";

        if (widthText) {
          if (arr.length > 4) {
            elementWidth = `"width: calc(100% / 3 - 10px)"`;
          } else if (arr.length < 4) {
            elementWidth = `"width: calc(100% / ${arr.length} - 10px)"`;
          } else if (arr.length === 4) {
            elementWidth = `"width: calc(100% / 2 - 10px)"`;
          }
        } else {
          elWidthSmall = [
            "singleChoiсe_2_task_answer_width",
            "singleChoiсe_2_task_answer_height",
          ].join(" ");
          elementWidth = "";
        }

        const isSound =
          item.audioSrc &&
          `
                <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}="${item.id}${taskId}">
                    <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                    <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                    <audio class="singleChoiсe_2_audio" id="${item.id}${taskId}" src="${item.audioSrc}">
                              Your browser does not support the
                              <code>audio</code> element.
                    </audio>
                </div>
            `;

        return `
                  <div class="singleChoiсe_2_task_answer ${elWidthSmall} oneMultiChoice_border" data-name="${item.answerTag}" style=${elementWidth} >
                  ${isSound}
                  ${item.text}
                  </div>
              `;
      })
      .join("");
  }

  function onReloadBtnClick() {
    if (finishAnswer) {
      removeActiveCardClass(finishAnswer);
    }

    finishAnswer = null;

    resetSound(soundSetStates);

    [...answers.children].forEach((el) => getRandomPositionToCard(el));

    answers.addEventListener("click", onAnswerClick);

    isGameStart = false;
    checkButton_classList_changer(isGameStart, onCheckTaskBtnClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onCheckTaskBtnClick() {
    if (!finishAnswer) {
      return;
    }

    removeActiveCardClass(finishAnswer);

    if (finishAnswer.dataset.name === winVarTask) {
      addRightChoiceClass(finishAnswer);

      feedBackChanger("win", isGameStart, result);
    } else {
      if (finishAnswer) {
        addWrongChoiceClass(finishAnswer);

        feedBackChanger("lose", isGameStart, result);
      }
    }

    resetSound(soundSetStates);
    answers.removeEventListener("click", onAnswerClick);
  }
}
