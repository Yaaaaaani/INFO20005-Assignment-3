var sidemenu = document.getElementById("sidemenu");
var hamburgerIcon = document.getElementById("humbargerBar");
var normalDisplay = document.getElementById("normalDisplay");
var sidemenuClose = document.getElementById("sidemenuClose");
var livingBtn = document.getElementById("livingBtn");
var livingDisplay = document.getElementById("livingDisplay");
var livingClose = document.getElementById("livingDisplayClose");

hamburgerIcon.onclick = function(){
    sidemenu.style.display = "block";
}

sidemenuClose.onclick = function(){
    sidemenu.style.display = "none";
}

livingBtn.onclick = function(){
    normalDisplay.style.display = "none";
    livingDisplay.style.display = "block";
}

livingClose.onclick = function(){
    normalDisplay.style.display = "block";
    livingDisplay.style.display = "none";
}