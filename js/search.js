var searchBar = document.getElementById("searchBar");
var closeIcon = document.getElementById("closeSearch");
var searchIcon = document.getElementById("searchIcon");
var upLine = document.getElementById("upLine")

searchIcon.onclick = function () {
    searchBar.style.display = "flex";
    upLine.style.display = "none";
};

closeIcon.onclick = function () {
    searchBar.style.display = "none";
    upLine.style.display = "flex";
};

var mobileSearchIcon = document.getElementById("mobileSearchIcon");
var mobileSearchBar = document.getElementById("mobileSearchBar");
var mobileCloseIcon = document.getElementById("mobileCloseSearch");

mobileSearchIcon.onclick = function(){
    mobileSearchBar.style.display = "flex";
}

mobileCloseIcon.onclick = function(){
    mobileSearchBar.style.display = "none";
}