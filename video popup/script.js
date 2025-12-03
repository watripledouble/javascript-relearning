const clickBtn = document.querySelector(".clickBtn");
const mvContainer = document.querySelector(".mv-container");
const video = document.querySelector("video");
const closeIcon = document.querySelector(".close-icon");

function playVid() {
clickBtn.addEventListener ("click", () =>{
    mvContainer.classList.remove("active");
});

closeIcon.addEventListener ("click", () => {
    mvContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});
}

playVid();