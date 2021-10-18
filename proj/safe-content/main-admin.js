var gSortBy = 'name';

function init() {
  renderTable();
}

function logOut() {
  window.location = 'index.html';
  localStorage.clear();
}

function renderTable() {
  document.querySelector('.gallery-container').style.display = 'none';
  document.querySelector('.table-container').style.display = 'block';

  var tableHtml = '';
  var elTable = document.querySelector('.table-container');
  tableHtml += `<tr class="table-row">`;
  for (const key in gUsers[0]) {
    tableHtml += `<th> ${key} </th>`;
  }
  tableHtml += `</tr>`;

  gUsers.forEach((user) => {
    tableHtml += `<tr class="table-row">`;
    for (const key in user) {
      tableHtml += `<td>${user[key]}</td>`;
    }
    tableHtml += `</tr>`;
  });

  return (elTable.innerHTML = `<table class="main-table"> ${tableHtml}</table>`);
}

function onSetSort(sortBy) {
  gSortBy = sortBy;
  if (sortBy === 'name') sortByName();
  else sortByTime();
  renderTable();
}

function getUsersToShow() {
  return gUsers;
}

function onSetGallery(groupBy) {
  console.log(groupBy);
  if (groupBy === 'gallery') {
    document.querySelector('.table-container').style.display = 'none';
    var galleryCont = document.querySelector('.gallery-container');
    galleryCont.style.display = 'block';
    var galleryHtml = '';
    gUsers.forEach((user) => {
      galleryHtml += `<div class="sub-gallery">`;
      for (const key in user) {
        galleryHtml += `<span>${key}:,${user[key]}</span>`;
      }
      galleryHtml += `</div>`;
    });
    return (galleryCont.innerHTML = galleryHtml);
  } else {
    renderTable();
  }
}
