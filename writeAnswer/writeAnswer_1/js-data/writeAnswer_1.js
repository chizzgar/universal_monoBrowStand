import {
  scaleImage,
  checkingAnswerPositive,
  checkingAnswerNegative,
  checkingAnswerReset,
  removeActiveCardClass,
  addRightChoiceClass,
  addWrongChoiceClass,
  onSoundIconClick,
  resetSound,
  togglePointerEventElement,
  toggleOpacityAndEventsElement,
  renderCheckPanel,
  getCheckPanelElements,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "writeAnswer_1_task-4";

  // массив с правильными'' ответами (или числа или строки), указываются в той же последовательности, что и инпуты
  const rightAnswers = ['There are two boards in our classroom', 'There is a parrot in our biology classrom', 'Are there posters on the walls', 'There are beautiful maps on walls','Is there a clock in your gym'];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderWriteAnswer_1_Markup(rightAnswers, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "writeAnswer_1_task-5";

  // массив с правильными'' ответами (или числа или строки), указываются в той же последовательности, что и инпуты
  const rightAnswers = ['иметь', 'моч', 'ловить', 'прятать','носить'];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderWriteAnswer_1_Markup(rightAnswers, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "writeAnswer_1_task-1";

  // массив с правильными ответами (или числа или строки), указываются в той же последовательности, что и инпуты
  const rightAnswers = [5, 5, 5, 5];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderWriteAnswer_1_Markup(rightAnswers, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "writeAnswer_1_task-2";

  // массив с правильными ответами (или числа или строки), указываются в той же последовательности, что и инпуты
  const rightAnswers = ["8", "4", "7", "5", "6", "10", "10", "КОЛИБРИ"];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderWriteAnswer_1_Markup(rightAnswers, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "writeAnswer_1_task-3";

  // массив с правильными ответами (или числа или строки), указываются в той же последовательности, что и инпуты
  const rightAnswers = [3, 5, 4];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderWriteAnswer_1_Markup(rightAnswers, taskId);
})();

//ФУНКЦИЯ
function renderWriteAnswer_1_Markup(rightAnswers, taskId) {
  const soundDataAttribute = "audio-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  let isGameStart = false;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const answersBox = taskWrapper.querySelector(".writeAnswer_1_task_answer");

  const allInputs = taskWrapper.querySelectorAll(".writeAnswer_1_task_input");
  const allInputsTask = taskWrapper.querySelectorAll("input");
  const audioFiles = taskWrapper.querySelectorAll(".writeAnswer_1_task_audio");

  renderCheckPanel(taskWrapper, true);
  const { btnReset, btnTest, controlsBox, infoBox } =
    getCheckPanelElements(taskWrapper);
  // закрываем кнопку ПРОВЕРИТЬ
  toggleOpacityAndEventsElement(btnTest);

  btnReset.addEventListener("click", onReloadBtnClick);
  btnTest.addEventListener("click", onCheckTaskBtnClick);
  answersBox.addEventListener("pointerdown", onAnswerClick);
  answersBox.addEventListener("change", onInputChange);

  function onInputChange(e) {
    if (e.target.tagName === "INPUT") {
      // открываем кнопку ПРОВЕРИТЬ
      if (!isGameStart) {
        toggleOpacityAndEventsElement(btnTest);
        isGameStart = true;
      }
    }
  }
  function onAnswerClick(e) {
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
    if (e.target.classList.contains("writeAnswer_1_task_image")) {
      scaleImage(e.target);
    }
  }

  function onReloadBtnClick() {
    [...allInputsTask].forEach((el) => {
      removeActiveCardClass(el);
      el.value = "";
    });
    resetSound(soundSetStates);
    checkingAnswerReset(controlsBox, infoBox);
    if (answersBox.classList.contains("noEventElement")) {
      togglePointerEventElement(answersBox);
    }
    // закрываем кнопку ПРОВЕРИТЬ
    if (isGameStart) {
      toggleOpacityAndEventsElement(btnTest);
      isGameStart = false;
    }
  }

  function onCheckTaskBtnClick() {
    let winCount = 0;
    [...allInputs].forEach((el, index) => {
      if (
        el.value.toLowerCase().replace(/[/.,!?;]*/g, '').trim() ===
        String(rightAnswers[index]).toLowerCase()
      ) {
        winCount += 1;
        addRightChoiceClass(el);
      } else addWrongChoiceClass(el);
    });
    if (winCount === rightAnswers.length) {
      checkingAnswerPositive(controlsBox, infoBox);
    } else {
      checkingAnswerNegative(controlsBox, infoBox);
    }
    resetSound(soundSetStates);
    if (!answersBox.classList.contains("noEventElement")) {
      togglePointerEventElement(answersBox);
    }
  }
}
