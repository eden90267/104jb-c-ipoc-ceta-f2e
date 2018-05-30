class Brand {

  _genCard1Content(data) {
    return `
      <section class="card brand_card-1 rounded-0 border-0">
          <img src="${data.pic_filename}" class="border">
          <div class="card-img-overlay pb-0 d-flex flex-column">
              <h5 class="card-title">
                  <a ${this._genOutsideToTipLinkAttrs(data.title_link, parseInt(data.title_outside_link) === 1)}
                     data-param_click="${data.param_click}"
                     target="_blank" class="js_view_click_link">${data.title}</a>
              </h5>
              <ul class="list-unstyled list-spec-style">
              ${
      (() =>
          data.tags.reduce((pre, cur) => pre + `<li><a ${this._genOutsideToTipLinkAttrs(cur.link, parseInt(cur.outside_link) === 1)} data-param_click="${data.param_click}" target="_blank" class="js_view_click_link">${cur.tag}</a></li>`, '')
      )()
      }
              </ul>
              <div>
                  <a ${this._genOutsideToTipLinkAttrs(data.title_link, parseInt(data.title_outside_link) === 1)}
                     data-param_click="${data.param_click}"
                     target="_blank"
                     class="btn btn-outline-primary js_view_click_link">
                      更多職缺
                  </a>
              </div>
              <p class="card-text mt-auto py-2">
              ${
      (() =>
          data.texts.join('‧')
      )()
      }
              </p>
          </div>
      </section>
    `;
  }

  _genCard2Content(data, idx) {
    return `
      <section class="card rounded-0 border-0 vip-card${idx === 4 || idx === 5 ? ' vip-card-b' : ''}">
          <div class="card-line"></div>
          <a ${this._genOutsideToTipLinkAttrs(data.logo_pic_link, parseInt(data.logo_pic_outside_link) === 1)}
             data-param_click="${data.param_click}"
             target="_blank"
             class="a_img-opaque js_view_click_link">
              <img src="${data.logo_pic_filename}" class="d-block mt-3 mx-auto mb-2">
          </a>
          <div class="card-body py-2 px-3">
              <h5 class="card-title text-center">
                  <a ${this._genOutsideToTipLinkAttrs(data.title_link, parseInt(data.title_outside_link) === 1)}
                     data-param_click="${data.param_click}"
                     target="_blank"
                     class="js_view_click_link">
                      ${data.title}
                  </a>
              </h5>
              <p class="card-text mb-1">
                  <a ${this._genOutsideToTipLinkAttrs(data.word_link, parseInt(data.word_outside_link) === 1)}
                     data-param_click="${data.param_click}"
                     target="_blank"
                     class="js_view_click_link">
                      ${data.word}
                  </a>
              </p>
              <ul class="list-unstyled list-spec-style mb-1 d-none vip-card_job-list">
                ${
      (() =>
          data.tags.reduce((pre, cur) => pre + `<li><a ${this._genOutsideToTipLinkAttrs(cur.link, parseInt(cur.outside_link) === 1)} data-param_click="${data.param_click}" target="_blank" class="js_view_click_link">${cur.tag}</a></li>`, '')
      )()
      }
              </ul>
              <div class="text-right d-none vip-card_job-list-more">
                  <a ${this._genOutsideToTipLinkAttrs(data.extra_link, parseInt(data.extra_outside_link) === 1)}
                     data-param_click="${data.param_click}"
                     target="_blank"
                     class="js_view_click_link">
                      更多職缺 ►►
                  </a>
              </div>
          </div>
          <div class="card-divider"></div>
          <div class="card-footer py-2 px-3 bg-white border-top-0">
            ${
      (() =>
          data.texts.join('‧')
      )()
      }
          </div>
          <img src="${data.init_pic_filename}" class="vip-card_job-list-ad d-none">
      </section>
    `;
  };

  render(error, data, computeAdView = true) {
    if (!error && data[AD_RES_KEY_BRAND] && data[AD_RES_KEY_BRAND].length > 0) {
      let idx = 0;
      const render = () => {
        const items = ArrHelper.next(data[AD_RES_KEY_BRAND], idx++, 5);

        let card1Content = this._genCard1Content(items[0]);
        let card2Content = this._genCard2Content(items[1], 2);
        let card3Content = this._genCard2Content(items[2], 3);
        let card4Content = this._genCard2Content(items[3], 4);
        let card5Content = this._genCard2Content(items[4], 5);

        let content = `
          ${card1Content}
          <div class="brand_card-2 d-flex flex-wrap">
              <div class="col-6 border border-left-0 border-top-0">
                  <div class="row flex-wrap">
                      ${card2Content}
                      ${card5Content}
                  </div>
              </div>
              <div class="col-6 border border-left-0 border-top-0">
                  <div class="row flex-wrap">
                      ${card3Content}
                      ${card4Content}
                  </div>
              </div>
          </div>
        `;
        $('.js-brand').html(content);
        if (computeAdView) ADViewClickComputeHelper.addSlideEventForADView(items, 'brand', 5);
        this.afterRender();
      };
      render();
      setInterval(render, CAROUSEL_INTERVAL);
    } else {
      $('.js-brand').hide().addClass('hidden').attr('style', 'margin-bottom: 0 !important');
    }
    this.afterRender();
  }

  afterRender() {
    $('.vip-card')
      .on('mouseover', function () {
        $(this).addClass('active');
        if (BrowserHelper.detectIE() >= 12) $(this).css('height', '400px');
        let $near = $(this).hasClass('vip-card-b')
          ?
          $(this).parent().find('.vip-card').first()
          :
          $(this).parent().find('.vip-card').last();
        $near.addClass('h-0');
      })
      .on('mouseout', function () {
        $(this).removeClass('active');
        if (BrowserHelper.detectIE() >= 12) $(this).css('height', '');
        let $near = $(this).hasClass('vip-card-b')
          ?
          $(this).parent().find('.vip-card').first()
          :
          $(this).parent().find('.vip-card').last();
        $near.removeClass('h-0');
      });
  }

  previewRender(error, data) {
    if (!error && data[AD_RES_KEY_BRAND] && data[AD_RES_KEY_BRAND].length > 0) {
      let card1Content = this._genCard1Content(data[AD_RES_KEY_BRAND][0]);
      let card2Content = this._genCard2Content(data[AD_RES_KEY_BRAND][0], 2);
      $('.js-brand').html(`
        ${card1Content}
        <div class="brand_card-2 d-flex flex-wrap">
            <div class="col-6 border border-left-0 border-top-0">
                <div class="row flex-wrap">
                    ${card2Content}
                    <div class="vip-card vip-card-b"></div>
                </div>
            </div>
        </div>
      `);
    } else {
      $('.js-brand').hide().addClass('hidden').attr('style', 'margin-bottom: 0 !important');
    }
    this.afterPreviewRender();
  }

  afterPreviewRender() {
    $('.vip-card')
      .on('mouseover', function () {
        if ($(this).hasClass('vip-card-b')) return;
        $(this).addClass('active');
        $(this).parent().find('.vip-card').last().addClass('h-0');
      })
      .on('mouseout', function () {
        $(this).removeClass('active');
        $(this).parent().find('.vip-card').last().removeClass('h-0');
      });
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/applyHoverToShowControlCarousel'), require('../../../js/mixins/genOutsideToTipLinkAttrs'))(Brand);
} else {
  window.Brand = compose(applyHoverToShowControlCarousel, genOutsideToTipLinkAttrs)(Brand);
}