let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    if (currentPage < pages.length) {
        pages[currentPage].classList.remove("active");
        currentPage++;
    }
}
