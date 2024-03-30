function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0,maxlength).slice(0,-1) + '…';
  }
  return str
}


