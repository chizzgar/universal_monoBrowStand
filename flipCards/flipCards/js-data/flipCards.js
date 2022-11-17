import {
  scaleImage,
  onSoundIconClick,
  resetSound,
  renderCheckPanel,
  getCheckPanelElements,
} from "../../../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "flipCards_1_task-1";
  //входящие данные
  const itemsToImage = [
    {
      id: 1,
      name: "name",
      imgSrcCover: "", // если нужна картинка тыльной стороне, или ''
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_8.png", // если нужна картинка на лицевой стороне, или ''

      audioSrcCover: "sound/flipCards/003.mp3", // если нужен звук на тыльной стороне, или ''
      audioSrcFace: "sound/flipCards/003.mp3", // если нужен звук на лицевой стороне, или ''

      textCover: "Как зовут бабушку или дедушку?", // если нужен текст на тыльной стороне, или '', если нужен перенос строки, то вставить <br>
      textFace: "Как зовут бабушку или дедушку?", // если нужен текст на лицевой стороне, или '', если нужен перенос строки, то вставить <br>
    },
    {
      id: 2,
      name: "address",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_8.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_7.png",
      audioSrcCover: "sound/flipCards/004.mp3",
      audioSrcFace: "",

      textCover: "Где живёт бабушка или дедушка?",
      textFace: "Где живёт бабушка или дедушка?",
    },
    {
      id: 3,
      name: "skill",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_9.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_9.png",
      audioSrcCover: "",
      audioSrcFace: "sound/flipCards/005.mp3",

      textCover: "Что умеет делать бабушка или дедушка?",
      textFace: "Что умеет делать бабушка или дедушка?",
    },
    {
      id: 4,
      name: "do-together",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_10.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_10.png",
      audioSrcCover: "",
      audioSrcFace: "sound/flipCards/006.mp3",

      textCover: "",
      textFace: "Что вы делаете вместе?",
    },
  ];

  renderFlipCardsMarkup(itemsToImage, taskId);
})();

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "flipCards_1_task-2";

  const itemsToImage = [
    {
      id: 1,
      name: "name",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_7.png", // если нужна картинка тыльной стороне, или ''
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_8.png", // если нужна картинка на лицевой стороне, или ''

      audioSrcCover: "sound/flipCards/003.mp3", // если нужен звук на тыльной стороне, или ''
      audioSrcFace: "sound/flipCards/003.mp3", // если нужен звук на лицевой стороне, или ''

      textCover: "Как зовут бабушку или дедушку?", // если нужен текст на тыльной стороне, или '', если нужен перенос строки, то вставить <br>
      textFace: "Как зовут бабушку или дедушку?", // если нужен текст на лицевой стороне, или '', если нужен перенос строки, то вставить <br>
    },
    {
      id: 2,
      name: "address",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_8.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_7.png",
      audioSrcCover: "sound/flipCards/004.mp3",
      audioSrcFace: "",

      textCover: "Где живёт бабушка или дедушка?",
      textFace: "Где живёт бабушка или дедушка?",
    },
    {
      id: 3,
      name: "skill",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_9.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_9.png",
      audioSrcCover: "sound/flipCards/005.mp3",
      audioSrcFace: "sound/flipCards/005.mp3",

      textCover: "Что умеет делать бабушка или дедушка?",
      textFace: "Что умеет делать бабушка или дедушка?",
    },
    {
      id: 4,
      name: "do-together",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_10.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_10.png",
      audioSrcCover: "sound/flipCards/006.mp3",
      audioSrcFace: "sound/flipCards/006.mp3",

      textCover: "Что вы делаете вместе?",
      textFace: "Что вы делаете вместе?",
    },
    {
      id: 5,
      name: "description",
      imgSrcCover: "Images_1/flipCards/DOH_3-4_13_2_11.png",
      imgSrcFace: "Images_1/flipCards/DOH_3-4_13_2_11.png",
      audioSrcCover: "sound/flipCards/007.mp3",
      audioSrcFace: "sound/flipCards/007.mp3",

      textCover: "Какая бабушка? Какой дедушка?",
      textFace: "Какая бабушка? Какой дедушка?",
    },
  ];

  renderFlipCardsMarkup(itemsToImage, taskId);
})();
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "flipCards_1_task-3";

  const itemsToImage = [
    {
      id: 1,
      name: "pyramid",
      imgSrcCover: "", // если нужна картинка тыльной стороне, или ''
      imgSrcFace: "Images_1/flipCards/DO_3-4_2_1_16.jpg", // если нужна картинка на лицевой стороне, или ''

      audioSrcCover: "", // если нужен звук на тыльной стороне, или ''
      audioSrcFace: "", // если нужен звук на лицевой стороне, или ''

      textCover:
        "Любит наряжаться свечка <br> В разноцветные колечки. <br> Надевай скорее, ну же: <br> Снизу шире, сверху— у́же.", // если нужен текст на тыльной стороне, или '', если нужен перенос строки, то вставить <br>
      textFace: "Пирамидка", // если нужен текст на лицевой стороне, или '', если нужен перенос строки, то вставить <br>
    },
    {
      id: 2,
      name: "ball",
      imgSrcCover: "",
      imgSrcFace: "Images_1/flipCards/DO_3-4_2_1_17.jpg",
      audioSrcCover: "",
      audioSrcFace: "",

      textCover:
        "Он резиновый и круглый, <br>Так и проситься на руки, <br> Чтоб подбросить и поймать, <br> По дорожке покатать.",
      textFace: "Мяч",
    },
    {
      id: 3,
      name: "whirligig",
      imgSrcCover: "",
      imgSrcFace: "Images_1/flipCards/DO_3-4_2_1_18.jpg",
      audioSrcCover: "",
      audioSrcFace: "",

      textCover: "На одной ноге кружится, <br> А устанет — спать ложится.",
      textFace: "Юла",
    },
    {
      id: 4,
      name: "rabbit",
      imgSrcCover: "",
      imgSrcFace: "Images_1/flipCards/DO_3-4_2_1_19.jpg",
      audioSrcCover: "",
      audioSrcFace: "",

      textCover: "Серый маленький зверюшка, <br>Длинноухая игрушка.",
      textFace: "Зайчик",
    },
    {
      id: 5,
      name: "car",
      imgSrcCover: "",
      imgSrcFace: "Images_1/flipCards/DO_3-4_2_1_20.jpg",
      audioSrcCover: "",
      audioSrcFace: "",

      textCover:
        "У неё колёса есть, <br>Руль, четыре дверки — <br>Возит в кузове Андрей <br>Для Танечки конфетки.",
      textFace: "Машина",
    },
    {
      id: 6,
      name: "doll",
      imgSrcCover: "",
      imgSrcFace: "Images_1/flipCards/DO_3-4_2_1_21.jpg",
      audioSrcCover: "",
      audioSrcFace: "",

      textCover:
        "Я хорошая игрушка — <br>Каждой девочке — подружка. <br>Я могу сидеть в коляске, <br>Закрывать умею глазки.",
      textFace: "Кукла",
    },
  ];

  renderFlipCardsMarkup(itemsToImage, taskId);
})();

