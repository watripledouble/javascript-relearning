const imgContainer = document.querySelector(".images-container");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0;
let timer;

function updateGallery () {
    imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 2000);
}

updateGallery();

prev.addEventListener ("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
})

next.addEventListener ("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
})