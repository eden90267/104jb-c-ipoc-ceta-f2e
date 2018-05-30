const assert = require('power-assert');
const JobSearch = require('../../../../src/pages/components/job-search/JobSearch');

const jsonData = require('../../../../data');

describe('test/pages/components/job-search/JobSearch.test.js', () => {
  beforeEach(() => {
    this.data = jsonData["job-search"];
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      let value = new JobSearch()._genContent(this.data.keys);

      assert((value.match(/<li class="list-inline-item">/g) || []).length === 20);
      this.data.keys.forEach((item) =>
        assert(value.indexOf(`<li class="list-inline-item"><a href="${item.url}">${item.name}</a></li>`) !== -1)
      );

      value = new JobSearch()._genContent(this.data.areas);

      assert((value.match(/<li class="list-inline-item">/g) || []).length === 8);
      this.data.areas.forEach((item) =>
        assert(value.indexOf(`<li class="list-inline-item"><a href="${item.url}">${item.name}</a></li>`) !== -1)
      );

      value = new JobSearch()._genContent(this.data.categories, false);

      assert((value.match(/<li>/g) || []).length === 3);
      this.data.categories.forEach((item) =>
        assert(value.indexOf(`<li><a href="${item.url}">${item.name}</a></li>`) !== -1)
      );
    });
  });
});