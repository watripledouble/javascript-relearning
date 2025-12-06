const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const img = document.querySelectorAll("img");
const imgCon = document.querySelector(".img-container");

let currentImg = 1;
let timeout;



function updateImg () {
    if (currentImg > img.length){
        currentImg = 1;
    }else if (currentImg < 1) {
        currentImg = img.length;
    }
    imgCon.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
    timeout = setTimeout (() => {
        currentImg++;
        updateImg();
    },3000);
}

updateImg();


prev.addEventListener ("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

next.addEventListener ("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})
