const gUsers = createUsers();

function createUsers() {
  return [
    createUser('amir', 'secret', true),
    createUser('tomer', 'table', false),
    createUser('amir', 'light', false),
  ];
}

function createUser(username, password, isAdmin) {
  return {
    id: _makeId(),
    username,
    password,
    lastLoginTime: +new Date(),
    isAdmin,
  };
}

function doLogin(userName, password) {
  var user = gUsers.find((user) => {
    return user.username === userName && user.password === password;
  });
  if (!user) return null;
  else return user;
}
