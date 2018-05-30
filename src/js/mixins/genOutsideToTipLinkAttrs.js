const genOutsideToTipLinkAttrs = (Clazz) => class extends Clazz {
  _genOutsideToTipLinkAttrs(link, outsideLink) {
    return `
      href="${outsideLink ? '#outsideLinkModal' : link}"
      ${outsideLink ? 'data-toggle="modal"' : ''}
      ${outsideLink ? 'data-url="' + link + '"' : ''}      
    `;
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = genOutsideToTipLinkAttrs;
} else {
  window.genOutsideToTipLinkAttrs = genOutsideToTipLinkAttrs;
}