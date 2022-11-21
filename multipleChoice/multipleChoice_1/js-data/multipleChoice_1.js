import {
  onSoundIconClick,
  resetSound,
  togglePointerEventElement,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";

(() => {
  //уникальный id задания как в HTML
  const taskId = "multipleChoice_1_task-1";
  //входящие данные
  //поле audioSrc - опционально(если не надо оставляем пустые кавычки)
  const data = [
    {
      id: 1,
      text: "Свет",
      audioSrc: "",
      answerTag: "true",
    },
    {
      id: 2,
      text: "Атмосферное давление",
      audioSrc: "",
      answerTag: "false",
    },
    {
      id: 3,
      text: "Вода",
      audioSrc: "",
      answerTag: "true",
    },
    {
      id: 4,
      text: "Mорские течения",
      audioSrc: "",
      answerTag: "false",
    },
    {
      id: 5,
      text: "Ветер",
      audioSrc: "",
      answerTag: "false",
    },
    {
      id: 6,
      text: "Температура",
      audioSrc: "",
      answerTag: "true",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "true";

  renderMultipleChoice_1(data, taskId, rightAnswer);
})();

(() => {
  //уникальный id задания как в HTML
  const taskId = "multipleChoice_1_task-2";
  //входящие данные
  //поле audioSrc - опционально(если не надо оставляем пустые кавычки)
  const data = [
    {
      id: 1,
      text: "шапка снега",
      audioSrc: "sound/8045.mp3",
      answerTag: "true",
    },
    {
      id: 2,
      text: "столовое серебро",
      audioSrc: "sound/8053.mp3",
      answerTag: "false",
    },
    {
      id: 3,
      text: "чугунная голова",
      audioSrc: "sound/8060.mp3",
      answerTag: "true",
    },
    {
      id: 4,
      text: "дождь барабанит по крыше",
      audioSrc: "sound/8067.mp3",
      answerTag: "false",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "true";

  renderMultipleChoice_1(data, taskId, rightAnswer);
})();

(() => {
  //уникальный id задания как в HTML
  const taskId = "multipleChoice_1_task-3";
  //входящие данные
  //поле audioSrc - опционально(если не надо оставляем пустые кавычки)
  const data = [
    {
      id: 1,
      text: "А знаете ли, я удивляюсь, как вы хорошо говорите по-русски. (И.С. Тургенев) (сложное, повеств., невоскл., 1: двусост., нераспр., полное, осложн. вводными словами со значением привлечения внимания собеседника; 2: двусост., распр., полное, неосложн.)",
      audioSrc: "",
      answerTag: "false",
    },
    {
      id: 2,
      text: "Он услал её, наконец, и после долгих колебаний решился отправиться к Калягиным. (И.С. Тургенев) (сложное, повеств., невоскл., 1: двусост., нераспр., полное, осложн. вводными словами, содержащими указания на связь мыслей; 2: двусост., распр., полное, неосложн.)",
      audioSrc: "",
      answerTag: "true",
    },
    {
      id: 3,
      text: "Казалось, вместе с вечерними парами отовсюду<br> поднималась и даже с вышины лилась темнота.<br> (И.С. Тургенев) (повеств., невоскл., простое, двусост., распр., полное, осложн. однородными сказуемыми и вводными словами со значением различной степени уверенности)",
      audioSrc: "",
      answerTag: "true",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю answerTag  в массиве
  const rightAnswer = "true";

  renderMultipleChoice_1(data, taskId, rightAnswer);
})();

function renderMultipleChoice_1(data, taskId, rightAnswer) {
  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  let isGameStart = false;

  const task = document.querySelector(`#${taskId}`);
  const field = task.querySelector(".multipleChoice_1_inputList");

  field.insertAdjacentHTML("beforeend", createPictureCardsMarkup([...data]));

  const { btnReset, btnTest, result } = getOldPanelLinks(task);

  const audioFiles = task.querySelectorAll(".multipleChoice_1_audio");

  let inputs = task.querySelectorAll(".multipleChoice_1_input");

  field.addEventListener("click", onAudioIconClick);
  field.addEventListener("change", changeAnswer);
  btnReset.addEventListener("click", onReloadBtnClick);

  function createPictureCardsMarkup(data) {
    return data
      .map((item) => {
        const isAudio =
          item.audioSrc &&
          `<div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play multipleChoice_1_audio_image" ${soundDataAttribute}="${item.id}${taskId}">
                            <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                            <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                            <audio class="multipleChoice_1_audio" id="${item.id}${taskId}" src="${item.audioSrc}">
                                  Your browser does not support the <code>audio</code> element.
                                </audio>
                          </div>`;

        return `<div class="multipleChoice_1_inputWrapper ">
                      <input class="multipleChoice_1_input" type="checkbox" value="${item.text}" name ="${taskId}" id="${item.id}${taskId}"
                      data-answer ="${item.answerTag}"/>
                      ${isAudio}
                      <label for="${item.id}${taskId}">${item.text}</label>
                    </div>
                      `;
      })
      .join("");
  }

  function changeAnswer(e) {
    if (e.target.classList.contains("multipleChoice_1_input")) {
      if (!isGameStart) {
        isGameStart = true;
        checkButton_classList_changer(
          isGameStart,
          onCheckTaskBtnClick,
          btnTest
        );
      }

      const isCheckedInput = [...inputs].some((item) => {
        return item.checked;
      });

      if (!isCheckedInput) {
        isGameStart = false;
        checkButton_classList_changer(
          isGameStart,
          onCheckTaskBtnClick,
          btnTest
        );
      }
    }
  }
  function onAudioIconClick(e) {
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
  }

  function onCheckTaskBtnClick(e) {
    resetSound(soundSetStates);
    let winvar = 0;
    let answer = 0;

    inputs.forEach((item) => {
      if (item.getAttribute("data-answer") === rightAnswer) {
        answer++;
      }
      if (item.checked) {
        if (item.getAttribute("data-answer") === rightAnswer) {
          winvar++;
        } else winvar--;
      }
    });

    if (answer === winvar) {
      feedBackChanger("win", isGameStart, result);
    } else {
      feedBackChanger("lose", isGameStart, result);
    }
    if (!field.classList.contains("noEventElement")) {
      togglePointerEventElement(field);
    }
  }

  function onReloadBtnClick() {
    resetSound(soundSetStates);

    inputs.forEach((item) => {
      item.checked = 0;
    });

    if (field.classList.contains("noEventElement")) {
      togglePointerEventElement(field);
    }

    if (isGameStart) {
      isGameStart = false;
      checkButton_classList_changer(isGameStart, onCheckTaskBtnClick, btnTest);
      feedBackChanger("reset", isGameStart, result);
    }
  }
}
