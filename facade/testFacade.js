const getAlEmployees = (arg1, arg2) => {
  const testData = {};
  testData.employeeList = [];
  const employee1 = {};
  employee1.id = "100";
  employee1.name = "Anir Pal";

  const employee2 = {};
  employee2.id = "99";
  employee2.name = "Madhan Pal";

  testData.employeeList.push(employee1);
  testData.employeeList.push(employee2);

  return testData;
};

const getEmployee = id => {
  console.log(`Id to be retrieved is::${id}`);
  const employee2 = {};
  employee2.id = id;
  employee2.name = "Madhan Pal";
  return employee2;
};

module.exports = {
  getAlEmployees,
  getEmployee
};
