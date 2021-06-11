var description = document.getElementById("textDescription");
var details = document.getElementById("textDetails");
var warranty = document.getElementById("textWarranty");

var desSwitch = document.getElementById("descriptClick");
var detSwitch = document.getElementById("detailsClick");
var warSwitch = document.getElementById("warrantyClick");

desSwitch.onclick = function () {
    if(description.style.display == "flex"){
        description.style.display = "none";
    }
    else{
        description.style.display = "flex";
    }
};

detSwitch.onclick = function () {
    if(details.style.display == "flex"){
        details.style.display = "none";
    }
    else{
        details.style.display = "flex";
    }
};

warSwitch.onclick = function () {
    if(warranty.style.display == "flex"){
        warranty.style.display = "none";
    }
    else{
        warranty.style.display = "flex";
    }
};