function get_all_employees(employees) {
  fetch("http://localhost:2999/employees", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      printData(data);
    });
}
function get_employe_byid(params) {
  let input = document.getElementById("Id_employe").value;
  if (input > 0) {
    get_employe_by_id(input);
  }
  document.getElementById("Id_employe").value = "";
}
function get_employe_by_id(id) {
  fetch(`http://localhost:2999/employees/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data == false) {
        erase();
      } else {
        print_employe(data);
      }
    });
}
const alphaExp = /^[a-z\u0590-\u05fe]+$/i;
function post_new_employe_input(params) {
  let first_name_input = document.getElementById("FirstName_enploye").value;
  let last_name_input = document.getElementById("LastName_enploye").value;
  let id_input = document.getElementById("Id_employe").value;
  if (first_name_input.match(alphaExp) && last_name_input.match(alphaExp)) {
    post_new_employe_to_database({
      first_name: first_name_input,
      last_name: last_name_input,
      id: id_input,
    });
  }
  document.getElementById("FirstName_enploye").value = "";
  document.getElementById("LastName_enploye").value = "";
  document.getElementById("Id_employe").value = "";
}
function post_new_employe_to_database(employees) {
  fetch("http://localhost:2999/employees", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(employees),
  })
    .then((res) => res.json())
    .then((data) => {
      printData(data);
    });
}
function update_employe_fun(params) {
  let first_name_input = document.getElementById("FirstName_enploye").value;
  let last_name_input = document.getElementById("LastName_enploye").value;
  let id_input = document.getElementById("Id_employe").value;
  if (first_name_input.match(alphaExp) && last_name_input.match(alphaExp)) {
    update_employe({
      first_name: first_name_input,
      last_name: last_name_input,
      id: id_input,
    });
    document.getElementById("FirstName_enploye").value = "";
    document.getElementById("LastName_enploye").value = "";
    document.getElementById("Id_employe").value = "";
  }
}
function update_employe(employe) {
  fetch(`http://localhost:2999/employees/${employe.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(employe),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data != false) {
        printData(data);
      }
    });
}

function Delete_employe_fun(params) {
  let input = { id: document.getElementById("Id_employe").value };
  delete_employe(input);
  document.getElementById("Id_employe").value = "";
}
function delete_employe(id) {
  if (id.id > 0) {
    fetch(`http://localhost:2999/employees/${id.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != false) {
          printData(data);
        }
      });
  }
}
const main_results = document.getElementById("main_results");
function printData(data) {
  erase();
  for (let i of data) {
    let content = document.createElement("div");
    content.className = "results";
    main_results.appendChild(content);
    content.innerHTML = `<ins><b id="name_user"> name:</ins> ${i.first_name} </b><ins><b id="last_name"> Last Name:</ins> ${i.last_name} </b><ins><b id="id"> ID:</ins> ${i.id} </b><br>`;
  }
  console.log("printed");
}
function print_employe(data) {
  erase();
  let content = document.createElement("div");
  content.className = "results";
  content.innerHTML = `<ins><b id="name_user"> name:</ins> ${data.first_name} </b><ins><b id="last_name"> Last Name:</ins> ${data.last_name} </b><ins><b id="id"> ID:</ins> ${data.id} </b><br>`;
  main_results.appendChild(content);
}
function erase() {
  let temp = document.getElementById("main_results");
  temp.innerHTML = "";
}

const Delete_employe_btn = () => (
  <button
    type="button"
    onClick={Delete_employe_fun}
    className="btn"
    id="delete_employe_btn"
  >
    delete employ by id
  </button>
);

const Get_all_employees_btn = () => (
  <button
    type="button"
    onClick={get_all_employees}
    className="btn"
    id="get_all_employees"
  >
    get all employees
  </button>
);

const Up_date_employees_btn = () => (
  <button
    type="button"
    onClick={update_employe_fun}
    className="btn"
    id="up_date_employees"
  >
    Up date employees
  </button>
);

const Post_new_employe_btn = () => (
  <button
    type="button"
    onClick={post_new_employe_input}
    className="btn"
    id="post_new_employe"
  >
    post new employe
  </button>
);

const Get_employe_by_id_btn = () => (
  <button
    type="button"
    onClick={get_employe_byid}
    className="btn"
    id="employe by id"
  >
    employe by id
  </button>
);

const FirstName_enploye = () => (
  <input
    type="text"
    className="input"
    name="FirstName_enploye"
    id="FirstName_enploye"
    placeholder=" first name"
  />
);
const LastName_enploye = () => (
  <input
    type="text"
    className="input"
    name="LastName_enploye"
    id="LastName_enploye"
    placeholder=" last name"
  />
);

const Id_employe = () => (
  <input
    type="number"
    className="input"
    name="Id_employe"
    id="Id_employe"
    placeholder="id"
  />
);

const App = () => (
  <React.Fragment>
    <div>
      <div>
        <Get_all_employees_btn />
      </div>
      <div>
        <Get_employe_by_id_btn />
      </div>
      <div>
        <Post_new_employe_btn />
      </div>
      <div>
        <Up_date_employees_btn />
      </div>
      <div>
        <Delete_employe_btn />
      </div>
    </div>
    <div>
      <FirstName_enploye />
      <LastName_enploye />
      <Id_employe />
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("app"));
