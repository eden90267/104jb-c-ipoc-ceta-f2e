class JobList {

  _showLoading() {
    $('.js-job-list_loading').show();
    $('.js-job-list_items').css('opacity', '.3');
  }

  _hideLoading() {
    setTimeout(() => {
      $('.js-job-list_loading').hide();
      $('.js-job-list_items').css('opacity', '1');
    }, 0);
  }

  _filterData(data, jobType, topNum) {
    if (!data) return data;
    return data
      .filter((item) => parseInt(item.jobType) === jobType)
      .slice(0, topNum);
  }

  _genContent(data) {
    if (data && data.length > 0) {
      return data.reduce((pre, cur) =>
        pre + `
          <li class="media job-list_item">
              <div class="media-body">
                  <h2><a href="${cur.link.job}">${cur.jobName}</a></h2>
                  <ul class="list-inline job-list_item_intro">
                      <li class="list-inline-item"><a href="${cur.link.cust}">${cur.custName}</a></li>
                      <li class="list-inline-item">${cur.coIndustryDesc}</li>
                      <li class="list-inline-item">${cur.jobAddrNoDesc}</li>
                  </ul>
                  ${cur.description ? `<p class="job-list_item_text">${cur.description}</p>` : ''}
                  <time class="job-list_item_date">${cur.appearDateDesc} 更新</time>
              </div>
          </li>
        `
        , '');
    } else {
      return `
        <div class="d-flex justify-content-center align-items-center job-list_items_no-data">
            <svg class="job-list_items_no-data_img">
                <svg id="icon-data" viewBox="0 0 146.62 187.59" width="100%" height="100%">
                  <path d="M385,251.61c-2.06,5.9.1,11.26,5.13,14.78,5.25,3.67,11.81,4.53,18.06,4.37,1.93,0,1.93-3,0-3-5.21.13-10.59-.4-15.17-3.08s-7-7-5.13-12.27c.64-1.83-2.26-2.61-2.89-.8Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M410.63,290c-11.57-1.3-23.74-4.65-32.77-12.34-4-3.44-7.32-7.52-8.64-12.74a26.56,26.56,0,0,1,.46-14.06,24,24,0,0,1,9.61-13.31c1.61-1,.11-3.65-1.51-2.59-9.11,5.93-13.5,17.43-12,28,1.75,12.19,12.49,20.28,23.2,24.74A79,79,0,0,0,410.63,293c1.92.21,1.9-2.79,0-3Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M480.32,343.16a70.75,70.75,0,0,1,8.88,4,1.54,1.54,0,0,0,2.05-.54c12.52-19.09,5.47-42.44-4-61.18a103.2,103.2,0,0,0-9.8-15.79c-1.15-1.52-3.76,0-2.59,1.51a108.42,108.42,0,0,1,17.89,36c3.55,12.84,3.43,26.47-4.08,37.92l2.05-.54a76.49,76.49,0,0,0-9.59-4.3c-1.81-.69-2.59,2.21-.8,2.89Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M481.26,349.91c-.32-11.92-.36-23.85-1.26-35.74-.86-11.41-2.37-22.68-6.28-33.48-.65-1.8-3.55-1-2.89.8,3.9,10.78,5.39,22,6.22,33.41.85,11.65.89,23.35,1.2,35,.05,1.93,3.05,1.93,3,0Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M412.2,280.35c-3.46,10.31-5.44,21.17-7,31.92a241.47,241.47,0,0,0-2.09,34.4,1.5,1.5,0,0,0,3,0,236.25,236.25,0,0,1,2.06-34.18c1.52-10.55,3.49-21.21,6.89-31.34.62-1.83-2.28-2.62-2.89-.8Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M477,271.59c21-10.34,35.11-33.37,30.17-56.95-4.19-20.05-20.37-36.21-38.77-44.11-19.52-8.38-41.83-7.12-60.7,2.49-18.34,9.34-31.08,26.9-32.28,47.68a48.24,48.24,0,0,0,7.18,28.48,58.41,58.41,0,0,0,21,19.37,74.8,74.8,0,0,0,6.89,3.4c1.75.76,3.28-1.82,1.51-2.59C395,262,380.5,247.74,378.6,228.47c-1.94-19.7,8-38.42,24.3-49.17s37.83-14.38,56.78-8.76c18.41,5.46,35.43,19.11,42.4,37.33a45.34,45.34,0,0,1,1.6,28.22,51.89,51.89,0,0,1-20.84,28.7,61.2,61.2,0,0,1-7.32,4.22c-1.73.85-.21,3.44,1.51,2.59Z" transform="translate(-365.51 -164.97)"></path>
                  <path fill="none" stroke="#ccc" stroke-width="2" d="M434.4,243.48c1.22-3.38,3.31-6.35,7.56-5.22,2.52.67,6.38,8.9,5.07,11.3-1.64,3-13.77.82-13.77.73A31.13,31.13,0,0,1,434.4,243.48Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M430,201.92a70.54,70.54,0,0,0-29.52,8.83,1.5,1.5,0,0,0,1.51,2.59,67.09,67.09,0,0,1,28-8.42c1.91-.14,1.93-3.14,0-3Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M453.31,205.07a73.59,73.59,0,0,1,30.21,9.5A1.5,1.5,0,0,0,485,212a77.07,77.07,0,0,0-31.73-9.91c-1.92-.17-1.91,2.83,0,3Z" transform="translate(-365.51 -164.97)"></path>
                  <path d="M429.36,275.92a26.31,26.31,0,0,1-4.22-2.43,71.33,71.33,0,0,0,13.43,1.78,82.4,82.4,0,0,0,13.66-.6c4.64-.59,9-1.19,13.3-3.08-.38.82-1.67,1.44-2.43,1.92a34.12,34.12,0,0,1-6.9,3c-6.4,2.27-13.38,2.09-20,1.49A21,21,0,0,1,429.36,275.92Z" transform="translate(-365.51 -164.97)"></path>
                  <path fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M448.21,283.46c-.23-1.56-.48-3.12-.77-4.68a78.74,78.74,0,0,1-10.11-1.43c.23,1.54-.19,13.2-.22,14.48,0,.07,0,.14,0,.21C440.85,288.92,444.9,285.82,448.21,283.46Z" transform="translate(-365.51 -164.97)"></path>
                  <path fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M450.13,302.4c-.11-1.42-.21-2.84-.32-4.25q-.27-3.31-.62-6.62a93.68,93.68,0,0,0-12.41,10c-.19,4-.45,8-.82,12C440.5,309.57,446,305.34,450.13,302.4Z" transform="translate(-365.51 -164.97)"></path>
                  <path fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M449.19,291.53c-.28-2.7-.59-5.39-1-8.07-3.3,2.36-7.35,5.46-11.1,8.58-.06,3.18-.18,6.34-.33,9.52A93.68,93.68,0,0,1,449.19,291.53Z" transform="translate(-365.51 -164.97)"></path>
                  <path fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M451.07,314.25s-.73-9-.93-11.85c-4.14,2.94-9.63,7.18-14.18,11.13-.27,2.87-.66,11-.66,11Z" transform="translate(-365.51 -164.97)"></path>
                  <polygon fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="69.78 159.53 69.47 166.19 78 169.05 86.46 161.11 85.56 149.28 69.78 159.53"></polygon>
                  <path d="M492.81,219.77a76,76,0,0,1,2.63,10.17c.32,2,1.24,13.28-3.72,9.85-2.88-2-1.61-7.21-1.05-10A50.82,50.82,0,0,1,494,219.28c.39-.87-.91-1.64-1.3-.76a51.45,51.45,0,0,0-4.05,14.09c-.4,3.06-.31,8.13,3.52,9.08,4.18,1,5.15-4.21,5.14-7.13,0-5.21-1.57-10.27-3.09-15.2-.28-.92-1.73-.53-1.45.4Z" transform="translate(-365.51 -164.97)"></path>
                </svg>
            </svg>
            <div class="job-list_items_no-data_text">
                <h3 class="text-center mb-3">呃拍謝，搜尋結果好像很少</h3>
                <p class="text-center">搜尋條件無符合工作機會，建議放寬條件重新查詢</p>
            </div>
        </div>
      `;
    }
  }

  renderContent() {
    this._showLoading();

    const data = FetchHelper.getData(HIGHER_JOB_LIST_API_PATH);
    if (data.error) {
      this._hideLoading();
      return console.error(data.error);
    }

    // render tab
    if (data.result && data.result.manageJobCount && data.result.manageJobCount.taiwan) $('.js-job-list_tab > li:nth-child(1) > a > small').text(data.result.manageJobCount.taiwan.count);
    if (data.result && data.result.manageJobCount && data.result.manageJobCount.oversea) $('.js-job-list_tab > li:nth-child(2) > a > small').text(data.result.manageJobCount.oversea.count);
    if (data.result && data.result.manageJobCount && data.result.manageJobCount.foreign) $('.js-job-list_tab > li:nth-child(3) > a > small').text(data.result.manageJobCount.foreign.count);
    if (data.result && data.result.manageJobCount && data.result.manageJobCount.recommend) $('.js-job-list_tab > li:nth-child(4) > a > small').text(data.result.manageJobCount.recommend.count);
    if (data.result && data.result.manageJobCount && data.result.manageJobCount.hunter) $('.js-job-list_tab > li:nth-child(5) > a > small').text(data.result.manageJobCount.hunter.count);
    $('.js-job-list_tab > li').removeClass('active');
    $(`.js-job-list_tab > li:nth-child(${currTabIdx + 1})`).addClass('active');

    // render list
    const filterData = this._filterData(data.result.manageJobList, currTabIdx, 10);
    const content = this._genContent(filterData);
    $('.js-job-list_items').html(content);

    this._hideLoading();
  }

  render() {

    this.renderContent();

    this.afterRender();
  }

  afterRender() {
    const _this = this;
    $('.js-job-list_tab > li > a').click(function (event) {
      event.preventDefault();
      currTabIdx = $(this).data('tab-idx');
      _this.renderContent();
    });
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = JobList;
} else {
  window.JobList = JobList;
}