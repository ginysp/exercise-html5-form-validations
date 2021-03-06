window.onload(
    document.getElementById("mensajeerror").style.display= "none"
);

let pagoform = document.getElementById("PagoForm");

let tj = document.getElementById("tj");
let cvc = document.getElementById("cvc");
let amount = document.getElementById("amount");
let name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let city = document.getElementById("city");
let state = document.getElementById("state");
let postalcode = document.getElementById("postalcode");
let mastercard = document.getElementById("mastercard");
let visa = document.getElementById("visa");
let diners = document.getElementById("diners");
let amex = document.getElementById("amex");

pagoform.addEventListener("submit", function(e){
    e.preventDefault();

    if(tj.value == '' || cvc.value=='')
    {
         document.getElementById("mensajeerror").style.display= "block"
         tj.style.background = "red";
    }

});