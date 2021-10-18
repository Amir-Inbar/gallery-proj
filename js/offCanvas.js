function openCanvas() {
  document.querySelector('.contact-me').style.background = 'white';
  document
    .querySelector('.offcanvas-btn')
    .classList.toggle('offcanvas-btn-open');
  document
    .querySelector('.offcanvas-aside')
    .classList.toggle('offcanvas-aside-open');

  var elContantMe = document.querySelector('.contact-me-container');

  var htmlStr = `
  <form>
  <div class="form-group">
    <label for="email-address">Email address</label>
    <input type="email" class="form-control" id="email-address" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="subject">subject</label>
    <input type="text" class="form-control" id="subject" placeholder="Type subject here">
  </div>
  <div class="form-group">
  <label for="text-area">Message Body</label>
  <textarea class="form-control" id="text-area" rows="3" placeholder="Type message text here"></textarea>
</div>
  <button type="button" class="btn btn-primary" onclick="openNewWindow()">Submit</button>
</form>

    `;
  elContantMe.innerHTML = htmlStr;
}

function openNewWindow() {
  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=amirinbarcode@gmail.com.com&su=Amazing!&b'
  );
}
