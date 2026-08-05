/* ==========================================================
   PART 4
   DYNAMIC LETTER ANIMATION
========================================================== */

const loveCard = document.getElementById("loveCard");
const letter = document.getElementById("letter");
const paper = letter.querySelector(".paper");
const button = document.getElementById("toggleBtn");

let opened = false;
let busy = false;

/* ==========================================
   OPEN / CLOSE
========================================== */

function toggleLetter(){

    if(busy) return;

    opened ? closeLetter() : openLetter();

}

button.addEventListener("click",toggleLetter);
loveCard.addEventListener("click",toggleLetter);

/* ==========================================
   OPEN
========================================== */

function openLetter(){

    busy = true;

    // Wait for flap animation
    loveCard.classList.add("open");

    setTimeout(()=>{

        // Get actual paper height
        const paperHeight = paper.offsetHeight;

        // Amount of paper remaining inside envelope
        const visibleInside = 140;

        // Calculate movement
        const moveUp = paperHeight - visibleInside;

        letter.style.transform =
            `translateX(-50%) translateY(-${moveUp}px)`;

        button.innerHTML="💖 Close Letter 💖";

        opened=true;

        busy=false;

    },350);

}

/* ==========================================
   CLOSE
========================================== */

function closeLetter(){

    busy=true;

    letter.style.transform =
        "translateX(-50%) translateY(140px)";

    setTimeout(()=>{

        loveCard.classList.remove("open");

        button.innerHTML="💌 Open Letter 💌";

        opened=false;

        busy=false;

    },450);

}

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize",()=>{

    if(!opened) return;

    const paperHeight = paper.offsetHeight;

    const visibleInside = 140;

    const moveUp = paperHeight - visibleInside;

    letter.style.transform =
        `translateX(-50%) translateY(-${moveUp}px)`;

});

/* ==========================================
   INITIAL POSITION
========================================== */

window.addEventListener("load",()=>{

    letter.style.transform =
        "translateX(-50%) translateY(140px)";

});
