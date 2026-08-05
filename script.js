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
/* ==========================================================
   PART 5
   FLOATING HEARTS
========================================================== */

const heartsContainer =
document.getElementById("hearts");

const sparkleContainer =
document.getElementById("sparkles");

/* ===============================
   FLOATING HEARTS
=============================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=
        Math.random()*100+"%";

    heart.style.fontSize=
        (18+Math.random()*28)+"px";

    heart.style.animationDuration=
        (6+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,350);

/* ===============================
   SPARKLES
=============================== */

function createSparkle(){

    const s=
    document.createElement("div");

    s.className="sparkle";

    s.style.left=
        Math.random()*100+"%";

    s.style.top=
        Math.random()*100+"%";

    sparkleContainer.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(createSparkle,180);

/* ===============================
   HEART BURST
=============================== */

function heartBurst(){

    const rect=
    loveCard.getBoundingClientRect();

    for(let i=0;i<18;i++){

        const h=
        document.createElement("div");

        h.className="burst-heart";

        h.innerHTML="❤";

        h.style.left=
            rect.width/2+"px";

        h.style.top=
            rect.height/2+"px";

        const angle=
            Math.random()*360;

        const distance=
            70+Math.random()*90;

        const x=
            Math.cos(angle*Math.PI/180)
            *distance;

        const y=
            Math.sin(angle*Math.PI/180)
            *distance;

        h.style.setProperty("--x",x+"px");

        h.style.setProperty("--y",y+"px");

        loveCard.appendChild(h);

        setTimeout(()=>{

            h.remove();

        },900);

    }

}
