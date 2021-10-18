'use strict';
const GHOST = '&#9781;';

var gGhosts;
var gIntervalGhosts;

// 3 ghosts and an interval
function createGhosts(board) {
  gGhosts = [];
  createGhost(board);
  createGhost(board);
  createGhost(board);
  gIntervalGhosts = setInterval(moveGhosts, 1000);
}

function createGhost(board) {
  var ghost = {
    location: {
      i: 9,
      j: 9,
    },
    currCellContent: FOOD,
  };

  gGhosts.push(ghost);

  board[ghost.location.i][ghost.location.j] = GHOST;
}

// : loop through ghosts
function moveGhosts(ghost) {
  //   var colors = ['yellow', 'green', 'red', 'while', 'purple', 'gray'];
  for (var i = 0; i < gGhosts.length; i++) {
    moveGhost(gGhosts[i]);
  }
}
// : figure out moveDiff, nextLocation, nextCell
function moveGhost(ghost) {
  if (
    ghost.location.i === gPacman.location.i &&
    ghost.location.j === gPacman.location.j
  ) {
    gameOver();
    return;
  }
  // { i: 0, j: 1 }
  var moveDiff = getMoveDiff();
  var nextLocation = {
    i: ghost.location.i + moveDiff.i,
    j: ghost.location.j + moveDiff.j,
  };
  var nextCellContent = gBoard[nextLocation.i][nextLocation.j];

  // : return if cannot move
  if (nextCellContent === WALL) return;
  if (nextCellContent === GHOST) return;

  // : moving from corrent position:
  // : update the model
  gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent;
  // : update the DOM
  renderCell(ghost.location, ghost.currCellContent);
  // : Move the ghost to new location
  ghost.currCellContent = nextCellContent;
  ghost.location = nextLocation;
  // : update the model
  gBoard[nextLocation.i][nextLocation.j] = GHOST;
  // : update the DOM
  var ghostHTML = getGhostHTML(ghost);

  renderCell(nextLocation, ghostHTML);
}

function getMoveDiff() {
  var randNum = getRandomIntInclusive(1, 100);
  if (randNum <= 25) {
    return { i: 0, j: 1 };
  } else if (randNum <= 50) {
    return { i: -1, j: 0 };
  } else if (randNum <= 75) {
    return { i: 0, j: -1 };
  } else {
    return { i: 1, j: 0 };
  }
}

function getGhostHTML(ghost) {
  var colors = ['yellow', 'green', 'red'];
  var randIdx = getRandomIntInclusive(0, colors.length - 1);

  if (ghost.color) {
    return `<span style= "color:${ghost.color}">${GHOST}</span>`;
  } else {
    ghost['color'] = colors[randIdx];
    console.log(gGhosts);
    return `<span style= "color:${colors[randIdx]}">${GHOST}</span>`;
  }
}
