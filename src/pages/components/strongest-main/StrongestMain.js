class StrongestMain {

  _genContent(data, idx) {
    let content = `
        <div id="strongest-main_carousel-${idx}" data-ride="carousel" class="carousel slide">
            <div class="carousel-inner">
      `;
    data.forEach((item, idx) => {
      content += `
                <div class="carousel-item${idx === 0 ? ' active' : ''}">
                    <section data-url="${item.link}" data-outside-link="${item.outside_link}"
                         data-param_click="${item.param_click}"
                         data-mouseoverclass="strongest-main_job-card-mouseover" class="card border-0 js_card-new-tab js_view_click_link">
                        <img src="${item.pic_filename}" alt="${item.pic_filename.replace(/^.*[\\/]/, '')}">
                        <div class="card-body px-0 pt-3">
                            <h5 class="card-title mb-2">${item.title}</h5>
                            <p class="card-text">${item.word}</p>
                        </div>
                        <div class="card-footer bg-white border-top-0 px-0">
                            <ul class="list-inline strongest-main_job-title-list">
                                ${
        (() =>
            item.tags.reduce((pre, cur) =>
              pre + `
                <li class="list-inline-item"><a ${this._genOutsideToTipLinkAttrs(cur.link, parseInt(cur.outside_link) === 1)}
                                                data-param_click="${item.param_click}"
                                                target="_blank"
                                                class="js_view_click_link">${cur.tag}</a></li>
              `
              , '')
        )()
        }
                            </ul>
                        </div>
                    </section>
                </div>
        `;
    });
    content += `
            </div>
            <a href="#strongest-main_carousel-${idx}" role="button" data-slide="prev" class="carousel-control-prev invisible">
                <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a href="#strongest-main_carousel-${idx}" role="button" data-slide="next" class="carousel-control-next invisible">
                <span aria-hidden="true" class="carousel-control-next-icon"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
      `;
    return content;
  }

  render(error, data, computeAdView = true) {
    let noAdCount = 0;

    const $strongestMainContent = $('.js-strongest-main > div');

    if (!error && data[AD_RES_KEY_STRONGEST_MAIN_1] && data[AD_RES_KEY_STRONGEST_MAIN_1].length > 0) {
      $strongestMainContent.append(this._genContent(data[AD_RES_KEY_STRONGEST_MAIN_1], 1));
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_STRONGEST_MAIN_1], 'strongest-main_carousel-1');
    } else {
      noAdCount++;
    }
    if (!error && data[AD_RES_KEY_STRONGEST_MAIN_2] && data[AD_RES_KEY_STRONGEST_MAIN_2].length > 0) {
      $strongestMainContent.append(this._genContent(data[AD_RES_KEY_STRONGEST_MAIN_2], 2));
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_STRONGEST_MAIN_2], 'strongest-main_carousel-2');
    } else {
      noAdCount++;
    }
    if (!error && data[AD_RES_KEY_STRONGEST_MAIN_3] && data[AD_RES_KEY_STRONGEST_MAIN_3].length > 0) {
      $strongestMainContent.append(this._genContent(data[AD_RES_KEY_STRONGEST_MAIN_3], 3));
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_STRONGEST_MAIN_3], 'strongest-main_carousel-3');
    } else {
      noAdCount++;
    }
    if (!error && data[AD_RES_KEY_STRONGEST_MAIN_4] && data[AD_RES_KEY_STRONGEST_MAIN_4].length > 0) {
      $strongestMainContent.append(this._genContent(data[AD_RES_KEY_STRONGEST_MAIN_4], 4));
      if (computeAdView) ADViewClickComputeHelper.addSlideCarouselEventForADView(data[AD_RES_KEY_STRONGEST_MAIN_4], 'strongest-main_carousel-4');
    } else {
      noAdCount++;
    }

    if (noAdCount === 4) {
      $('.js-strongest-main').hide();
    }
    this.afterRender();
  }

  afterRender() {
    this._applyHoverToShowControlCarousel('.js-strongest-main .carousel');
    this._applyBlockNewTabLink($('.js-strongest-main .js_card-new-tab img, .js-strongest-main .js_card-new-tab .card-body'), 'card');

  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/applyBlockNewTabLink'), require('../../../js/mixins/applyHoverToShowControlCarousel'), require('../../../js/mixins/genOutsideToTipLinkAttrs'))(StrongestMain);
} else {
  window.StrongestMain = compose(applyBlockNewTabLink, applyHoverToShowControlCarousel, genOutsideToTipLinkAttrs)(StrongestMain);
}