const tail = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.slice(1);
};

module.exports = tail;