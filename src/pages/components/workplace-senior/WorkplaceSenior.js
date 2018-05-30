class WorkplaceSenior {

  _genContent(data) {
    return `
      <h2 class="title">職場前輩</h2>
      <a href="${data.url}" target="_blank">
          <div class="d-flex text-gray-40 workplace-senior_content">
              <div class="media">
                  <img src="${data.imgPath}" class="my-auto">
                  <div class="media-body pl-4 mt-1">
                      <h5>${data.title}</h5>
                      <small class="d-block mt-3">${data.description1}</small>
                      <p>${data.description2}</p>
                  </div>
              </div>
              <div class="pl-4 py-2 my-4 workplace-senior_about">
                  <h5>關於前輩</h5>
                  <ul class="list-unstyled mb-0">
                      ${
      data.experiences.reduce((pre, cur) =>
        pre + `<li>${cur}</li>`
        , '')
      }
                  </ul>
              </div>
          </div>
      </a>
    `;
  }

  render(url = API_PATH + '/workplace-senior') {
    const data = FetchHelper.getData(url);
    if (data.error) return console.error(data.error);

    $('.js-workplace-senior').html(this._genContent(data.result[0]));
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = WorkplaceSenior;
} else {
  window.WorkplaceSenior = WorkplaceSenior;
}