function sortByName() {
  gUsers.sort((a, b) => {
    let fa = a.username.toLowerCase(),
      fb = b.username.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
}

function sortByTime() {
  gUsers.sort((a, b) => {
    return a.lastLoginTime - b.lastLoginTime;
  });
}

function makeId(length = 5) {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var txt = '';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
