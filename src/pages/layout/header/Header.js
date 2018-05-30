class Header {

  render() {

    // nothing to do

    this.afterRender();
  }

  afterRender() {
    $('#outsideLinkModal').on('show.bs.modal', function (event) {
      let url;
      if (event.relatedTarget) {
        url = $(event.relatedTarget).data('url');
      } else {
        const $hiddenUrl = $('#outsideLinkModal_hiddenUrl');
        url = $hiddenUrl.val();
        $hiddenUrl.remove();
      }
      if (url) {
        let $btnEnter = $(this).find('a.btn.btn-primary');
        $btnEnter.attr('href', url).attr('target', '_blank').on('click', function () {
          $('#outsideLinkModal').modal('hide');
        });
      }
    });
    $('.js-header_member-item-login-link')
      .on('mouseover', function () {
        $(this).addClass('active');
        $('.header_member-menu.login').addClass('active');
      })
      .on('mouseout', function () {
        $(this).removeClass('active');
        $('.header_member-menu.login').removeClass('active');
      });
    $('.header_member-menu.login')
      .on('mouseover', function () {
        $('.js-header_member-item-login-link').addClass('active');
        $(this).addClass('active');
      })
      .on('mouseout', function () {
        $('.js-header_member-item-login-link').removeClass('active');
        $(this).removeClass('active');
      });

    $('.js-header_member-item-vip-link')
      .on('mouseover', function () {
        $(this).addClass('active');
        $('.header_member-menu.vip').addClass('active');
      })
      .on('mouseout', function () {
        $(this).removeClass('active');
        $('.header_member-menu.vip').removeClass('active');
      });
    $('.header_member-menu.vip')
      .on('mouseover', function () {
        $('.js-header_member-item-vip-link').addClass('active');
        $(this).addClass('active');
      })
      .on('mouseout', function () {
        $('.js-header_member-item-vip-link').removeClass('active');
        $(this).removeClass('active');
      });
  }

}

window.Header = Header;