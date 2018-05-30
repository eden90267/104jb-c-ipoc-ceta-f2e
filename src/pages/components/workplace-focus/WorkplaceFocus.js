class WorkplaceFocus {

  _genContent(data) {
    return data.reduce((pre, cur) =>
      pre + `
        <section data-url="${cur.url}" data-mouseoverclass="card-mouseover"
           class="card rounded-0 border-0 js_card-new-tab">
          <img src="${cur.imgPath}" alt="${cur.imgDescription}">
          <div class="card-body px-0 pb-1">
              <h5 class="card-title">${cur.title}</h5>
              <p class="mb-3 text-truncate">${cur.description}</p>
          </div>
          <div class="card-footer border-top-0 bg-white px-0 pt-0">
              <ul class="list-unstyled">
              ${
        (() =>
            cur.subLinks.reduce((subPre, subCur) =>
              subPre + `<li><a href="${subCur.url}" target="_blank">${subCur.name}</a></li>`
              , '')
        )()
        }
              </ul>
          </div>
        </section>
      `,
      '');
  }

  render(url = API_PATH + '/workplace-focus') {
    const data = FetchHelper.getData(url);
    if (data.error) return console.error(data.error);

    $('.js-workplace-focus > div').html(this._genContent(data.result));
    this.afterRender();
  }

  afterRender() {
    this._applyBlockNewTabLink($('.js-workplace-focus .js_card-new-tab img, .js-workplace-focus .js_card-new-tab .card-body'), 'card');
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/applyBlockNewTabLink'))(WorkplaceFocus);
} else {
  window.WorkplaceFocus = compose(applyBlockNewTabLink)(WorkplaceFocus);
}