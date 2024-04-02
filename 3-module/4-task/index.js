function showSalary(users, age) {
  let counter = 0;
  let count = 0;
  let str = '';
  for (const user of users) {
    if (user.age <= age) {
      counter ++;
    }
  }
  for (const user of users) {
    if (user.age <= age) {
      count ++;
      if (count != counter) {
        str += user.name + ', ' + user.balance + '\n';

      } else {
        str += user.name + ', ' + user.balance;
      }
    }

  }
  return str
}
