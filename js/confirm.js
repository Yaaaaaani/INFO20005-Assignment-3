var favoriteBtn = document.getElementById("favorite"); 
var favoriteConfirm = document.getElementById("favoriteConfirm");
var dumpWishList = document.getElementById("viewWishList");
var closeFavorite = document.getElementById("closeFavorite");

var addCartBtn = document.getElementById("addCartIcon"); 
var addCartConfirm = document.getElementById("addCartConfirm");
var dumpCart = document.getElementById("viewCart");
var closeCart = document.getElementById("closeCart");

favoriteBtn.onclick = function(){
    favoriteConfirm.style.display = "flex";
}

closeFavorite.onclick = function(){
    favoriteConfirm.style.display = "none";
}

dumpWishList.onclick = function() {
    window.location.href = "Wishlist.html";
}


addCartBtn.onclick = function(){
    addCartConfirm.style.display = "flex";
}

closeCart.onclick = function(){
    addCartConfirm.style.display = "none";
}

dumpCart.onclick = function() {
    window.location.href = "Cart.html";
}


