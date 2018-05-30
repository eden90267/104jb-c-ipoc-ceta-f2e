class HotVip {

  _genContent(data) {
    return data.reduce((pre, cur) =>
      pre + `
        <li class="d-flex justify-content-center align-items-center border">
            <a ${this._genOutsideToTipLinkAttrs(cur.link, parseInt(cur.outside_link) === 1)}
               data-param_click="${cur.param_click}"
               target="_blank"
               class="js_view_click_link">
                <img src="${cur.pic_filename}" alt="${cur.pic_filename.replace(/^.*[\\/]/, '')}">
            </a>
        </li>
      `
      , '');
  }

  render(error, data, computeAdView = true) {
    if (!error && data.b_781 && data[AD_RES_KEY_HOT_VIP].length > 0) {
      let idx = 0;
      const render = () => {
        const items = ArrHelper.next(data[AD_RES_KEY_HOT_VIP], idx++, 14);
        $('.js-hot-vip > ul').html(this._genContent(items), '');
        if (computeAdView) ADViewClickComputeHelper.addSlideEventForADView(items, 'hot-vip', 14);
      };
      render();
      if (data[AD_RES_KEY_HOT_VIP].length > 14) {
        setInterval(render, CAROUSEL_INTERVAL);
      }
    } else {
      $('.js-hot-vip').hide();
    }
  }

  previewRender(error, data) {
    if (!error && data[AD_RES_KEY_HOT_VIP] && data[AD_RES_KEY_HOT_VIP].length > 0) {
      $('.js-hot-vip > ul').html(this._genContent(data[AD_RES_KEY_HOT_VIP]), '');
    } else {
      $('.js-hot-vip').hide();
    }
  }

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = require('../../../js/utilities/compose')(require('../../../js/mixins/genOutsideToTipLinkAttrs'))(HotVip);
} else {
  window.HotVip = compose(genOutsideToTipLinkAttrs)(HotVip);
}