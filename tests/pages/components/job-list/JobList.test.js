const assert = require('power-assert');
const JobList = require('../../../../src/pages/components/job-list/JobList');

const jsonData = require('../../../../data');

describe('test/pages/components/job-list/JobList.test.js', () => {
  beforeEach(() => {
    this.data = jsonData["higher-job"].manageJobList;
  });
  describe('#_filterData()', () => {
    it('should return correct filter data when the parameter is from data.json', () => {
      let jobType = 0;
      let topNum = 10;

      let value = new JobList()._filterData(undefined, jobType, topNum);
      assert.deepEqual(value, undefined);

      value = new JobList()._filterData(null, jobType, topNum);
      assert.deepEqual(value, null);

      value = new JobList()._filterData([], jobType, topNum);
      assert.deepEqual(value, []);

      value = new JobList()._filterData(this.data, jobType, topNum);
      assert.ok(value.every((item) => item.jobType === "0"));
      assert(value.length <= 10);

      topNum = 5;
      value = new JobList()._filterData(this.data, jobType, topNum);
      assert(value.length <= 5);
    });
  });
  describe('#_genContent()', () => {
    it('should return correct content when the parameter is from data.json', () => {
      let value = new JobList()._genContent(undefined);
      assert(value.indexOf(`<h3 class="text-center mb-3">呃拍謝，搜尋結果好像很少</h3>`) !== -1);
      assert(value.indexOf(`<p class="text-center">搜尋條件無符合工作機會，建議放寬條件重新查詢</p>`) !== -1);

      value = new JobList()._genContent(null);
      assert(value.indexOf(`<h3 class="text-center mb-3">呃拍謝，搜尋結果好像很少</h3>`) !== -1);
      assert(value.indexOf(`<p class="text-center">搜尋條件無符合工作機會，建議放寬條件重新查詢</p>`) !== -1);

      value = new JobList()._genContent([]);
      assert(value.indexOf(`<h3 class="text-center mb-3">呃拍謝，搜尋結果好像很少</h3>`) !== -1);
      assert(value.indexOf(`<p class="text-center">搜尋條件無符合工作機會，建議放寬條件重新查詢</p>`) !== -1);


      const data = new JobList()._filterData(this.data, 2, 10);
      value = new JobList()._genContent(data);
      assert(value.indexOf(`<h3 class="text-center mb-3">呃拍謝，搜尋結果好像很少</h3>`) === -1);
      assert(value.indexOf(`<p class="text-center">搜尋條件無符合工作機會，建議放寬條件重新查詢</p>`) === -1);
      data.forEach((item) => {
        assert(value.indexOf(`<h2><a href="${item.link.job}">${item.jobName}</a></h2>`) !== -1);
        assert(value.indexOf(`<li class="list-inline-item"><a href="${item.link.cust}">${item.custName}</a></li>`) !== -1);
        assert(value.indexOf(`<li class="list-inline-item">${item.coIndustryDesc}</li>`) !== -1);
        assert(value.indexOf(`<li class="list-inline-item">${item.jobAddrNoDesc}</li>`) !== -1);
        assert(value.indexOf(`${item.description ? `<p class="job-list_item_text">${item.description}</p>` : ''}`) !== -1);
        assert(value.indexOf(`<time class="job-list_item_date">${item.appearDateDesc} 更新</time>`) !== -1);
      });
    });
  });
});