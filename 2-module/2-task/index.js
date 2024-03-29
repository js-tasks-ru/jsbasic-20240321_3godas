function isEmpty(obj) {
  let result;
  for (const key in obj) {
    result = key;
  }
  return !Boolean(result)
}
