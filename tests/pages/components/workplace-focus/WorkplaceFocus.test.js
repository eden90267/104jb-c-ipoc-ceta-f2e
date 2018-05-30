const assert = require('power-assert');
const WorkplaceFocus = require('../../../../src/pages/components/workplace-focus/WorkplaceFocus');

const jsonData = require('../../../../data');

describe('test/pages/components/workplace-focus/WorkplaceFocus.test.js', () => {
  beforeEach(() => {
    this.data = jsonData["workplace-focus"];
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      const value = new WorkplaceFocus()._genContent(this.data);

      assert((value.match(/<section/g) || []).length === 3);

      this.data.forEach((item) => {
        assert(value.indexOf(`<section data-url="${item.url}"`) !== -1);
        assert(value.indexOf(`<img src="${item.imgPath}" alt="${item.imgDescription}">`) !== -1);
        assert(value.indexOf(`<h5 class="card-title">${item.title}</h5>`) !== -1);
        assert(value.indexOf(`<p class="mb-3 text-truncate">${item.description}</p>`) !== -1);
        item.subLinks.forEach(subLink =>
          assert(value.indexOf(`<li><a href="${subLink.url}" target="_blank">${subLink.name}</a></li>`) !== -1)
        );
      });
    });
  });
});