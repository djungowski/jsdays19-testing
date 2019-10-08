function numberChecker(n) {
  if (typeof n !== 'number') {
    throw new Error('NaaaaN');
  }
  return n;
}