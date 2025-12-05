const counter = document.querySelector(".counter");
const loadingBarF = document.querySelector(".loading-front");
const loadingBarB = document.querySelector(".loading-back");
const message = document.querySelector(".message");

let ld = 0;

function loading() {
    counter.innerHTML = ld + "%";
    loadingBarF.style.width = ld + "%";
    ld++;
    if (ld < 101) {
        setTimeout(loading, 60);
    }if (ld > 0) {
        counter.style.color ="red";
        loadingBarF.style.backgroundColor = "red";
    }if (ld > 30) {
        counter.style.color ="orange";
        loadingBarF.style.backgroundColor = "orange";
    }if (ld > 50) {
        counter.style.color ="yellow";
        loadingBarF.style.backgroundColor = "yellow";
    }if (ld > 75) {
        counter.style.color ="lime";
        loadingBarF.style.backgroundColor = "lime";
    }if (ld == 100){
        counter.style.display = "none";
        loadingBarF.style.display = "none";
        loadingBarB.style.display = "none";
        message.innerHTML = "Finished";
        message.style.fontSize = "100px";
    }
}

loading();