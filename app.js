var list=document.getElementById("list");
function addTodo(){
    var li=document.createElement("li")
    var litex=document.createTextNode(todo.value)
    li.appendChild(litex)
    list.appendChild(li)

    var delbtn=document.createElement("button");
    var deltex=document.createTextNode("delete")
    delbtn.appendChild(deltex)
    li.appendChild(delbtn)
    delbtn.setAttribute("onclick","deleteItem(this)")

    var editbtn=document.createElement("button")
    var edititem=document.createTextNode("edit")
    editbtn.appendChild(edititem)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editItem(this)")


    todo.value=""
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter Your Todo");
    e.parentNode.firstChild.nodeValue=editValue
}


function delItem(){
    list.innerHTML=""
}




