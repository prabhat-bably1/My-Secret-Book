const bookCard = document.getElementById("bookCard");
const nextBtn = document.getElementById("nextBtn");
const bookFloat = document.getElementById("bookFloat");

function flipBook() {
  bookCard.classList.toggle("flipped");
}

nextBtn.addEventListener("click", flipBook);
bookFloat.addEventListener("click", flipBook);
