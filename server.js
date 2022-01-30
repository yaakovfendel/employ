const express = require("express");
const app = express();
let cors = require("cors");
app.use(cors());
const port = 2999;
const bodyParser = require("body-parser");
const { send } = require("express/lib/response");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let masseges = [];
app.post("/input", (req, res) => {
  masseges.push(req.body);
  res.send(masseges);
});
const employees = [];
function creatEmploye(first_name, last_name, id) {
  return {
    first_name,
    last_name,
    id,
  };
}
employees.push(
  creatEmploye("yaakov", "fendel", 10),
  creatEmploye("tzipora", "fendel", 18),
  creatEmploye("dan", "choen", 11),
  creatEmploye("yagel", "dror", 26),
  creatEmploye("david", "dor", 16),
  creatEmploye("dor", "dany", 13)
);

app.post("/employees", (req, res) => {
  if (!employees.some((v) => v.id == req.body.id)) {
    employees.push(req.body);
    res.send(employees);
  }
});
app.get("/employees", (req, res) => {
  res.send(employees);
});
app.get("/employees/:id", (req, res) => {
  let temp = false;
  employees.find((v) =>
    v.id == req.params.id ? (res.send(v), (temp = true)) : (temp = false)
  );
  if (!temp) {
    res.send("false");
  }
});
app.put("/employees/:id", (req, res) => {
  let temp = false;
  employees.find((v, i) =>
    v.id == req.params.id
      ? (employees.splice(i, 1, req.body), res.send(employees), (temp = true))
      : (temp = false)
  );
  if (!temp) {
    res.send("false");
  }
});
app.delete("/employees/:id", (req, res) => {
  let temp = false;
  employees.find((v, i) =>
    v.id == req.params.id
      ? (employees.splice(i, 1), res.send(employees), (temp = true))
      : (temp = false)
  );
  if (!temp) {
    res.send("false");
  }
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
