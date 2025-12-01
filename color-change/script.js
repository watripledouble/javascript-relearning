const square = document.querySelector(".square")
const redBtn = document.querySelector(".red")
const greenBtn = document.querySelector(".green")
const blueBtn = document.querySelector(".blue")
const yellowBtn = document.querySelector(".yellow")
const cyanBtn = document.querySelector(".cyan")
const purpleBtn = document.querySelector(".purple")
const orangeBtn = document.querySelector(".orange")
const resetBtn = document.querySelector(".reset")

    //ปุ่มเปลี่ยนสี
    redBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "red";      
    })

    greenBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "green";
    })

    blueBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "blue";
    })

    yellowBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "yellow";
    })

    cyanBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "cyan";
    })

    purpleBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "purple";
    })

    orangeBtn.addEventListener ("click", () => {
        square.style.backgroundColor = "orange";
    })

    resetBtn.addEventListener ("click", () => {
        square.style.backgroundColor =  "initial";
    })