function checkSpam(str) {
  let isSpam = false;
  if (str.match(/1xBet/gi) || str.match(/XXX/gi)) {
    isSpam = true;
  }
  return isSpam
}
