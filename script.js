const flipCard = document.getElementById("flipCard");
const nextBtn = document.getElementById("nextBtn");
const bookFloat = document.getElementById("bookFloat");
const centerBookBtn = document.querySelector(".book-center-btn");
const sparkles = document.getElementById("sparkles");
const petals = document.getElementById("petals");

function toggleFlip(e) {
  if (e) e.stopPropagation();
  flipCard.classList.toggle("flipped");
}

nextBtn.addEventListener("click", toggleFlip);
bookFloat.addEventListener("click", toggleFlip);
centerBookBtn.addEventListener("click", toggleFlip);

function createSparkles() {
  sparkles.innerHTML = "";
  const count = 22;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("span");
    dot.className = "sparkle-dot";

    const size = Math.random() * 4 + 2;
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.background = Math.random() > 0.45 ? "#ffe3a0" : "#fff8ea";
    dot.style.boxShadow = `0 0 ${8 + Math.random() * 14}px ${dot.style.background}`;
    dot.style.animationDuration = (2 + Math.random() * 4) + "s";
    dot.style.animationDelay = (Math.random() * 4) + "s";

    sparkles.appendChild(dot);
  }
}

function createPetals() {
  petals.innerHTML = "";
  const count = 5;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "%";
    petal.style.top = -(Math.random() * 35) + "%";
    petal.style.setProperty("--drift", (20 + Math.random() * 60) + "px");
    petal.style.animationDuration = (10 + Math.random() * 8) + "s";
    petal.style.animationDelay = (Math.random() * 8) + "s";
    petal.style.opacity = 0.75 + Math.random() * 0.25;

    petals.appendChild(petal);
  }
}

createSparkles();
createPetals();
