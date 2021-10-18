function logInFlow() {
  const userName = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const gUsers = craeteusers();

  gUsers.forEach((user) => {
    if (userName === user.username && password === user.password) {
      const elTitle = document.querySelector('.after-login');
      const elLogOut = document.querySelector('.logout-section');
      const elLogIn = document.querySelector('.login-section');
      user.lastLoginTime = +new Date();

      if (user.isAdmin) {
        saveToStorage('users', gUsers);
        window.location = 'admin.html';
        return;
      }

      elLogIn.style.display = 'none';
      elTitle.innerHTML = `Hey ${user.username} again!`;
      elLogOut.style.display = 'block';

      saveToStorage('users', gUsers);
    }
  });
}

function logIn() {
  const userName = document.querySelector('#username');
  const password = document.querySelector('#password');
  const elLogOut = document.querySelector('.logout-section');
  const elLogIn = document.querySelector('.login-section');

  elLogOut.style.display = 'none';
  elLogIn.style.display = 'block';
  userName.value = '';
  password.value = '';

  localStorage.clear();
}
