function schemer(){ 
    const header = document.querySelector(".header")
    const box1 = document.getElementById("grey");
    const box2 = document.getElementById("white");
    const box3 = document.getElementById("blue");
    const box4 = document.getElementById("yellow");

    box1.addEventListener("click", function(){ 
        header.style.backgroundColor = "grey";
    })
    box2.addEventListener("click", function(){ 
        header.style.backgroundColor = "white";
    })
    box3.addEventListener("click", function(){ 
        header.style.backgroundColor = "blue";
    })
    box4.addEventListener("click", function(){ 
        header.style.backgroundColor = "yellow";
    })
}

schemer();





















