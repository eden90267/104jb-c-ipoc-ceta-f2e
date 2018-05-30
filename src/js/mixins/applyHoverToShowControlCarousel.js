const applyHoverToShowControlCarousel = (Clazz) => class extends Clazz {
  _applyHoverToShowControlCarousel(selector) {
    $(selector)
      .carousel({
        'interval': CAROUSEL_INTERVAL,
      })
      .on('mouseover', function () {
        $(this).find('.carousel-control-prev').removeClass('invisible');
        $(this).find('.carousel-control-next').removeClass('invisible');
      })
      .on('mouseout', function () {
        $(this).find('.carousel-control-prev').addClass('invisible');
        $(this).find('.carousel-control-next').addClass('invisible');
      });
  };
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = applyHoverToShowControlCarousel;
} else {
  window.applyHoverToShowControlCarousel = applyHoverToShowControlCarousel;
}