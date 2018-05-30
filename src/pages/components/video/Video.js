class Video {

  render() {

    this.afterRender();
  }

  afterRender() {
    this._applyBlockNewTabLink($('.js-video .js_card-new-tab img, .js-video .js_card-new-tab .card-body'), 'card');
  }

}

window.Video = compose(applyBlockNewTabLink)(Video);