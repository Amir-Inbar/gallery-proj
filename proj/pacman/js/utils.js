function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>';
    }
    strHTML += '</tr>';
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function emptyCells(board) {
  var emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      var currCell = board[i][j];
      var location = { i: i, j: j };
      if (currCell === ' ') {
        emptyCells.push(location);
      }
    }
  }
  return emptyCells;
}

function setRandomCherry() {
  var emptyCellsLocation = emptyCells(gBoard);
  var emptyCell = emptyCellsLocation.splice(
    getRandomIntInclusive(0, emptyCellsLocation.length - 1),
    1
  )[0];
  //MODEL
  if (emptyCellsLocation.length === 0) return;
  gBoard[emptyCell.i][emptyCell.j] = CHERRY;
  //DOM
  renderCell(emptyCell, CHERRY);
}
