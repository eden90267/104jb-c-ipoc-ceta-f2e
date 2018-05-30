class Giver {
  render() {

    this.afterRender();
  }
  afterRender() {
    this._applyBlockNewTabLink($('.js-giver .js_card-new-tab img, .js-giver .js_card-new-tab .card-body'), 'card');
  }
}

window.Giver = compose(applyBlockNewTabLink)(Giver);