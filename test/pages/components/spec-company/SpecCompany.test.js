const assert = require('power-assert');
const SpecCompany = require('../../../../src/pages/components/spec-company/SpecCompany');

const jsonData = require('../../../../data');

describe('test/pages/components/spec-company/SpecCompany.test.js', () => {
  beforeEach(() => {
    this.data = {
      "b_782": jsonData.ad.result.b_782,
      "b_779": jsonData.ad.result.b_779
    };
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      let value = new SpecCompany()._genContent(this.data.b_782);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.b_782.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`href="${item.link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100">`) !== -1);
      });

      value = new SpecCompany()._genContent(this.data.b_779);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.b_779.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`href="${item.link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100">`) !== -1);
      });
    });
  });
});