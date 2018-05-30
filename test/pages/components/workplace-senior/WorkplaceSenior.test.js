const assert = require('power-assert');
const WorkplaceFocus = require('../../../../src/pages/components/workplace-senior/WorkplaceSenior');

const jsonData = require('../../../../data');

describe('test/pages/components/workplace-senior/WorkplaceSenior.test.js', () => {
  beforeEach(() => {
    this.data = jsonData["workplace-senior"];
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      const value = new WorkplaceFocus()._genContent(this.data[0]);

      assert(value.indexOf(`<a href="${this.data[0].url}" target="_blank">`) !== -1);
      assert(value.indexOf(`<img src="${this.data[0].imgPath}" class="my-auto">`) !== -1);
      assert(value.indexOf(`<h5>${this.data[0].title}</h5>`) !== -1);
      assert(value.indexOf(`<small class="d-block mt-3">${this.data[0].description1}</small>`) !== -1);
      assert(value.indexOf(`<p>${this.data[0].description2}</p>`) !== -1);
      this.data[0].experiences.forEach((experience) =>
        assert(value.indexOf(`<li>${experience}</li>`) !== -1)
      );
    });
  });
});