const todoInput =document.getElementById("todo-item");

const addBtn=document.getElementById("add-btn");

const todoItemContainer=document.getElementById("todo-item-container");

addBtn.addEventListener('click',()=>{
    const value =todoInput.value;

    const li =document.createElement("li");
    li.innerText=value;
     console.log(li);

     const delBtn=document.createElement("button");
     delBtn.innerText ='X' ;

     li.appendChild(delBtn);
     delBtn.addEventListener ('click',()=>{
        li.remove();
     });

     todoItemContainer.appendChild(li);
     todoInput.value=''; 

    
});

