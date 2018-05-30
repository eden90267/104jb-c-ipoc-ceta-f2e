const assert = require('power-assert');
const Brand = require('../../../../src/pages/components/brand/Brand');

const jsonData = require('../../../../data');

describe('test/pages/components/brand/Brand.test.js', () => {
  beforeEach(() => {
    this.data = jsonData.ad.result.b_783;
  });
  describe('#_genCard1Content()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      const value = new Brand()._genCard1Content(this.data[0]);

      assert(value.indexOf(`<img src="${this.data[0].pic_filename}" class="border">`) !== -1);
      assert(value.indexOf(`href="${this.data[0].title_link}"`) !== -1);
      assert(value.indexOf(`data-param_click="${this.data[0].param_click}"`) !== -1);
      assert(value.indexOf(`${this.data[0].title}`) !== -1);
      this.data[0].tags.forEach((item) => {
        assert(value.indexOf(`${item.link}`) !== -1);
        assert(value.indexOf(`${item.tag}`) !== -1);
      });
      assert(value.indexOf(`${this.data[0].texts.join('‧')}`) !== -1);
    });
  });
  describe('#_genCard2Content()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      let value = new Brand()._genCard2Content(this.data[1], 2);

      assert(value.indexOf(`href="${this.data[1].logo_pic_link}"`) !== -1);
      assert(value.indexOf(`data-param_click="${this.data[1].param_click}"`) !== -1);
      assert(value.indexOf(`<img src="${this.data[1].logo_pic_filename}" class="d-block mt-3 mx-auto mb-2">`) !== -1);
      assert(value.indexOf(`href="${this.data[1].title_link}"`) !== -1);
      assert(value.indexOf(`${this.data[1].title}`) !== -1);
      assert(value.indexOf(`href="${this.data[1].word_link}"`) !== -1);
      assert(value.indexOf(`${this.data[1].word}`) !== -1);
      this.data[1].tags.forEach((item) => {
        assert(value.indexOf(`href="${item.link}"`) !== -1);
        assert(value.indexOf(`${item.tag}`) !== -1);
      });
      assert(value.indexOf(`${this.data[1].texts.join('‧')}`) !== -1);

      value = new Brand()._genCard2Content(this.data[3], 4);
      assert(value.indexOf(`<section class="card rounded-0 border-0 vip-card vip-card-b">`) !== -1);
    });
  });
});