const assert = require('power-assert');
const StrongestMain = require('../../../../src/pages/components/strongest-main/StrongestMain');

const jsonData = require('../../../../data');

describe('test/pages/components/strongest-main/StrongestMain.test.js', () => {
  beforeEach(() => {
    this.data = {
      "b_784": jsonData.ad.result.b_784,
      "b_785": jsonData.ad.result.b_785,
      "b_786": jsonData.ad.result.b_786,
      "b_787": jsonData.ad.result.b_787
    };
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      let value = new StrongestMain()._genContent(this.data.b_784, 1);

      assert(value.indexOf(`<div id="strongest-main_carousel-1" data-ride="carousel" class="carousel slide">`) !== -1);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.b_784.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`<section data-url="${item.link}" data-outside-link="${item.outside_link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}">`) !== -1);
        assert(value.indexOf(`<h5 class="card-title mb-2">${item.title}</h5>`) !== -1);
        assert(value.indexOf(`<p class="card-text">${item.word}</p>`) !== -1);
        item.tags.forEach((each) => {
          assert(value.indexOf(`href="${each.link}"`) !== -1);
          assert(value.indexOf(`${each.tag}`) !== -1);
        });
      });

      value = new StrongestMain()._genContent(this.data.b_785, 2);

      assert(value.indexOf(`<div id="strongest-main_carousel-2" data-ride="carousel" class="carousel slide">`) !== -1);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.b_785.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`<section data-url="${item.link}" data-outside-link="${item.outside_link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}">`) !== -1);
        assert(value.indexOf(`<h5 class="card-title mb-2">${item.title}</h5>`) !== -1);
        assert(value.indexOf(`<p class="card-text">${item.word}</p>`) !== -1);
        item.tags.forEach((each) => {
          assert(value.indexOf(`href="${each.link}"`) !== -1);
          assert(value.indexOf(`${each.tag}`) !== -1);
        });
      });

      value = new StrongestMain()._genContent(this.data.b_786, 3);

      assert(value.indexOf(`<div id="strongest-main_carousel-3" data-ride="carousel" class="carousel slide">`) !== -1);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.b_786.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`<section data-url="${item.link}" data-outside-link="${item.outside_link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}">`) !== -1);
        assert(value.indexOf(`<h5 class="card-title mb-2">${item.title}</h5>`) !== -1);
        assert(value.indexOf(`<p class="card-text">${item.word}</p>`) !== -1);
        item.tags.forEach((each) => {
          assert(value.indexOf(`href="${each.link}"`) !== -1);
          assert(value.indexOf(`${each.tag}`) !== -1);
        });
      });

      value = new StrongestMain()._genContent(this.data.b_787, 4);

      assert(value.indexOf(`<div id="strongest-main_carousel-4" data-ride="carousel" class="carousel slide">`) !== -1);

      assert((value.match(/<div class="carousel-item/g) || []).length === 2);

      this.data.b_787.forEach((item, idx) => {
        assert(value.indexOf(`<div class="carousel-item${idx === 0 ? ' active' : ''}">`) !== -1);
        assert(value.indexOf(`<section data-url="${item.link}" data-outside-link="${item.outside_link}"`) !== -1);
        assert(value.indexOf(`data-param_click="${item.param_click}"`) !== -1);
        assert(value.indexOf(`<img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}">`) !== -1);
        assert(value.indexOf(`<h5 class="card-title mb-2">${item.title}</h5>`) !== -1);
        assert(value.indexOf(`<p class="card-text">${item.word}</p>`) !== -1);
        item.tags.forEach((each) => {
          assert(value.indexOf(`href="${each.link}"`) !== -1);
          assert(value.indexOf(`${each.tag}`) !== -1);
        });
      });
    });
  });
});