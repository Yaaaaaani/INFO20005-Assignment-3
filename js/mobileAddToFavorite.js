var favoriteBtn = document.getElementById("mobileFavorite");
var wishlistConfirm = document.getElementById("wishlistConfirm");
var favoriteClose = document.getElementById("mobileCloseFavorite");

var confirmer = document.getElementById("firstConfirm");
var confirmTable = document.getElementById("addProduct");

favoriteBtn.onclick = function(){
    confirmTable.style.display = "block";
    wishlistConfirm.style.display = "block";
    confirmer.style.display = "none";
}

favoriteClose.onclick = function(){
    confirmer.style.display = "block"
    wishlistConfirm.style.display = "none";
    confirmTable.style.display = "none";
}