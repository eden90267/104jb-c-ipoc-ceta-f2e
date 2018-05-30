class ArrHelper {

  static next(arr, begin, end) {
    if (!arr || arr.length === 0) {
      return arr;
    }
    begin = begin % arr.length;
    let result = arr.slice(begin, end + begin);
    while (end && result.length < end) {
      result = result.concat(arr);
    }
    return result.slice(0, end);
  };

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = ArrHelper;
} else {
  window.ArrHelper = ArrHelper;
}