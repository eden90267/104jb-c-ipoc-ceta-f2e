class FetchHelper {
  static getData(url, before = () => {}, completed = () => {}) {
    let result;
    let error;
    $.ajax({
      url,
      type: 'get',
      dataType: 'json',
      error: (xhr, textStatus, err) => error = {textStatus, error: err},
      success: (data) => result = data,
      beforeSend: before,
      complete: completed,
      async: false
    });
    return {
      error,
      result
    };
  };
  static getJsonpData(url, callback, before = () => {}, completed = () => {}) {
    $.ajax({
      url,
      type: 'get',
      dataType: 'jsonp',
      jsonpCallback: 'callback',
      timeout: 3000,
      error: (xhr, textStatus, err) =>  callback({textStatus, error: err}, {}),
      success: (data) => callback(undefined, data),
      beforeSend: before,
      complete: completed,
    });
  }
}

window.FetchHelper = FetchHelper;