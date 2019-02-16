const employees = require("../data/employees");

module.exports = function(app) {
    
app.get("/api/employees", function(req, res){
    res.json(employees)
});

app.post("/api/employees", function(req, res){
    const strUser = req.body;
    employees.post(strUser)

})};
