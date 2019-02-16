const employees = require("../data/employees");


app.get("/api/employees", function(req, res){
    res.json(employeeList)
});

app.post("/api/employees", function(req, res){
    res.json(req.body)
});
