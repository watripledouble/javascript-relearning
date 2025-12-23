const testimonials = [
    {
        name : "Kyrie Irving",
        photoUrl : "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
        text : "My focus is basketball, and that's it",
        bgColor : "#2A85A1",
    },
    {
        name : "Stephen Curry",
        photoUrl : "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
        text : "I can do all things.",
        bgColor : "#cfca33ff",
    },

    {
        name : "LeBron James",
        photoUrl : "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" ,
        text : "You have to be able to accept failure to get better.",
        bgColor : "#591182",
    },

    {
        name : "Kevin Durant",
        photoUrl : "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png" ,
        text : "It's hard to play well but it's easy to work hard.",
        bgColor : "#821129",
    },

    {
        name : "James Harden",
        photoUrl : "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png" ,
        text : "If you have dream, chase it no matter it takes",
        bgColor : "#182654",
    },
];

const img = document.querySelector("img");
const textP = document.querySelector(".text");
const username = document.querySelector(".username");
const testimonialContainer = document.querySelector(".testimonial-container");

let i = 0;

updateTestimonial();

function updateTestimonial () {
    const {name , photoUrl , text , bgColor} = testimonials[i];
    img.src = photoUrl;
    textP.innerHTML = text;
    username.innerHTML = name;
    testimonialContainer.style.backgroundColor = bgColor;
   
    i++;

    if (i === testimonials.length) {
        i=0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}