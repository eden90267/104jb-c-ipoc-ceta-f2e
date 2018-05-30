class SpecCompany {

  _genContent(data, idx) {
    return `
          <div id="spec-company_${idx}" data-ride="carousel" class="carousel slide">
              <ol class="carousel-indicators mb-0">
                  <li data-target="#spec-company_${idx}" data-slide-to="0" class="active"></li>
                  <li data-target="#spec-company_${idx}" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                  ${
      (() =>
          data.reduce((pre, cur, idx) =>
            pre + `
                <div class="carousel-item${idx === 0 ? ' active' : ''}">
                    <a ${this._genOutsideToTipLinkAttrs(cur.link, parseInt(cur.outside_link) === 1)}
                       data-param_click="${cur.param_click}"
                       target="_blank"
                       class="a_img-opaque js_view_click_link">
                        <img src="${cur.pic_filename}" alt="${cur.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100">
                    </a>
                </div>
              `
            , '')
      )()
      }
              </div>
              <a href="#spec-company_${idx}" role="button" data-slide="prev" class="carousel-control-prev invisible">
                  <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a href="#spec-company_${idx}" role="button" data-slide="next" class="carousel-control-next invisible">
                  <span aria-hidden="true" class="carousel-control-next-icon"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
      `;
  }

  render(error, data, computeAdView = true) {
    let noAdCount = 0;
    if (!error && data[AD_RES_KEY_SPEC_COMPANY_1] && data[AD_RES_KEY_SPEC_COMPANY_1].length > 0) {
      $('.js-spec-company > div').append(`
        <div class="col-6">
          <div class="row">
            ${this._genContent(data[AD_RES_KEY_SPEC_COMPANY_1], 1)}
          </div>
        </div>
      `);
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_SPEC_COMPANY_1], 'spec-company_1');
    } else {
      noAdCount++;
    }
    if (!error && data[AD_RES_KEY_SPEC_COMPANY_2] && data[AD_RES_KEY_SPEC_COMPANY_2].length > 0) {
      $('.js-spec-company > div').append(`
        <div class="col-6">
          <div class="row">
            ${this._genContent(data[AD_RES_KEY_SPEC_COMPANY_2], 2)}
          </div>
        </div>
      `);
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_SPEC_COMPANY_2], 'spec-company_2');
    } else {
      noAdCount++;
    }

    if (noAdCount === 2) {
      $('.js-spec-company').hide();
    }

    this.afterRender();
  }

  afterRender() {
    this._applyHoverToShowControlCarousel('.js-spec-company .carousel');
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/applyHoverToShowControlCarousel'), require('../../../js/mixins/genOutsideToTipLinkAttrs'))(SpecCompany);
} else {
  window.SpecCompany = compose(applyHoverToShowControlCarousel, genOutsideToTipLinkAttrs)(SpecCompany);
}