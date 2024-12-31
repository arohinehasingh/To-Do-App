let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let toDoListUl = document.getElementById("toDoListUL");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("li");

        newEle.innerHTML=`${inputs.value} <button onclick="edit(this)">Edit</button> <button onclick="del(this)" >delete</button>`;
           
        toDoListUl.appendChild(newEle);
        
        inputs.value="";
        // newEle.querySelector("button").addEventListener("click" , remove);

        // function remove(){
        //     newEle.remove()
        // }
        

        
    }

   
}

function edit(el){
console.log("edit clicked" + el)
}

function del(el){
console.log("del clicked");
}