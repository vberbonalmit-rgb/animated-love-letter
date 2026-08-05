/* ==========================================
   ELEMENTS
========================================== */

const card = document.getElementById("card");
const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const flap = document.getElementById("flap");
const hearts = document.getElementById("hearts");

let opened = false;
let animating = false;

/* ==========================================
   OPEN / CLOSE
========================================== */

function toggleLetter() {

    if (animating) return;

    animating = true;

    if (!opened) {

        openLetter();

    } else {

        closeLetter();

    }

}

card.addEventListener("click", toggleLetter);
button.addEventListener("click", toggleLetter);

/* ==========================================
   OPEN
========================================== */

function openLetter() {

    const paper = letter.querySelector(".paper");

    // Actual paper height
    const paperHeight = paper.offsetHeight;

    // Move letter based on its own height
    const moveUp = paperHeight * 0.55;

    letter.style.transform =
        `translateY(-${moveUp}px)`;

    card.classList.add("open");

    button.innerHTML = "💖 Close Letter 💖";

    opened = true;

    animating = false;

}

/* ==========================================
   CLOSE
========================================== */

function closeLetter() {

    letter.style.transform =
        "translateY(110px)";

    card.classList.remove("open");

    button.innerHTML =
        "💌 Open My Letter 💌";

    opened = false;

    setTimeout(() => {

        animating = false;

    }, 700);

}

/* ==========================================
   UPDATE ON RESIZE
========================================== */

window.addEventListener("resize", () => {

    if (!opened) return;

    const paper = letter.querySelector(".paper");

    const moveUp = paper.offsetHeight * 0.55;

    letter.style.transform =
        `translateY(-${moveUp}px)`;

});

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (16 + Math.random() * 28) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 350);

/* ==========================================
   OPTIONAL: PRESS SPACE TO OPEN/CLOSE
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        toggleLetter();

    }

});

/* ==========================================
   OPTIONAL: OPEN AFTER 1 SECOND
========================================== */

// Uncomment if you want the envelope to
// automatically open after loading.
//
// window.onload = () => {
//     setTimeout(openLetter,1000);
// };
