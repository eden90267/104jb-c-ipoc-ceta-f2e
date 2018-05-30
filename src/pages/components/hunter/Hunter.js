class Hunter {
  render() {

    this.afterRender();
  }
  afterRender() {
    this._applyBlockNewTabLink($('.js-hunter .js_card-new-tab img, .js-hunter .js_card-new-tab .card-body'), 'card');
  }
}

window.Hunter = compose(applyBlockNewTabLink)(Hunter);