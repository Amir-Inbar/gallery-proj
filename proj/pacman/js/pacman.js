'use strict';
// const PACMAN = `<div class="pacman">
// <div class="pacman-body">
//     <div class="pacman-eye"></div>
//         <div class="pacman-mouth">  </div>
// </div>
// </div>`;
const PACMAN = '🌊';

var gPacman;
var gDeadGhosts = [];
var gGhostCount = 0;
function createPacman(board) {
  gPacman = {
    location: {
      i: 1,
      j: 3,
    },
    isSuper: false,
  };
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(ev) {
  if (!gGame.isOn) return;
  // : use getNextLocation(), nextCell
  var nextLocation = getNextLocation(ev);
  var nextCellContent = gBoard[nextLocation.i][nextLocation.j];
  // : return if cannot move
  if (nextCellContent === WALL) return;
  if (nextCellContent === FOOD) {
    updateScore(1);
    gTotalFood--;

    console.log(gTotalFood);
    if (gTotalFood === 0) {
      victory();
    }
    // check if Pacman collect all balls
  }

  if (nextCellContent === CHERRY) updateScore(10);
  if (nextCellContent === GHOST && !gPacman.isSuper) {
    gameOver();
    return;
  }
  if (nextCellContent === SUPERFOOD && gPacman.isSuper) {
    return;
  }

  if (nextCellContent === SUPERFOOD) {
    gPacman.isSuper = true;
    superFoodHandle();
    setTimeout(function () {
      gPacman.isSuper = false;
      superFoodHandle();
      for (let i = 0; i < gDeadGhosts.length; i++) {
        createGhost(gBoard);
      }
    }, 5000);
    gDeadGhosts = [];
  }

  if (nextCellContent === GHOST && gPacman.isSuper) {
    var ghostIdx;
    for (var i = 0; i < gGhosts.length; i++) {
      var ghost = gGhosts[i];
      if (
        ghost.location.i === nextLocation.i &&
        ghost.location.j === nextLocation.j
      )
        ghostIdx = i;
    }
    var deadGhost = gGhosts.splice(ghostIdx, 1)[0];
    gDeadGhosts.push(deadGhost);
  }

  // : hitting a ghost?  call gameOver

  // : moving from corrent position:
  // : update the model
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  // : update the DOM
  renderCell(gPacman.location, EMPTY);
  // : Move the pacman to new location
  gPacman.location = nextLocation;
  // : update the model
  gBoard[nextLocation.i][nextLocation.j] = PACMAN;
  // : update the DOM
  renderCell(nextLocation, PACMAN);
}

function superFoodHandle() {
  for (let i = 0; i < gGhosts.length; i++) {
    gGhosts[i].color = gPacman.isSuper ? 'blue' : 'green';
  }
}

function getNextLocation(ev) {
  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j,
  };
  var elPacman = document.querySelector(
    `.cell${gPacman.location.i}-${gPacman.location.j}`
  );
  // : figure out nextLocation
  switch (ev.key) {
    case 'ArrowDown':
      nextLocation.i++;
      elPacman.style.transform = 'rotate(90deg)';
      break;
    case 'ArrowUp':
      nextLocation.i--;
      elPacman.style.transform = 'rotate(-90deg)';
      break;
    case 'ArrowRight':
      nextLocation.j++;
      elPacman.style.transform = 'rotate(180deg)';
      break;
    case 'ArrowLeft':
      nextLocation.j--;
      elPacman.style.transform = 'rotateY(0deg)';
      break;
  }
  return nextLocation;
}
