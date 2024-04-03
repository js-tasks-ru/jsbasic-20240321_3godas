function camelize(str) {
  let arr = str.split('-');
  return arr[0] + arr.slice(1).map(value => value.slice(0,1).toUpperCase() + value.slice(1)).join('')

}
