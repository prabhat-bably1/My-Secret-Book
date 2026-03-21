let secrets = JSON.parse(localStorage.getItem("secrets")) || [];

function displaySecrets() {
  let list = document.getElementById("secretList");
  list.innerHTML = "";

  secrets.forEach((secret, index) => {
    let li = document.createElement("li");
    li.textContent = secret;

    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = function () {
      deleteSecret(index);
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function saveSecret() {
  let input = document.getElementById("secretInput");

  if (input.value === "") return;

  secrets.push(input.value);
  localStorage.setItem("secrets", JSON.stringify(secrets));

  input.value = "";
  displaySecrets();
}

function deleteSecret(index) {
  secrets.splice(index, 1);
  localStorage.setItem("secrets", JSON.stringify(secrets));
  displaySecrets();
}

// Page load hone pe run hoga
displaySecrets();
const correctPassword = "1234";

function checkPassword() {
  let input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
  } else {
    alert("Wrong Password ❌");
  }
}