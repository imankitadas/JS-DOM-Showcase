











const taskinput = document.querySelector("#taskinput");
const addBtn = document.querySelector("#addbtn");
const toDoTask = document.querySelector('.to-do-task');

addBtn.addEventListener("click", function(){ 
    if(taskinput.value == ''){ 
        alert("Please Enter Task");
    }else{ 
        let newlist = document.createElement("ul");
        newlist.innerHTML = `${taskinput.value} <i class="fa-regular fa-trash-can"></i> `
        toDoTask.appendChild(newlist);
        taskinput.value = '';
        newlist.querySelector("i").addEventListener("click",remove);
          function remove(){ 
                newlist.remove()
          } 
    }
})




















