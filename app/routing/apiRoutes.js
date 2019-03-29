const employees = require("../data/employees.js");

module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    res.json(employees);
  });

  app.post("/api/employees", function(req, res) {
    const strUser = req.body;
    console.log("req", req.body);
    const userScores = strUser.userSum;
    // employees.post(strUser);
    const employeeSelection = {
      name: "",
      photo: "",
      employeeDifference: Infinity
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let scores = strUser.scores;
    let reducedScores = scores.map(Number);
    let userSum = reducedScores.reduce(reducer);
    // return userSum;

    // let userSum = sum(strUser);
    let lowestDifference = 100;
    let employeeRank = 100;
    // let employeeSelection;
    let employeeSum = 0;
    let employeeIndex;

    for (let i = 0; i < employees.length; i++) {
      employeeSum = employees[i].scores.reduce(reducer);
      employeeRank = Math.abs(parseInt(userSum) - parseInt(employeeSum));

      if (employeeRank <= lowestDifference) {
        lowestDifference = employeeRank;
        employeeIndex = i;
      }
      console.log(employeeIndex);
    }
    const selection = {
      name: employees[employeeIndex].name,
      photo: employees[employeeIndex].link,
      rank: employeeRank
    };
    console.log(strUser);
    res.json(selection);
  });
};
