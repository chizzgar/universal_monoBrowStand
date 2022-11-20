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
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
  renderCheckPanel,
  getCheckPanelElements,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "writeAnswer_2_task-1";

  // массив с правильными ответами (value тега option) (или числа или строки), указываются в той же последовательности, что и селекты
  const rightAnswers = [1, 3, 3, 1, 3, 2];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderWriteAnswer_2_Markup(rightAnswers, taskId);
})();
// (() => {
//   // это уникальный id для данного задания, который был присвоен в html
//   const taskId = "writeAnswer_2_task-2";

//   // массив с правильными ответами (value тега option) (или числа или строки), указываются в той же последовательности, что и селекты
//   const rightAnswers = [1, 1, 2, 2];

//   // сама функция, которая запускается, здесь ничего менять не нужно
//   renderWriteAnswer_2_Markup(rightAnswers, taskId);
// })();

function renderWriteAnswer_2_Markup(rightAnswers, taskId) {
  const soundDataAttribute = "audio-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  let isGameStart = false;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const allSelects = taskWrapper.querySelectorAll(".writeAnswer_2_task_select");
  const audioFiles = taskWrapper.querySelectorAll(".writeAnswer_2_task_audio");
  
  // получение кнопок
  const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

  btnReset.addEventListener("click", onReloadBtnClick);
  btnTest.addEventListener("click", onBtnTestClick);
  taskWrapper.addEventListener("pointerdown", onAnswerClick);
  taskWrapper.addEventListener("change", onInputChange);

  function onInputChange(e) {
    if (e.target.classList.contains("writeAnswer_2_task_select")) {
      // начало игры
      isGameStart = true;
      checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    }
  }

  function onAnswerClick(e) {
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
    if (e.target.classList.contains("writeAnswer_2_task_image")) {
      scaleImage(e.target);
    }
  }

  function onReloadBtnClick() {
    [...allSelects].forEach((el) => {
      el.value = 0;
      removeActiveCardClass(el);
    });

    [...taskWrapper.children].forEach((el, index) => {
      if (index !== taskWrapper.children.length - 1) {
        if (el.classList.contains("noEventElement"))
          togglePointerEventElement(el);
      }
    });
    resetSound(soundSetStates);
    isGameStart = false;
    checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
    feedBackChanger("reset", isGameStart, result);
  }

  function onBtnTestClick() {
    let winCount = 0;
    [...allSelects].forEach((el, index) => {
      if (el.value === String(rightAnswers[index]).toLowerCase()) {
        winCount += 1;
        addRightChoiceClass(el);
      } else addWrongChoiceClass(el);
    });
    if (winCount === rightAnswers.length) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
    resetSound(soundSetStates);
    [...taskWrapper.children].forEach((el, index) => {
      if (
        index !== taskWrapper.children.length - 1 &&
        !el.classList.contains("noEventElement")
      ) {
        togglePointerEventElement(el);
      }
    });
  }
}
