function showSalary(users, age) {
  let nameBalances = users
    .filter(user => user.age <= age)
    .map((user, index, users) => (index < users.length - 1) ?
      `${user.name}, ${user.balance}\n` :
      `${user.name}, ${user.balance}`)
    .join('');

  return nameBalances;
};
