const assert = require('power-assert');
const Banner2 = require('../../../../src/pages/components/hot-vip/HotVip');

const jsonData = require('../../../../data');

describe('test/pages/components/hot-vip/HotVip.test.js', () => {
  beforeEach(() => {
    this.data = jsonData.ad.result.b_781;
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      this.data[13].outside_link = "1";
      const value = new Banner2()._genContent(this.data);

      assert((value.match(/<li class="d-flex justify-content-center align-items-center border">/g) || []).length === 14);
      this.data.forEach((item, idx) => {
        if (idx === 13) {
          assert(value.indexOf(`href="#outsideLinkModal"`) !== -1);
          assert(value.indexOf(`data-toggle="modal"`) !== -1);
          assert(value.indexOf(`data-url="${item.link}"`) !== -1);
        } else {
          assert(value.indexOf(`href="${item.link}"`) !== -1);
        }
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}">`) !== -1);
      });
    });
  });
});