let front = document.getElementById("front");
let userName;
let title;
let message;
let message_;
function input() {
  userName = document.getElementById("name").value;
  title = document.getElementById("title").value;
  message = document.getElementById("message").value;
  message_ = { name: userName, title: title, message: message };
  submit(message_);
}

function submit(message_) {
  document.getElementById("name").value = "";
  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
  fetch("http://localhost:2999/input", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(message_),
  })
    .then((res) => res.json())
    .then((data) => {
      printData_(data);
    });
}

function printData_(data) {
  let content = document.createElement("div");
  content.className = "results";
  front.appendChild(content);
  content.innerHTML = `<ins><b id="name_user"> name:</ins> ${
    data[data.length - 1].name
  } </b><br><ins><b id="title_user"> Title:</ins> ${
    data[data.length - 1].title
  } </b><br><ins><b id="Message_user"> Message:</ins> ${
    data[data.length - 1].message
  } </b><br>`;
}

const Name_input = () => (
  <input type="text" placeholder="name" id="name" className="input" />
);
const Title_input = () => (
  <input type="text" placeholder="title" id="title" className="input" />
);
const Message_input = () => (
  <input
    type="text"
    placeholder="enter your massege"
    id="message"
    className="input"
  />
);
const Submit = () => (
  <button type="submit" onClick={input} className="btn">
    submit
  </button>
);

const Front = () => (
  <React.Fragment>
    <div>
      <Name_input />
    </div>
    <Title_input />
    <div></div>
    <div>
      <Message_input />
    </div>
    <div>
      <Submit />
    </div>
  </React.Fragment>
);
ReactDOM.render(<costumer_details />, document.getElementById("front"));
