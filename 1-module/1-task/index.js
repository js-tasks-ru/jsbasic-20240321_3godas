function factorial(n) {
  let result = 1;
  if (n >= 0) {
    for(let i = n; i > 1; i--) {
      result = result*i;
    }
    }
  else {
    result = "число не должно быть отрицательным";
  }
    
  return result
}



