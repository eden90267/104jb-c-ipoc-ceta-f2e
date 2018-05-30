class Banner1 {

  _genContent1(data) {
    return data.reduce((pre, cur, idx) =>
      pre + `
        <div class="carousel-item h-100${idx === 0 ? ' active' : ''}">
            <div data-url="${cur.url}" data-mouseoverclass="media-mouseover"
                 class="media bg-white banner-1_1_item js_media-new-tab">
                <img src="${cur.imgPath}" alt="${cur.imgDescription}" class="mr-4">
                <div class="media-body">
                    <div class="media-content">
                        <h5 class="mt-4 mb-3">${cur.title}</h5>
                        <p>${cur.description}</p>
                    </div>
                    <hr>
                    <div class="media-footer">
                        <ul class="list-unstyled unnew-tab">
                            ${
        (() =>
            cur.subLinks.reduce((subPre, subCur) =>
              subPre + `<li><a href="${subCur.url}" target="_blank">${subCur.name}</a></li>`
              , '')
        )()
        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `
      , '')
  }

  render1(url = API_PATH + '/banner-1_1') {
    const data = FetchHelper.getData(url);
    if (data.error) return console.error(data.error);

    $('.banner-1_1 > .carousel-inner').html(this._genContent1(data.result));
    this.afterRender1();
  }

  afterRender1() {
    this._applyHoverToShowControlCarousel('#banner-1_1.carousel');
    this._applyBlockNewTabLink($('.js_media-new-tab img, .js_media-new-tab .media-content'), 'media');
  }

  _genContent2(data) {
    return `
      <aside id="banner-1_2" data-ride="carousel" class="banner-1_2 carousel slide">
          <ol class="carousel-indicators mb-0">
              <li data-target="#banner-1_2" data-slide-to="0" class="active"></li>
              <li data-target="#banner-1_2" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner h-100">
                  ${
      (() =>
          data.reduce((pre, cur, idx) =>
            pre + `
                <div class="carousel-item h-100${idx === 0 ? ' active' : ''}">
                    <a 
                       ${this._genOutsideToTipLinkAttrs(cur.link, parseInt(cur.outside_link) === 1)}
                       data-param_click="${cur.param_click}"
                       target="_blank"
                       class="a_img-opaque js_view_click_link">
                        <img src="${cur.pic_filename}" alt="${cur.pic_filename.replace(/^.*[\\/]/, '')}" class="d-block w-100 h-100">
                    </a>
                </div>
              `
            , '')
      )()
      }
          </div>
          <a href="#banner-1_2" role="button" data-slide="prev" class="carousel-control-prev invisible">
              <span aria-hidden="true" class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a href="#banner-1_2" role="button" data-slide="next" class="carousel-control-next text-dark invisible">
              <span aria-hidden="true" class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
          </a>
      </aside>
    `;
  }

  render2(error, data, computeAdView = true) {
    if (!error && data[AD_RES_KEY_BANNER1_2] && data[AD_RES_KEY_BANNER1_2].length > 0) {
      $('.js-banner-1 > .col-3 > .row').html(this._genContent2(data[AD_RES_KEY_BANNER1_2]));
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_BANNER1_2], 'banner-1_2');
    }
    this.afterRender2();
  }

  afterRender2() {
    this._applyHoverToShowControlCarousel('#banner-1_2.carousel');
  }

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/applyHoverToShowControlCarousel'), require('../../../js/mixins/applyBlockNewTabLink'), require('../../../js/mixins/genOutsideToTipLinkAttrs'))(Banner1);
} else {
  window.Banner1 = compose(applyHoverToShowControlCarousel, applyBlockNewTabLink, genOutsideToTipLinkAttrs)(Banner1);
}