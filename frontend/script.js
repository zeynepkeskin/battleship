let emptyBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let board = JSON.parse(JSON.stringify(emptyBoard));
let blockType = {
  water: 0,
  ship: 1,
  shot: 2,
  missed: 3,
};

function drawBoard() {
  let html = "";
  for (let i = 0; i < board.length; i++) {
    html += '<div class="row">';
    for (let j = 0; j < board[i].length; j++) {
      switch (board[i][j]) {
        case blockType.water:
          html += `<div class="block water" onclick="placeShip(${i},${j})"></div>`;
          break;
        case blockType.ship:
          html += `<div class="block ship"  onclick="placeShip(${i},${j})"></div>`;
          break;
        case blockType.shot:
          html += '<div class="block shot"></div>';
          break;
        case blockType.missed:
          html += '<div class="block water">X</div>';
          break;
      }
    }
    html += "</div>";
  }
  document.querySelector(".myBoard").innerHTML = html;
}
drawBoard();
function placeShip(i, j) {
  if (board[i][j] === blockType.ship) {
    board[i][j] = blockType.water;
  } else {
    board[i][j] = blockType.ship;
  }
  drawBoard();
}

function validateLayout() {
  let shipBlockNum = 5 + 4 + 3 + 2 + 2 + 1 + 1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === blockType.ship) shipBlockNum--;
    }
  }
  if (shipBlockNum !== 0) return false;

  return true;
}

function join() {
  if (validateLayout()) {
    //TODO: send /join request to the server
  } else {
    alert("fix layout");
  }
}
