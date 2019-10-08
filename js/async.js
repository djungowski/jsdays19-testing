function executesAsync(cb) {
  setTimeout(() => {
    cb('Hello World');
  }, 400);
}