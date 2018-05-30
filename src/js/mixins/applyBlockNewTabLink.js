const applyBlockNewTabLink = (Clazz) => class extends Clazz {
  _applyBlockNewTabLink($elements, type) {
    $elements
      .on('mouseover', function () {
        let mouseoverclass = $(this).parents('.js_' + type + '-new-tab').data('mouseoverclass');
        if (mouseoverclass) $(this).parents('.js_' + type + '-new-tab').addClass(mouseoverclass);
      })
      .on('click', function () {
        let url = $(this).parents('.js_' + type + '-new-tab').data('url');
        let outside_link = $(this).parents('.js_' + type + '-new-tab').data('outside-link');
        if (url) {
          if (!outside_link || parseInt(outside_link) === 0) {
            window.open(url);
          } else {
            $(`<input id="outsideLinkModal_hiddenUrl" type="hidden"/>`).val(url).appendTo('#outsideLinkModal .modal-body');
            $('#outsideLinkModal').modal('show');
          }
        }
      })
      .on('mouseout', function () {
        let mouseoverclass = $(this).parents('.js_' + type + '-new-tab').data('mouseoverclass');
        if (mouseoverclass) $(this).parents('.js_' + type + '-new-tab').removeClass(mouseoverclass);
      });
  };
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = applyBlockNewTabLink;
} else {
  window.applyBlockNewTabLink = applyBlockNewTabLink;
}