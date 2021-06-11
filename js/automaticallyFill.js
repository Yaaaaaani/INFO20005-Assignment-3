var btn_filling = document.getElementById("automaticalFilling");

var emailAddress = document.getElementById("email");
var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");
var street = document.getElementById("street");
var city = document.getElementById("city");
var state = document.getElementById("state");
var postcode = document.getElementById("postcode");
var country = document.getElementById("country");
var phoneNumber = document.getElementById("phoneNum");

btn_filling.onclick = function(){
    emailAddress.setAttribute("value", "abcdefg@gmail.com");
    firstName.setAttribute("value", "Shirley");
    lastName.setAttribute("value", "Friday");
    street.setAttribute("value", "123 Street St");
    city.setAttribute("value", "City");
    state.setAttribute("value", "State");
    postcode.setAttribute("value", "0000");
    country.setAttribute("value", "Country");
    phoneNumber.setAttribute("value", "+61 0000000");
}