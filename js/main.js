console.log('Starting up');

function initPage() {
  renderProf();
}

function renderProf() {
  var projs = getgProjs();
  const elProfolio = document.querySelector('.profolio-container');
  var strHtml = projs.map((proj) => {
    return `
      <div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#${proj.id}" onclick="renderModal('${proj.id}')">
      <div class="portfolio-hover">
      <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
      </div>
      </div>
      <img class="img-fluid" src="${proj.url}" alt="${proj.name}">
      </a>
      <div class="portfolio-caption">
      <h4>${proj.title}</h4>
      <p class="text-muted">${proj.desc}</p>
      </div>
      </div>
      `;
  });
  elProfolio.innerHTML = strHtml.join('');
}

function renderModal(projId) {
  var proj = getProjById(projId);

  const elModal = document.querySelector('.modal-container');
  var strHtml = `
  <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img class="img-fluid d-block mx-auto" src="${proj.url}" alt="${proj.name}">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date:${proj.publishedAt}</li>
                      <li>Labels: ${proj.labels}</li>
                      <li>Title:${proj.title}</li>
                      </ul>
                      <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                      <a class="btn btn-primary" href="/proj/${proj.id}/index.html" target="_blank">check The Project OutSide</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  elModal.innerHTML = strHtml;
}