function renderFlipCardsMarkup(itemsToImage, taskId) {
  const soundDataAttribute = "drop-data";
  let soundSetStates = {
    currentAudio: null,
    currentAudioIcon: null,
    isPlaying: false,
  };

  const coverId = "cover";
  const faceId = "face";

  const task = document.querySelector(`#${taskId}`);
  const listContainer = task.querySelector(".flipCards_1_flipCardsWrapper");

  listContainer.insertAdjacentHTML(
    "beforeend",
    createPictureCardsMarkup(itemsToImage)
  );
  renderCheckPanel(task, false);
  const { btnReset } = getCheckPanelElements(task);
  const cards = task.querySelectorAll(".flipCards_1_flipCard");
  const audioFiles = task.querySelectorAll(".flipCards_1_flipCard_audio");

  [...listContainer.children].forEach((el) =>
    el.addEventListener("pointerdown", onCardClick)
  );

  btnReset.addEventListener("click", onBtnResetClick);

  function createPictureCardsMarkup(items) {
    return items
      .map((item) => {
        let width;
        if (items.length === 2 || items.length === 1 || items.length === 4) {
          width = 48;
        } else width = 30;
        const isImageCover =
          item.imgSrcCover &&
          `
            <div class="zoom_open_button_white" title="Увеличить изображение">
              <div class="icon_zoomPicture whiteZoomImg"></div>
            </div>
            <img src="${item.imgSrcCover}" alt="${item.name}" class="flipCards_1_flipCardCoverImg" />
        `;
        const isSoundCover =
          item.audioSrcCover &&
          `
                    <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}='${coverId}_${item.id}${taskId}'>
                      <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                      <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                      <audio class="flipCards_1_flipCard_audio" id='${coverId}_${item.id}${taskId}' src="${item.audioSrcCover}">
                            Your browser does not support the <code>audio</code> element.
                          </audio>
                    </div>`;
        const isTextCover =
          item.textCover &&
          `<div class="flipCards_1_flipCardCover_text">${item.textCover}</div>`;
        const isImageFace =
          item.imgSrcFace &&
          `
            <div class="zoom_open_button_white" title="Увеличить изображение">
              <div class="icon_zoomPicture whiteZoomImg"></div>
            </div>
            <img src="${item.imgSrcFace}" alt="${item.name}" class="flipCards_1_flipCardFaceImg" />
        `;
        const isSoundFace =
          item.audioSrcFace &&
          `
                    <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" ${soundDataAttribute}='${faceId}_${item.id}${taskId}'>
                      <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                      <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                      <audio class="flipCards_1_flipCard_audio" id='${faceId}_${item.id}${taskId}' src="${item.audioSrcFace}">
                            Your browser does not support the <code>audio</code> element.
                          </audio>
                    </div>`;
        const isTextFace =
          item.textFace &&
          `<div class="flipCards_1_flipCardFace_text">${item.textFace}</div>`;
        return `
                    <div
                      class="flipCards_1_flipCard"
                      style="width: ${width}%"
                    >
                    <div class="flipCards_1_flipCardCover">
                    ${isImageCover}
                    ${isSoundCover}
                    ${isTextCover}

                    </div>
                    <div class="flipCards_1_flipCardFace">
                    ${isImageFace}
                    ${isSoundFace}
                    ${isTextFace}

                        </div>
                      </div> `;
      })
      .join("");
  }

  function onBtnResetClick() {
    [...cards].forEach((el) =>
      el.classList.remove("flipCards_1_flipCards_flipped")
    );
    resetSound(soundSetStates);
  }

  function onCardClick(e) {
    if (e.target.classList.contains("zoom_open_button_white")) {
      scaleImage(e.target.nextElementSibling);
      return;
    }

    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      onSoundIconClick(e, soundSetStates, audioFiles, soundDataAttribute);
      return;
    }
    resetSound(soundSetStates);

    if (e.currentTarget.classList.contains("flipCards_1_flipCards_flipped")) {
      e.currentTarget.classList.remove("flipCards_1_flipCards_flipped");
    } else e.currentTarget.classList.add("flipCards_1_flipCards_flipped");
  }
}
