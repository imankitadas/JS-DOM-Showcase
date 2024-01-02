let body = document.querySelector('body');
const wire = document.getElementById("wire");
const bulb = document.getElementById("image");
let button = document.getElementById("btn");
let audio = document.getElementById("audio");

bulb.src = "img1.png";

let isBulbOn = false; // Flag to track the state

button.addEventListener("click", function () {
    if (isBulbOn) {
        // Toggle to img1.png and reset styles
        bulb.src = "img1.png";
        bulb.classList.remove("bulbOn");
        bulb.style.width = "20rem";
        bulb.style.height = "20rem";
        bulb.style.marginTop = "11%";
        body.classList.remove('on');
        audio.play();
    } else {
        // Toggle to img2.png
        bulb.src = "img2.png";
        bulb.classList.add("bulbOn");
        bulb.style.width = "18.5rem";
        bulb.style.height = "18.5rem";
        bulb.style.marginTop = "13.2%";
        body.classList.add('on');
        audio.play();
    }

    // Toggle the state
    isBulbOn = !isBulbOn;
});




























































