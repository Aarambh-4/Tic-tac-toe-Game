let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let crrmode = "light";
mode.addEventListener("click", () => {
  if (crrmode === "light") {
    crrmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    crrmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(crrmode);
});

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
turnO = true;
enableBoxes();
msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#ffa200";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#ef233c";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posit1Val = boxes[pattern[0]].innerText;
    let posit2Val = boxes[pattern[1]].innerText;
    let posit3Val = boxes[pattern[2]].innerText;

    if (posit1Val != "" && posit2Val != "" && posit3Val != "") {
      if (posit1Val === posit2Val && posit2Val === posit3Val) {
        showWinner(posit1Val);

      }
    }
  }
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);

