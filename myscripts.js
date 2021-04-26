document.getElementById("mybtn").addEventListener("click", displayDate);
document.getElementById("mybtn").addEventListener("mouseover", displayName);
document.getElementById("mybtn").addEventListener("mouseout", removeName);

const clickCount = 0;

var clickCount = 0;

function displayDate(){
  if(clickCount % 2 === 0){
     document.getElementById("p1").innerHTML = "";
  }
  else{
    document.getElementById("p1").innerHTML = "March 29";
  }
  clickCount++;
}

function displayName(){
   document.getElementById("p2").innerHTML = "Logan Powers";
}

function removeName(){
   document.getElementById("p2").innerHTML = "";
}
