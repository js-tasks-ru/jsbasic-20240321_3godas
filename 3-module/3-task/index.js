function camelize(str) {
  let arr = str.split('');
  
  for (index of arr.keys()) {
    if (arr[index] == '-') {
      arr[index+1] = arr[index+1].toUpperCase();
    }
  }

  return arr.filter(char => char != '-').join('')

}
