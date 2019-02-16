const employees = require("../data/employees");

module.exports = function(app) {
    
app.get("/api/employees", function(req, res){
    res.json(employees)
});

app.post("/api/employees", function(req, res){
    const strUser = req.body;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const sum = function(strUser){
        let scores = strUser.scores
        let reducedScores = scores.map(Number)
        let userSum = reducedScores.reduce(reducer)
        return userSum
    }

    let userSum = sum(strUser)
    let lowestDifference = 100;
    let employeeRank = 100;
    let employeeSelection;
    let employeeSum = 0;

    for (let i = 0; i < employeeList.length; i++) {
        employeeSum = 0; 
        employeeSum = employeesList[i].scores.reduce(reducer);
        employeeRank =  Math.abs(parseInt(userSum) - parseInt(employeeSum));

        if (employeeRank<=lowestDifference){
            lowestDifference=employeeRank;
            employeeSelection=i;
        }
    }
    const selection = {
        "name": employeesList[i].name,
        "photo": employeesList[i].link,
        "rank": employeeRank
    };

    employeeList.push(strUser);
    res.json(selection);

})};
