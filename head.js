const head = function(arr) {
  if (!Array.isArray(arr)) return null;
  return arr[0];
};

module.exports = head;
