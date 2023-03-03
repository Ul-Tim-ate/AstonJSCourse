function Company(namePerson, salaryPerson) {
  let name = namePerson;
  let salary = salaryPerson;

  this.income = (value) => {
    let sum = value - salary;
    Company.store.money += sum;
    let found = Company.store.staffList.find(
      (element) => element.name === name
    );
    found.income += sum;
  };

  this.spend = (value) => {
    Company.store.money -= value;
    let found = Company.store.staffList.find(
      (element) => element.name === name
    );
    found.income -= value;
  };
  Company.addStaff({ name, income: 0 });
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function (staf) {
  this.store.staffList.push(staf);
  this.store.countStaff++;
};

Company.getLeaders = function () {
  if (this.store.staffList.length === 0) {
    return null;
  }
  const staffArray = Company.store.staffList;
  let max = staffArray[0].income || 0;
  staffArray.forEach((staffPerson) => {
    max = Math.max(staffPerson.income, max);
  });
  return staffArray.filter((element) => element.income === max);
};
