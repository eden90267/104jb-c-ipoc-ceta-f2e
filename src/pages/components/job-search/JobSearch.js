class JobSearch {

  _genContent(data, inline = true) {
    return data.reduce((pre, cur) => pre + `<li${inline ? ` class="list-inline-item"` : ``}><a href="${cur.url}">${cur.name}</a></li>`, '');
  }

  _renderKey(data) {
    $('.js-job-search-content_link_key').html(this._genContent(data));
  }

  _renderArea(data) {
    $('.js-job-search-content_link_area').html(this._genContent(data));
  }

  _renderCategory(data) {
    $('.js-job-search-content_link_category').html(`
      <ul class="list-unstyled">
        ${this._genContent(data, false)}
      </ul>
    `);
  }

  render(url = API_PATH + '/job-search') {
    const data = FetchHelper.getData(url);
    if (data.error) return console.error(data.error);

    if (data.result && data.result.keys) this._renderKey(data.result.keys);
    if (data.result && data.result.areas) this._renderArea(data.result.areas);
    if (data.result && data.result.categories) this._renderCategory(data.result.categories);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = JobSearch;
} else {
  window.JobSearch = JobSearch;
}