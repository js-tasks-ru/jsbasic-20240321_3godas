function checkSpam(str) {
  if (str.match(/1xBet/gi) || str.match(/XXX/gi)) {
  }
  return Boolean(str.match(/1xBet/gi) || str.match(/XXX/gi))
}
