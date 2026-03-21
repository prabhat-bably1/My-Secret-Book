let secrets = JSON.parse(localStorage.getItem("secrets")) || [];
const password = "1234";

// Page switch
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Default page
showPage("home");

// Login
function checkPassword() {
  let input = document.getElementById("passwordInput").value;

  if (input === password) {
    showPage("app");
    displaySecrets();
  } else {
    alert("Wrong Password ❌");
  }
}

// Save
function saveSecret() {
  let input = document.getElementById("secretInput");

  if (input.value === "") return;

  secrets.push(input.value);
  localStorage.setItem("secrets", JSON.stringify(secrets));

  input.value = "";
  displaySecrets();
}

// Display
function displaySecrets() {
  let list = document.getElementById("secretList");
  list.innerHTML = "";

  secrets.forEach((s, i) => {
    let li = document.createElement("li");
    li.textContent = s;
    list.appendChild(li);
  });
}
