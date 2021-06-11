var tick = document.getElementById("chooseItem");
var proceedCheckout = document.getElementById("proceedCheckout");
var orderTotal = document.getElementById("orderTotal");
var subtotal = document.getElementById("subtotal");

tick.onclick = function(){
    if(subtotal.style.visibility == "visible"){
        subtotal.style.visibility = "hidden";
        orderTotal.style.visibility = "hidden";
        proceedCheckout.style.visibility = "hidden"; 
    }
    else{
        subtotal.style.visibility = "visible";
        orderTotal.style.visibility = "visible";
        proceedCheckout.style.visibility = "visible";
    }
}

var tickMobile = document.getElementById("chooseItemMobile");
var proceedCheckoutMobile = document.getElementById("proceedCheckoutMobile");
var orderTotalMobile = document.getElementById("orderTotalMobile");
var subtotalMobile = document.getElementById("subtotalMobile");

tickMobile.onclick = function(){
    if(subtotalMobile.style.visibility == "visible"){
        subtotalMobile.style.visibility = "hidden";
        orderTotalMobile.style.visibility = "hidden";
        proceedCheckoutMobile.style.visibility = "hidden"; 
    }
    else{
        subtotalMobile.style.visibility = "visible";
        orderTotalMobile.style.visibility = "visible";
        proceedCheckoutMobile.style.visibility = "visible";
    }
}