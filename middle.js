const getMiddleIndex = (arr) => Math.floor((arr.length - 1) / 2);

const getMiddleArr = (middleIndex, arr) => arr.length % 2 !== 0 ? [arr[middleIndex]] : [arr[middleIndex], arr[middleIndex + 1]];

const middle = function(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 1 || arr.length === 2) return [];
  const middleIndex = getMiddleIndex(arr);
  const middleArr = getMiddleArr(middleIndex, arr);
  return middleArr;
};

module.exports = middle;



