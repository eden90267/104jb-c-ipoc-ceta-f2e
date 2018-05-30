class Banner2 {

  _genContent(data) {
    return `
      <div id="banner-2" data-ride="carousel" class="banner-2 carousel slide">
          <ol class="carousel-indicators mb-0">
              <li data-target="#banner-2" data-slide-to="0" class="active"></li>
              <li data-target="#banner-2" data-slide-to="1"></li>
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
                     class="js_view_click_link">
                      <img src="${cur.pic_filename}" alt="${cur.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100">
                  </a>
              </div>
            `
            , '')
      )()
      }
          </div>
          <a href="#banner-2" role="button" data-slide="prev" class="carousel-control-prev invisible">
              <span aria-hidden="true" class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a href="#banner-2" role="button" data-slide="next" class="carousel-control-next invisible">
              <span aria-hidden="true" class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
    `;
  }

  render(error, data, computeAdView = true) {
    if (!error && data[AD_RES_KEY_BANNER_2] && data[AD_RES_KEY_BANNER_2].length > 0) {
      $('.js-banner-2').html(this._genContent(data[AD_RES_KEY_BANNER_2]));
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_BANNER_2], 'banner-2');
    } else {
      $('.js-banner-2').hide();
    }
    this.afterRender();
  }

  afterRender() {
    this._applyHoverToShowControlCarousel('#banner-2.carousel');
  }

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/applyHoverToShowControlCarousel'), require('../../../js/mixins/genOutsideToTipLinkAttrs'))(Banner2);
} else {
  window.Banner2 = compose(applyHoverToShowControlCarousel, genOutsideToTipLinkAttrs)(Banner2);
}

