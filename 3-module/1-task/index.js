function namify(users) {
  let names = [];
  for (let i = 0; i < users.length; i++) {
    names[i] = users[i].name;
  }
  return names;
}
