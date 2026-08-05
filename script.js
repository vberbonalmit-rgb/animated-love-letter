const card=document.getElementById("card");

card.addEventListener("click",()=>{

    card.classList.toggle("open");

});

// Floating Hearts

const hearts=document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*35)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,300);
