var points = sessionStorage.getItem("points");

var head_result = document.getElementById("result-header");



if(points >= 5) {
    head_result.innerText = "That’s nice! You’ve got "+points+" out of 8 right";
   
}
else{
    head_result.innerText = "Oops! You’ve got only "+points+" out of 8 right";
    
}

function reset(){
    location.href = "index.html"; 
}