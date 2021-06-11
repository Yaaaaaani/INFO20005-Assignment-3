var userIcon = document.getElementById("userIcon");
var loginSection = document.getElementById("loginSection");
var closeLogin = document.getElementById("closeLogin");

userIcon.onclick = function(){
    loginSection.style.display = "flex";
}

closeLogin.onclick = function(){
    loginSection.style.display = "none";
}