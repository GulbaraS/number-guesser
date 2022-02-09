let min = 1,
  max = 10,
  guessesLeft = 3,
  winningNum = Math.floor(Math.random() * (max - min) + min);
  

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
    guessInput.value = "";
    guessBtn.addEventListener("click", () => window.location.reload());
  } 
  
  // check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");
    newBtn ("новая игра", "green");    
    guessBtn.addEventListener("click", () => {
    guessInput.value = "";
    window.location.reload();
    })
  }

    else if (guess < 10 && guess >= 1) {

      if (guessesLeft >= 2 && guessesLeft <= 3) {
    setMessage(`Вы не угадали число. Осталось попыток: ${guessesLeft - 1}`, "red");
    guessesLeft--;
    guessInput.value = "";
    
  } 
    else {
      guessInput.disabled = true;
      setMessage(`Вы не угадали загаданное число: ${winningNum}!`, "red");
      guessBtn.innerHTML = "Новая игра";
      guessBtn.style.border = "1px solid red";
      guessBtn.addEventListener("click", () => {
      guessInput.value = "";
      window.location.reload();
      })
    }

};

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function newBtn (msgNew, color) {
  messageBtn.textContent = msgNew;
  messageBtn.style.color = color;
}

})
