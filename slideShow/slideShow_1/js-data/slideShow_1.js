import {
  scaleImage,
  onSoundIconClick,
  resetSound,
  changeSlideMoveLeft,
  changeSlideMoveRight,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "slideShow_1_task-1";
  // массив входящих данных(картинка, звук, текст)
  // количество слайдов любое
  // поле text, audioSrc заполняются по необходимости,
  // если данные для полей отсутствуют, то оставлять ''
  // поля answerTag и id должны быть уникальными, т.к. по ним происходит воспроизведение звуков
  // если звуки отсутствуют, то поле answerTag также оставить пустым ''
  const sliderContent = [
    {
      id: 1,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_13.png",
      audioSrc: "sound/slideShow_1/005.mp3",
      text: "Вы вошли в автобус с задней площадки и увидели, что у передней двери стоят ваши друзья. Надо ли поздороваться с ними, если надо, то как это сделать?",
    },
    {
      id: 2,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_14.png",
      audioSrc: "sound/slideShow_1/007.mp3",
      text: "На улице разговаривают несколько человек. Мальчик увидел среди них соседку и, проходя мимо, вежливо сказал: «Здравствуйте, Вера Ивановна!» Какую ошибку допустил мальчик?",
    },
    {
      id: 3,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_15.png",
      audioSrc: "sound/slideShow_1/009.mp3",
      text: "Ты идёшь с товарищем по улице. Он поздоровался с неизвестным тебе человеком, приостановился. Надо ли поздороваться и тебе?",
    },
    {
      id: 4,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_16.png",
      audioSrc: "sound/slideShow_1/011.mp3",
      text: "Два мальчика столкнулись в дверях при входе в кабинет и никак не могут разойтись. Кто из них должен уступить дорогу?",
    },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSlideShow_1(sliderContent, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "slideShow_1_task-2";
  // массив входящих данных(картинка, звук, текст)
  // количество слайдов любое
  // поле text, audioSrc заполняются по необходимости,
  // если данные для полей отсутствуют, то оставлять ''
  // поля answerTag и id должны быть уникальными, т.к. по ним происходит воспроизведение звуков
  // если звуки отсутствуют, то поле answerTag также оставить пустым ''

  const sliderContent = [
    {
      id: 1,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_13.png",
      audioSrc: "",
      text: "Вы вошли в автобус с задней площадки и увидели, что у передней двери стоят ваши друзья. Надо ли поздороваться с ними, если надо, то как это сделать?",
    },
    {
      id: 2,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_14.png",
      audioSrc: "",
      text: "На улице разговаривают несколько человек. Мальчик увидел среди них соседку и, проходя мимо, вежливо сказал: «Здравствуйте, Вера Ивановна!» Какую ошибку допустил мальчик?",
    },
    {
      id: 3,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_15.png",
      audioSrc: "",
      text: "Ты идёшь с товарищем по улице. Он поздоровался с неизвестным тебе человеком, приостановился. Надо ли поздороваться и тебе?",
    },
    {
      id: 4,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_16.png",
      audioSrc: "",
      text: "Два мальчика столкнулись в дверях при входе в кабинет и никак не могут разойтись. Кто из них должен уступить дорогу?",
    },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSlideShow_1(sliderContent, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "slideShow_1_task-3";
  // массив входящих данных(картинка, звук, текст)
  // количество слайдов любое
  // поле text, audioSrc заполняются по необходимости,
  // если данные для полей отсутствуют, то оставлять ''
  // поля answerTag и id должны быть уникальными, т.к. по ним происходит воспроизведение звуков
  // если звуки отсутствуют, то поле answerTag также оставить пустым ''

  const sliderContent = [
    {
      id: 1,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_13.png",
      audioSrc: "",
      text: "",
    },
    {
      id: 2,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_14.png",
      audioSrc: "",
      text: "",
    },
    {
      id: 3,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_15.png",
      audioSrc: "",
      text: "",
    },
    {
      id: 4,
      imgSrc: "Images_1/slideShow_1/DOH_3-4_25_2_16.png",
      audioSrc: "",
      text: "",
    },
  ];

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderSlideShow_1(sliderContent, taskId);
})();

// ФУНКЦИЯ
function renderSlideShow_1(sliderContent, taskId) {
  const soundDataAttribute = "sound-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };
  const taskWrapper = document.querySelector(`#${taskId}`);
  const leftBtn = taskWrapper.querySelector(".gallery_arrow_left");
  const rightBtn = taskWrapper.querySelector(".gallery_arrow_right");
  const sliderBox = taskWrapper.querySelector(".slideShow_1_Content");
  const actualSlideNum = taskWrapper.querySelector(
    ".slideShow_1_Counter-actual"
  );
  const allSlideNum = taskWrapper.querySelector(".slideShow_1_Counter");

  sliderBox.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(sliderContent)
  );

  const slideBoxImages = taskWrapper.querySelectorAll(".slideShow_1_Box");
  const audioFiles = taskWrapper.querySelectorAll(".slideShow_1_audio");

  allSlideNum.textContent = sliderContent.length;
  leftBtn.classList.add("noDisplayElement");

  const slideshowParameters = {
    currentShowImg: slideBoxImages[0], // первый слайд
    counter: 1, // начальный счетчик
  };

  actualSlideNum.textContent = slideshowParameters.counter;

  leftBtn.addEventListener("click", onSlideshowBtnLeftClick);
  rightBtn.addEventListener("click", onSlideshowBtnRightClick);
  sliderBox.addEventListener("pointerdown", onSliderContentClick);

  function onSliderContentClick(e) {
    if (e.target.classList.contains("slideShow_1_ImgBox")) {
      scaleImage(e.target);
    }
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
    }
  }

  function createPictureCardsMarkup(pictures) {
    return pictures
      .map((picture, index) => {
        const isVisible = index === 0 ? "" : "visually-hidden";

        const isSoundOne =
          picture.audioSrc &&
          `<div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play slideShow_1_audio_image" ${soundDataAttribute}="${picture.id}${taskId}">
          <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
          <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
          <audio class="slideShow_1_audio" id="${picture.id}${taskId}" src="${picture.audioSrc}">
                Your browser does not support the <code>audio</code> element.
              </audio>
        </div>`;

        const isText =
          picture.text && `<div class="slideShow_1_Text">${picture.text}</div>`;

        return `<div class='slideShow_1_Box ${isVisible}'>
                    <div class='slideShow_1_ImgBox' style='background-image: url(${picture.imgSrc})'></div>
                    ${isSoundOne}
                    ${isText}
                    </div>
                    `;
      })
      .join("");
  }

  function onSlideshowBtnLeftClick(e) {
    resetSound(soundSetStates);

    changeSlideMoveLeft(
      slideshowParameters, // данные для слайда
      actualSlideNum, //блок, куда пишется цифра
      slideBoxImages, // массив слайдов
      leftBtn, // кнопка влево, которую скрыть
      rightBtn // кнопка вправо, которую скрыть
    );
  }

  function onSlideshowBtnRightClick(e) {
    resetSound(soundSetStates);

    changeSlideMoveRight(
      slideshowParameters, // данные для слайда
      actualSlideNum, //блок, куда пишется цифра
      slideBoxImages, // массив слайдов
      leftBtn, // кнопка влево, которую скрыть
      rightBtn // кнопка вправо, которую скрыть
    );
  }
}
