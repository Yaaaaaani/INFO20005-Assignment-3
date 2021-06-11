var mobileAddBtn = document.getElementById("mobileAddCart");
var confirmTable = document.getElementById("addProduct");
var cancelBtn = document.getElementById("mobileCancel");
var confirmer = document.getElementById("firstConfirm");
var confirmBtn = document.getElementById("confirmBtn");
var reminder = document.getElementById("secondConfirm");
var closeReminder = document.getElementById("mobileCloseReminder");


mobileAddBtn.onclick = function(){
    confirmTable.style.display = "block";
}

cancelBtn.onclick = function(){
    confirmTable.style.display = "none";
}

confirmBtn.onclick = function(){
    confirmer.style.display = "none";
    reminder.style.display = "block";
}

closeReminder.onclick = function(){
    reminder.style.display = "none";
    confirmer.style.display = "block"
    confirmTable.style.display = "none";
}