/* const textarea = document.getElementById("textArea")
const button = document.getElementById("submitButton")
const storage = [];



storage.push(textarea.innerHTML)
console.log(storage) */

const textarea = document.getElementById("textArea")
var index = 0
const faders = document.querySelector(".fade-in")
document.getElementById("submitButton").onclick = function(){

    let text = textarea.value
    if(text !== ""){
     



    const tagbtn = document.createElement("button")
    tagbtn.id ="Done" + index.toString()
    tagbtn.className = "Done"
    tagbtn.innerHTML = "Done"

    const tagtext = document.createElement("li")
    tagtext.id = "addin" + index.toString()
    tagtext.className = "text"

    if(index % 2 ===0){
        tagtext.className = "text right"
    }
    if(index % 2 !== 0){
        tagtext.className = "text left"
    }
    
    document.getElementById("todolist").appendChild(tagtext)
    
    document.getElementById('addin'+ index.toString()).innerHTML = "<p>"+text+"</p>" 
    document.getElementById("addin" + index.toString()).appendChild(tagbtn)


    index +=1;
    
    }
    
    var deleteitem = document.querySelectorAll('.Done');
    
    
    
    for(let k =0 ; k < deleteitem.length ; k++){
        deleteitem[k].onclick = function (){
        console.log(k)
            if(window.confirm("Are you sure?") ===true){
                deleteitem[k].parentElement.remove()
                

                
                 
                 
            }
            
        }
    }
    textarea.value = "";
    
}



document.getElementById("textArea").addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        e.preventDefault();
        document.getElementById("submitButton").click()
        
    }
})


