var btn = document.getElementById("clickBtn");
var smallCate = document.getElementById("categoryName");
var text = document.getElementById("textInBtn");

btn.onclick = function () {
    if(smallCate.style.display == "block"){
        smallCate.style.display = "none";
        text.style.borderColor = "transparent";
        text.style.backgroundColor = "inherit";
        
    }
    else{
        smallCate.style.display = "block";
        text.style.borderColor = "white";
        text.style.backgroundColor = "#6A877B";
    }
};