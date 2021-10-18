'use strict';
const WALL = '🧱';
const FOOD = '🍭';
const EMPTY = ' ';
const SUPERFOOD = '🍩';
const CHERRY = '🍒';

var gBoard;
var gGame = {
  score: 0,
  isOn: false,
};
var gTotalFood = 0;
function init() {
  console.log('hello');
  gBoard = buildBoard();
  createPacman(gBoard);
  createGhosts(gBoard);
  printMat(gBoard, '.board-container');
  getTotalFood(gBoard);
  setInterval(function () {
    setRandomCherry();
  }, 10000);
  gGame.isOn = true;
}

function restart() {
  document.querySelector('.game-status').style.display = 'none';
  init();
}

function buildBoard() {
  var SIZE = 20;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;
      if (i === 0) board[i][j] = WALL;
      if (i === 19) board[i][j] = WALL;
      if (j === 0) board[i][j] = WALL;
      if (j === 19) board[i][j] = WALL;
      if (i === 2 && j === 2) board[i][j] = WALL;
      if (i === 2 && j === 3) board[i][j] = WALL;
      if (i === 3 && j === 2) board[i][j] = WALL;
      if (i === 3 && j === 3) board[i][j] = WALL;

      if (i === 2 && j === 17) board[i][j] = WALL;
      if (i === 2 && j === 16) board[i][j] = WALL;
      if (i === 3 && j === 17) board[i][j] = WALL;
      if (i === 3 && j === 16) board[i][j] = WALL;

      if (i === 17 && j === 2) board[i][j] = WALL;
      if (i === 16 && j === 2) board[i][j] = WALL;
      if (i === 17 && j === 3) board[i][j] = WALL;
      if (i === 16 && j === 3) board[i][j] = WALL;

      if (i === 17 && j === 17) board[i][j] = WALL;
      if (i === 16 && j === 17) board[i][j] = WALL;
      if (i === 17 && j === 16) board[i][j] = WALL;
      if (i === 16 && j === 16) board[i][j] = WALL;

      if (i === 2 && j === 6) board[i][j] = WALL;
      if (i === 2 && j === 5) board[i][j] = WALL;
      if (i === 3 && j === 5) board[i][j] = WALL;
      if (i === 3 && j === 6) board[i][j] = WALL;

      if (i === 2 && j === 14) board[i][j] = WALL;
      if (i === 2 && j === 13) board[i][j] = WALL;
      if (i === 3 && j === 14) board[i][j] = WALL;
      if (i === 3 && j === 13) board[i][j] = WALL;

      if (i === 7 && j === 18) board[i][j] = WALL;
      if (i === 7 && j === 17) board[i][j] = WALL;
      if (i === 1 && j === 16) board[i][j] = WALL;
      if (i === 7 && j === 1) board[i][j] = WALL;
      if (i === 7 && j === 16) board[i][j] = WALL;

      if (i === 7 && j === 2) board[i][j] = WALL;
      if (i === 7 && j === 3) board[i][j] = WALL;

      if (i === 7 && j === 7) board[i][j] = WALL;
      if (i === 7 && j === 8) board[i][j] = WALL;
      if (i === 7 && j === 11) board[i][j] = WALL;
      if (i === 7 && j === 12) board[i][j] = WALL;
      if (i === 8 && j === 12) board[i][j] = WALL;
      if (i === 9 && j === 12) board[i][j] = WALL;
      if (i === 10 && j === 12) board[i][j] = WALL;
      if (i === 8 && j === 12) board[i][j] = WALL;
      if (i === 9 && j === 7) board[i][j] = WALL;
      if (i === 8 && j === 7) board[i][j] = WALL;
      if (i === 10 && j === 7) board[i][j] = WALL;
      if (i === 10 && j === 8) board[i][j] = WALL;
      if (i === 10 && j === 9) board[i][j] = WALL;
      if (i === 10 && j === 10) board[i][j] = WALL;
      if (i === 10 && j === 11) board[i][j] = WALL;

      if (i === 14 && j === 14) board[i][j] = WALL;
      if (i === 14 && j === 13) board[i][j] = WALL;
      if (i === 14 && j === 12) board[i][j] = WALL;
      if (i === 14 && j === 11) board[i][j] = WALL;
      if (i === 14 && j === 10) board[i][j] = WALL;
      if (i === 14 && j === 9) board[i][j] = WALL;
      if (i === 14 && j === 8) board[i][j] = WALL;
      if (i === 14 && j === 7) board[i][j] = WALL;
      if (i === 14 && j === 6) board[i][j] = WALL;
      if (i === 14 && j === 5) board[i][j] = WALL;

      if (
        (i === 1 && j === 1) ||
        (i === 1 && j === 18) ||
        (i === 18 && j === 18) ||
        (i === 18 && j === 1)
      ) {
        board[i][j] = SUPERFOOD;
      }
    }
  }
  return board;
}

// update model and dom
function updateScore(diff) {
  //model
  gGame.score += diff;

  //dom
  var elScore = document.querySelector('h2 span');
  elScore.innerText = gGame.score;
}

function gameOver() {
  document.querySelector('.game-status').style.display = 'block';
  gGame.isOn = false;
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;
  gTotalFood = 1;
  gDeadGhosts = [];
}
function victory() {
  gGame.isOn = false;
  document.querySelector('.game-status').style.display = 'block';
  document.querySelector('.text-status').innerText = 'You Won!!!';
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;
  gTotalFood = 1;
  gDeadGhosts = [];
}

function getTotalFood(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      var currCell = gBoard[i][j];
      if (currCell === FOOD) gTotalFood++;
    }
  }
}
