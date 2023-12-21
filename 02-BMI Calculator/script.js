




function bmicalc(){ 
    event.preventDefault() 
    const height = document.getElementById("height").value/100;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");
    const text = document.getElementById("result-text");
   
  
  const val = weight / (height * height);
  if(height > 0 && weight > 0){ 
    if(val < 18.6 ){ 
      text.innerText = "Under Weight";
      text.style.color = "blue";
      result.innerText = val.toFixed(2);
    }
    if(val >= 18.9 && val <= 24.9){ 
      text.innerText = "Normal Range ";
      text.style.color = "green";
      result.innerText = val.toFixed(2);
    }
    if(val > 24.9 ){ 
      text.innerText = "Over Weight";
      text.style.color = "red";
      result.innerText = val.toFixed(2);
    }  
  }else{ 
    text.innerText = "Please Enter a Valid Height and Weight";
    result.innerText = " ";
  }
  
 
}

document.getElementById("btn").addEventListener("click", bmicalc);

