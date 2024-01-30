//difference between let annd var
var firstName='Vineet';
function displayLastName(){
    if(firstName='Vineet'){
        console.log('Patil')
    }
    
}
displayLastName();//this works as var is global scope as well as functional scope
function displayMiddleName(){
    let firstName="Vineet";
    if(firstName==="Vineet"){
        console.log("Kishor")
    }
}
displayMiddleName();//this words as let is blockscope

function displayCity(){
    if(true){
        let city="bhusawal"
        
    }
    console.log(city)//this doesnt work as let is blockscope
}
displayCity();
