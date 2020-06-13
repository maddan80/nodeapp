let express = require("express");
let app = express();

const testFacade = require("./facade/testFacade");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/test", function(req, res) {
  res.send("Hello World Test!");
});

app.get("/getAllEmployees", function(req, res) {
  const employees = testFacade.getAlEmployees();
  res.send(employees);
});

app.get("/employee/:id", function(req, res) {
  const emp = testFacade.getEmployee(req.params.id);
  res.send(emp);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
