var addCartBtn = document.getElementById("addCartIcon"); 
var addCartConfirm = document.getElementById("addCartConfirm");
var dumpCart = document.getElementById("viewCart");
var closeCart = document.getElementById("closeCart");

addCartBtn.onclick = function(){
    addCartConfirm.style.display = "flex";
}

closeCart.onclick = function(){
    addCartConfirm.style.display = "none";
}

dumpCart.onclick = function() {
    window.location.href = "Cart.html";
}
