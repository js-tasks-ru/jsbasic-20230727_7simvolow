function sumSalary(salaries) {
  sum = 0;
  for (let key in salaries) {
    if (typeof (salaries[key]) === 'number'
      && !Number.isNaN(salaries[key])
      && Number.isFinite(salaries[key])) {

      sum += salaries[key];
    };
  };
  return sum;
};
