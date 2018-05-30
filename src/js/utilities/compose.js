const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg);

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = compose;
} else {
  window.compose = compose;
}