const assert = require('power-assert');
const Banner2 = require('../../../../src/pages/components/banner-2/Banner2');

const jsonData = require('../../../../data');

describe('test/pages/components/banner-2/Banner2.test.js', () => {
  beforeEach(() => {
    this.data = jsonData.ad.result.b_780;
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      const value = new Banner2()._genContent(this.data);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`href="${item.link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100">`) !== -1);
      });
    });
  });
});