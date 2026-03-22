let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    if (currentPage < pages.length) {
        pages[currentPage].style.zIndex = currentPage;
        pages[currentPage].classList.add("flipped");
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    }
}

/* Popup */
function showLogin() {
    document.getElementById("loginBox").style.display = "block";
}

function showAbout() {
    document.getElementById("aboutBox").style.display = "block";
}

function closeBox() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("aboutBox").style.display = "none";
}
