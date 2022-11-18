import {
  // renderCheckPanel,
  // getCheckPanelElements,
  checkButton_classList_changer,
  feedBackChanger,
  getOldPanelLinks,
} from "../../../_common_files/common_scripts.js";
(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "coloringBook_1_task-1";
  //массив карандашей, в поле imgSrc указывается путь к изображению карандаша,
  // в поле colorName - hex - цвет карандаша
  const pencils = [
    {
      id: 1,
      colorName: "#FFFFFF",
      imgSrc: "Images_1/coloringBook_1/pencils_white.svg",
    },
    {
      id: 2,
      colorName: "#000000",
      imgSrc: "Images_1/coloringBook_1/pencils_black-000000.svg",
    },
    {
      id: 3,
      colorName: "#7B7A7C",
      imgSrc: "Images_1/coloringBook_1/grey-7B7A7C.png",
    },
    {
      id: 4,
      colorName: "#FFD9BB",
      imgSrc: "Images_1/coloringBook_1/pencils_bodily-FFD9BB.svg",
    },
    {
      id: 5,
      colorName: "#864F16",
      imgSrc: "Images_1/coloringBook_1/pencils_Brown-864F16.svg",
    },
    {
      id: 6,
      colorName: "#432D00",
      imgSrc: "Images_1/coloringBook_1/pencils_dark-brown-432D00.svg",
    },
    {
      id: 7,
      colorName: "#D83639",
      imgSrc: "Images_1/coloringBook_1/red-D83639.png",
    },
    {
      id: 8,
      colorName: "#990000",
      imgSrc: "Images_1/coloringBook_1/pencils_burgundy-990000.svg",
    },

    {
      id: 9,
      colorName: "#E3812D",
      imgSrc: "Images_1/coloringBook_1/orange-E3812D.png",
    },

    {
      id: 10,
      colorName: "#E7AA22",
      imgSrc: "Images_1/coloringBook_1/lightOrange-E7AA22.png",
    },
    {
      id: 11,
      colorName: "#FFFF99",
      imgSrc: "Images_1/coloringBook_1/pencils_yellow-FFFF99.svg",
    },

    {
      id: 12,
      colorName: "#006600",
      imgSrc: "Images_1/coloringBook_1/pencils_dark-green-006600.svg",
    },
    {
      id: 13,
      colorName: "#50AC6D",
      imgSrc: "Images_1/coloringBook_1/green-50AC6D.png",
    },
    {
      id: 14,
      colorName: "#4F79BC",
      imgSrc: "Images_1/coloringBook_1/blue-4F79BC.png",
    },

    {
      id: 15,
      colorName: "#8EC8EF",
      imgSrc: "Images_1/coloringBook_1/lightBlue-8EC8EF.png",
    },
    {
      id: 16,
      colorName: "#8D6AAB",
      imgSrc: "Images_1/coloringBook_1/violet-8D6AAB.png",
    },
    {
      id: 17,
      colorName: "#D42482",
      imgSrc: "Images_1/coloringBook_1/pink-D42482.png",
    },
    {
      id: 18,
      colorName: "#ECA4A6",
      imgSrc: "Images_1/coloringBook_1/lightPink-ECA4A6.png",
    },
    {
      id: 19,
      colorName: "#FFFFFF",
      imgSrc: "Images_1/coloringBook_1/eraser.svg",
    },
  ];

  //сама функция, здесь ничего менять не нужно
  createColoringBook_1_Markup(pencils, taskId);
})();

// ФУНКЦИЯ
function createColoringBook_1_Markup(pencils, taskId) {
  let currentColor = null;

  const taskWrapper = document.querySelector(`#${taskId}`);
  const pencilsBox = taskWrapper.querySelector(
    ".coloringBook_1_pencilsWrapper"
  );
  const svgBox = taskWrapper.querySelector(".coloringBook_1_coloringImage");

  pencilsBox.insertAdjacentHTML("beforeend", createPencilsMarkup(pencils));
  // renderCheckPanel(taskWrapper, false);
  // const { btnReset } = getCheckPanelElements(taskWrapper);
  const { btnReset } = getOldPanelLinks(taskWrapper);

  pencilsBox.addEventListener("click", onPencilClick);
  svgBox.addEventListener("click", onSvgClick);

  btnReset.addEventListener("click", onBtnResetClick);

  function createPencilsMarkup(pencils) {
    return pencils
      .map((pencil) => {
        return `<img src="${pencil.imgSrc}" alt="${pencil.colorName}" class="coloringBook_1_pencil" data-color="${pencil.colorName}" />
  `;
      })
      .join("");
  }

  function onPencilClick(e) {
    if (!e.target.classList.contains("coloringBook_1_pencil")) return;
    [...pencilsBox.children].forEach((pencil) => {
      pencil.classList.remove("coloringBook_1_pencilActive");
    });
    e.target.classList.add("coloringBook_1_pencilActive");
    currentColor = e.target.attributes.getNamedItem("data-color").value;
  }

  function onSvgClick(e) {
    if (e.target.classList.contains("coloringBook_1_coloringImage")) return;

    e.target.parentElement.style.fill = currentColor;
  }

  function onBtnResetClick() {
    [...svgBox.children].forEach((child) => {
      if (
        child.attributes.getNamedItem("stoppainting") &&
        child.attributes.getNamedItem("stoppainting").value === "true"
      )
        return;
      child.style.fill = "#ffffff";
    });
    [...pencilsBox.children].forEach((pencil) => {
      pencil.classList.remove("coloringBook_1_pencilActive");
    });
  }
}
