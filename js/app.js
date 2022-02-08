let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");
  messageBtn = document.querySelector(".messageBtn");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");
    newBtn ("новая игра", "green");
  }

  if(attempts===0) => newBtn("новая игра", "red");
  
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function newBtn (msgNew, color) {
  messageBtn.textContent = msgNew;
  messageBtn.style.color = color;
}

function reloadGame()