function getMinMax(str) {
  let result = {};
  result.min = str.split(' ').filter(element => !isNaN(element)).map(element => Number(element)).sort((a,b) => a -b)[0];
  result.max = str.split(' ').filter(element => !isNaN(element)).map(element => Number(element)).sort((a,b) => a -b).reverse()[0];

  return result
}
