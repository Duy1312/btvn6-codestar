
const addButtonn = document.getElementById("addButton")
const ListGroup = document.getElementById("sidbarList")
const SidebarInput = document.getElementById("sidebar-input")


addButtonn.addEventListener("click", addSidebar)

function addSidebar() {
 
    const newSidebar = document.createElement('li')
    newSidebar.innerHTML = SidebarInput.value
    
   
    ListGroup.appendChild(newSidebar);
}