const assert = require('power-assert');
const Banner1 = require('../../../../src/pages/components/banner-1/Banner1');

const jsonData = require('../../../../data');

describe('test/pages/components/banner-1/Banner1.test.js', () => {
  beforeEach(() => {
    this.data = {
      "banner-1_1" : jsonData['banner-1_1'],
      "b_777": jsonData.ad.result.b_777
    };
  });
  describe('#_genContent1()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      const value = new Banner1()._genContent1(this.data['banner-1_1']);

      assert((value.match(/<div class="carousel-item/g) || []).length === 1);
      this.data['banner-1_1'].forEach((item) => {
        assert(value.indexOf(`data-url="${item.url}"`) !== -1);
        assert(value.indexOf(`<img src="${item.imgPath}" alt="${item.imgDescription}" class="mr-4">`) !== -1);
        assert(value.indexOf(`<h5 class="mt-4 mb-3">${item.title}</h5>`) !== -1);
        assert(value.indexOf(`<p>${item.description}</p>`) !== -1);
        item.subLinks.forEach((subLink) => {
          assert(value.indexOf(`<li><a href="${subLink.url}" target="_blank">${subLink.name}</a></li>`) !== -1);
        });
      });
    });
  });
  describe('#_genContent2()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      const value = new Banner1()._genContent2(this.data['b_777']);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);
      this.data['b_777'].forEach((item) => {
        assert(value.indexOf(`href="${item.link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100 h-100">`) !== -1);
      });
    });
  });
});