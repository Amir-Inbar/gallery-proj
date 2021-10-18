function sortByTxt() {
  gTodos.sort((a, b) => {
    let fa = a.txt.toLowerCase(),
      fb = b.txt.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
}

function sortByImport() {
  gTodos.sort((a, b) => {
    return a.importance - b.importance;
  });
}

function sortByCraeted() {
  gTodos.sort((a, b) => {
    return a.createdAt - b.createdAt;
  });
}
