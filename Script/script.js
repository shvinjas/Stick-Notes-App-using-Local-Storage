const ContainerElement = document.getElementById("container")
const btnAdd = document.getElementsByClassName("btn-Add")[0];


function getAppStorage(){
    return JSON.parse(localStorage.getItem("stickynote")||"[]");
}



getAppStorage().forEach(element => {
    console.log(element);
    
});


getAppStorage();

function createTextElement(id,context){

}
