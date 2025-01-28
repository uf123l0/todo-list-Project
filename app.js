const inputBox=document.getElementById("input-box");
const ListContainer=document.getElementById("list-container");

function AddTask(){
         if(inputBox.value === ''){
            alert("you must write something!");
         }
         else{
            let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            ListContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);

         }
         inputBox.value="";
         storeTask();
}
ListContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        storeTask();
    }
    else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      storeTask();
    }
},false);

function storeTask(){
          localStorage.setItem("Task", ListContainer.innerHTML);
}
 function displayTask(){
         ListContainer.innerHTML=localStorage.getItem("Task");
 }
 storeTask();