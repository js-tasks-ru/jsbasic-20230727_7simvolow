function getMinMax(str) {
  let result = {};

  result.min = Math.min(...(str.split(' ').filter((item) => !isNaN(item))));
  result.max = Math.max(...(str.split(' ').filter((item) => !isNaN(item))));

  return result;
};
