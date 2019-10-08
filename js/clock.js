function executesAsyncWithClock(cb) {
  setTimeout(() => {
    cb('Hello World');
  }, 5000);
}