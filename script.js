let secrets = JSON.parse(localStorage.getItem("secrets")) || [];

function displaySecrets() {
  let list = document.getElementById("secretList");
  list.innerHTML = "";

  secrets.forEach((item, index) => {
    let li = document.createElement("li");

    let text = document.createElement("span");
    text.textContent = item.text + " (" + item.time + ")";

    let editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = function () {
      editSecret(index);
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = function () {
      deleteSecret(index);
    };

    li.appendChild(text);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

function saveSecret() {
  let input = document.getElementById("secretInput");

  if (input.value === "") return;

  let time = new Date().toLocaleString();

  secrets.push({
    text: input.value,
    time: time
  });

  localStorage.setItem("secrets", JSON.stringify(secrets));

  input.value = "";
  displaySecrets();
}

function deleteSecret(index) {
  secrets.splice(index, 1);
  localStorage.setItem("secrets", JSON.stringify(secrets));
  displaySecrets();
}

function editSecret(index) {
  let newText = prompt("Edit your secret:", secrets[index].text);

  if (newText !== null && newText !== "") {
    secrets[index].text = newText;
    localStorage.setItem("secrets", JSON.stringify(secrets));
    displaySecrets();
  }
}

displaySecrets();
