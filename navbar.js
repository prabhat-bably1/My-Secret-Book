document.addEventListener("DOMContentLoaded", async function () {
  const mountPoint = document.getElementById("navbar-container");
  if (!mountPoint) return;

  try {
    const response = await fetch("navbar.html");
    const html = await response.text();
    mountPoint.innerHTML = html;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = mountPoint.querySelectorAll(".nav-btn[href]");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
      }
    });

    const moreBtn = mountPoint.querySelector("#moreBtn");
    const moreDropdown = mountPoint.querySelector("#moreDropdown");
    const logoutBtn = mountPoint.querySelector("#logoutBtn");

    if (moreBtn && moreDropdown) {
      moreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        moreDropdown.classList.toggle("show");
      });

      document.addEventListener("click", function (e) {
        if (!moreBtn.contains(e.target) && !moreDropdown.contains(e.target)) {
          moreDropdown.classList.remove("show");
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("token");
        window.location.href = "login.html";
      });
    }
  } catch (error) {
    console.error("Navbar load error:", error);
  }
});
// MORE OPTIONS BUTTON FIX

document.addEventListener("click", function(e){

  // SETTINGS
  if(e.target.innerText === "Settings"){
    window.location.href = "profile.html#settings";
  }

  // HELP
  if(e.target.innerText === "Help"){
    alert("Help section coming soon 💛\nAgar issue ho to contact karein.");
  }

  // CONTACT
  if(e.target.innerText === "Contact"){
    window.location.href = "contact.html"; // agar page nahi hai to niche fix diya hai
  }

});
