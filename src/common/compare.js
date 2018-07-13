module.exports.compare = (a, b) => {
  if (typeof a === 'string' || typeof b === 'string') {
    a = a.toString();
    b = b.toString();
  }
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
};
