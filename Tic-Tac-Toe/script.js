let turn = 1;

function play(id) {
  if (id.innerHTML === "&nbsp;") {
    if (turn % 2 == 1) {
      id.innerHTML = "X";
    } else {
      id.innerHTML = "O";
    }
    status();
    turn++;
  }
}

function status() {
  if (
    (B1.innerHTML == "X" && B2.innerHTML == "X" && B3.innerHTML == "X") ||
    (B4.innerHTML == "X" && B5.innerHTML == "X" && B6.innerHTML == "X") ||
    (B7.innerHTML == "X" && B8.innerHTML == "X" && B9.innerHTML == "X") ||
    (B1.innerHTML == "X" && B4.innerHTML == "X" && B7.innerHTML == "X") ||
    (B2.innerHTML == "X" && B5.innerHTML == "X" && B8.innerHTML == "X") ||
    (B3.innerHTML == "X" && B6.innerHTML == "X" && B9.innerHTML == "X") ||
    (B1.innerHTML == "X" && B5.innerHTML == "X" && B9.innerHTML == "X") ||
    (B3.innerHTML == "X" && B5.innerHTML == "X" && B7.innerHTML == "X")
  ) {
    win.innerHTML = "Player 1 Wins";
    freeze();
  } else if (
    (B1.innerHTML == "O" && B2.innerHTML == "O" && B3.innerHTML == "O") ||
    (B4.innerHTML == "O" && B5.innerHTML == "O" && B6.innerHTML == "O") ||
    (B7.innerHTML == "O" && B8.innerHTML == "O" && B9.innerHTML == "O") ||
    (B1.innerHTML == "O" && B4.innerHTML == "O" && B7.innerHTML == "O") ||
    (B2.innerHTML == "O" && B5.innerHTML == "O" && B8.innerHTML == "O") ||
    (B3.innerHTML == "O" && B6.innerHTML == "O" && B9.innerHTML == "O") ||
    (B1.innerHTML == "O" && B5.innerHTML == "O" && B9.innerHTML == "O") ||
    (B3.innerHTML == "O" && B5.innerHTML == "O" && B7.innerHTML == "O")
  ) {
    win.innerHTML = "Player 2 Wins";
    freeze();
  } else if (isDraw()) {
    win.innerHTML = "Game Draw";
  }
}

function isDraw() {
  for (i = 1; i < 10; i++) {
    if (document.getElementById("B" + i).innerHTML === `&nbsp;`) return false;
  }
  return true;
}

function freeze() {
  for (let i = 1; i <= 9; i++) {
    let button = document.getElementById("B" + i);
    if (button.innerHTML == "&nbsp;") button.innerHTML = `&nbsp;&nbsp;`;
  }
}

function reset() {
  turn = 1;
  for (let i = 1; i <= 9; i++) {
    document.getElementById("B" + i).innerHTML = `&nbsp;`;
  }
  win.innerHTML = "";
}
