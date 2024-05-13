const input = document.getElementById("input-box");
const task_container = document.querySelector(".task-container");
function addtask(){
    if(input.value === ""){
        alert("Enter the task")
    }
    else{
        const list_items = document.createElement("div");
        list_items.innerHTML = "";
        task_container.appendChild(list_items);
        list_items.classList.add("list-items")
        const items = document.createElement("div");
        items.innerHTML = input.value;
        list_items.appendChild(items);
        items.classList.add("item");
        const remove = document.createElement("span");
        const iconHtml = '<i class="fa-regular fa-circle-xmark"></i>';
        remove.innerHTML = iconHtml;
        list_items.appendChild(remove);
        remove.classList.add("remove")

    }
    input.value = "";
    saveData()
}
task_container.addEventListener("click",(e)=>{
    if(e.target.tagName ===  "DIV"){
        // alert('hellor')
        e.target.classList.toggle("checked")
        
    }else if(e.target.parentElement.parentElement.className === "list-items"){
        // alert("hellor")
        e.target.parentElement.parentElement.remove();

    }
});
function saveData() {
    localStorage.setItem('userData', task_container.innerHTML);
  }
  function displayData() {
   task_container.innerHTML = localStorage.getItem('userData');
  }
  displayData()
  
  