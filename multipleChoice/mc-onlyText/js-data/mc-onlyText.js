(() => {
  // массив входящих вариантов ответа ((минимум 4, максимум 15 элементов)),

  let answersData = [
    {
      id: 1,
      text: "2 + 2",
      data: "true",
    },
    {
      id: 2,
      text: "3 + 1",
      data: "true",
    },
    {
      id: 3,
      text: "3 + 3",
      data: "false",
    },
    {
      id: 4,
      text: "1 + 4",
      data: "false",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю data  в массиве
  const rightAnswer = "true";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-1");

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoiceTextMarkup(answersData, rightAnswer, taskWrapper);
})();
(() => {
  // массив входящих вариантов ответа ((минимум 4, максимум 15 элементов)),

  let answersData = [
    {
      id: 1,
      text: "Lorem ipsum dolor",
      data: "false",
    },
    {
      id: 2,
      text: "sit amet consectetur",
      data: "false",
    },
    {
      id: 3,
      text: "adipisicing elit. Rerum",
      data: "false",
    },
    {
      id: 4,
      text: "quisquam consequatur. Amet",
      data: "false",
    },
    {
      id: 1,
      text: "reprehenderit atque laboriosam",
      data: "false",
    },
    {
      id: 2,
      text: "ad ratione numquam",
      data: "false",
    },
    {
      id: 3,
      text: "3 + 3",
      data: "false",
    },
    {
      id: 4,
      text: "1 + 4",
      data: "false",
    },
    {
      id: 1,
      text: "2 + 2",
      data: "true",
    },
    {
      id: 2,
      text: "3 + 1",
      data: "true",
    },
    {
      id: 3,
      text: "3 + 3",
      data: "false",
    },
    {
      id: 4,
      text: "1 + 4",
      data: "false",
    },
    {
      id: 2,
      text: "3 + 1",
      data: "true",
    },
    {
      id: 3,
      text: "3 + 3",
      data: "false",
    },
    {
      id: 4,
      text: "1 + 4",
      data: "false",
    },
  ];
  // здесь указывается правильный ответ, он проверяется по полю data  в массиве
  const rightAnswer = "true";

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-2");

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderMultipleChoiceTextMarkup(answersData, rightAnswer, taskWrapper);
})();

function renderMultipleChoiceTextMarkup(answersData, rightAnswer, taskWrapper) {
  const arrayLength = answersData.length;

  const reloadTaskBtn = taskWrapper.querySelector(".task_reloadTask");
  const checkingTaskBtn = taskWrapper.querySelector(".task_checkingTask");
  const checkTask = taskWrapper.querySelector(".task_checkTask");
  const chek_answerTxt = taskWrapper.querySelector(".task_chek_answer");
  const answersWrapper = taskWrapper.querySelector(".task_answersWrapper");

  createMarcup(answersData);

  checkingTaskBtn.addEventListener("click", onCheckTaskBtnClick);
  reloadTaskBtn.addEventListener("click", onReloadBtnClick);

  answersWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("task_answer")) {
      e.target.classList.toggle("task_active");
    }
  });

  const rightAnswersCount = answersData.filter(
    (answer) => answer.data === rightAnswer
  ).length;

  function createMarcup(answersData) {
    answersWrapper.insertAdjacentHTML(
      "beforeend",
      fillField(shuffleArr(answersData))
    );
  }
  function shuffleArr(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  function fillField(arr) {
    const widthText = arr.some((el) => el.text.length > 6);
    if (!widthText && arr.length > 4) {
      answersWrapper.classList.add("task_answers_width");
    }

    return arr
      .map((item) => {
        let elementWidth;
        let elWidthSmall = "";

        if (widthText) {
          if (arrayLength > 10) {
            elementWidth = `"width: calc(100% / 5 - 20px)"`;
          } else if (arrayLength > 8 && arrayLength <= 10) {
            elementWidth = `"width: calc(100% / 5 - 20px)"`;
          } else if (arrayLength > 6 && arrayLength <= 8) {
            elementWidth = `"width: calc(100% / 4 - 20px)"`;
          }
          if (arrayLength > 4 && arrayLength <= 6) {
            elementWidth = `"width: calc(100% / 3 - 20px)"`;
          } else if (arrayLength === 4) {
            elementWidth = `"width: calc(100% / 2 - 20px)"`;
          }
        } else {
          elWidthSmall = ["task_answer_width", "task_answer_height"].join(" ");
        }
        return `
                  <div class="task_answer ${elWidthSmall}" style=${elementWidth} data-number=${item.data}>
                      ${item.text}
                  </div>
              `;
      })
      .join("");
  }

  function onReloadBtnClick(e) {
    answersWrapper.innerHTML = "";

    createMarcup(answersData);

    checkingAnswerReset();
  }

  function onCheckTaskBtnClick(e) {
    let imgs = document.querySelectorAll(".task_active");
    let winVar = 0;
    imgs.forEach((item) => {
      if (item.getAttribute("data-number") === rightAnswer) {
        winVar += 1;
        item.classList.add("task_green");
      } else {
        winVar -= 1;
        item.classList.add("task_red");
      }
    });

    if (winVar === rightAnswersCount) {
      checkingAnswerPositive();
    } else {
      checkingAnswerNegative();
    }
  }

  function checkingAnswerPositive() {
    chek_answerTxt.innerHTML = "<span>&#128077;</span> Молодец!";
    checkTask.style.background = "lightgreen";
  }
  function checkingAnswerNegative() {
    chek_answerTxt.innerHTML = "<span>&#10060;</span> Попробуй еще!";
    checkTask.style.background = "lightpink";
  }
  function checkingAnswerReset() {
    chek_answerTxt.innerHTML = "";
    checkTask.style.background = "";
  }
}
