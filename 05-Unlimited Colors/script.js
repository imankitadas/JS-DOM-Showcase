function ColorChange(){ 
    let val = '0123456789ABCDEF';
    let conc = '#';
    for(let i = 0 ; i<6; i++){ 
      conc += val[Math.floor(Math.random()*16)]
    }
    return conc;
};

// let interval;

const startchanging = function(){ 
//    if(!interval){ 
    interval= setInterval(bgcolorchanging, 1000);
//    }  
   
    function bgcolorchanging(){ 
        document.body.style.backgroundColor = ColorChange();
    }
}

const stopchanging =function(){
    clearInterval(interval);
    interval = null;
}

document.getElementById("start").addEventListener("click",startchanging);

document.getElementById("stop").addEventListener("click",stopchanging);


