// импорты
//  checkButton_classList_changer,
//  feedBackChanger,
//  getOldPanelLinks,

// получение кнопок
const { btnReset, btnTest, result } = getOldPanelLinks(taskWrapper);

// начало игры
isGameStart = true;
checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);

// сброс
isGameStart = false;
checkButton_classList_changer(isGameStart, onBtnTestClick, btnTest);
feedBackChanger("reset", isGameStart, result);

// победа
feedBackChanger("win", isGameStart, result);
// поражение
feedBackChanger("lose", isGameStart, result);

// html
<div class="temporary">
  <div class="head">
    <div class="drop"></div>
    <div class="save"></div>
    <div class="check_your"></div>
    <div class="result"></div>
  </div>
  <div class="interakt_zadanie">//task</div>
</div>;
