function asyncSpy(
  callback, 
  callbackParam = 'Hallo Welt', 
  timeout = 400,
) {
  setTimeout(() => {
    callback(callbackParam);
  }, timeout);
}