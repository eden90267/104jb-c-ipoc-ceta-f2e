class ADViewClickComputeHelper {

  static addLinkClickEventForADClick() {
    const _this = this;
    $('.js_view_click_link').click(function () {
      const paramClick = $(this).data('param_click');
      if (!paramClick) return;
      if (!$(`#adClickImg`).length) {
        $('<img id="adClickImg">').css('display', 'none').attr('src', _this._getAdClickPath(paramClick)).appendTo('body');
      } else {
        $('#adClickImg').attr('src', _this._getAdClickPath(paramClick));
      }
    });
  }

  static addSlideCarouselEventForADView(data, carouselId) {
    $(`<img id="${carouselId}AdViewImg">`).css('display', 'none').attr('src', this._getAdViewPath(data[0].param_view)).appendTo('body');
    const _this = this;
    $(`#${carouselId}`).on('slide.bs.carousel', function (events) {
      $(`#${carouselId}AdViewImg`).attr('src', _this._getAdViewPath(data[events.to].param_view));
    });
  }

  static addSlideEventForADView(data, slideId, slideNum) {
    for (let i = 0; i < slideNum; i++) {
      if (data && data[i]) {
        if (!$(`#${slideId}-${i}AdViewImg`).length) {
          $(`<img id="${slideId}-${i}AdViewImg">`).css('display', 'none').attr('src', this._getAdViewPath(data[i].param_view)).appendTo('body');
        } else {
          $(`#${slideId}-${i}AdViewImg`).attr('src', this._getAdViewPath(data[i].param_view));
        }
      }
    }
  }

  static _getAdViewPath(param_view) {
    return `${AD_VIEW_CLICK_PATH}?param=${param_view}&rnd=${new Date().getTime()}`;
  }

  static _getAdClickPath(param_click) {
    return `${AD_VIEW_CLICK_PATH}?param=${param_click}&rnd=${new Date().getTime()}`;
  }

}

window.ADViewClickComputeHelper = ADViewClickComputeHelper;