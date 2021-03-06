window.onload= function() {
    document.getElementById("mensajeerror").style.display= "none"
}

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
let mensaje = document.getElementById("mensaje");

pagoform.addEventListener("submit", function(e){
    e.preventDefault();

    if(tj.value == '')
    {
		document.getElementById("mensajeerror").style.display= "block"
        tj.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		tj.style.background = "#FFFFFF";
	}
	
	if(cvc.value=='')
    {
        document.getElementById("mensajeerror").style.display= "block"
		cvc.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		cvc.style.background = "#FFFFFF";
	}
	
	if(amount.value=='')
    {
        document.getElementById("mensajeerror").style.display= "block"
		amount.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		amount.style.background = "#FFFFFF";
	}
	
	if(name.value=='')
    {
        document.getElementById("mensajeerror").style.display= "block"
		name.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		name.style.background = "#FFFFFF";
	}
	
	if(lastname.value=='')
    {
        document.getElementById("mensajeerror").style.display= "block"
		lastname.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		lastname.style.background = "#FFFFFF";
	}
	
	if(city.value=='')
    {
        document.getElementById("mensajeerror").style.display= "block"
		city.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		city.style.background = "#FFFFFF";
	}
	
	if(postalcode.value=='')
    {
        document.getElementById("mensajeerror").style.display= "block"
		postalcode.style.background = "#F5B7B1";
    }
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		postalcode.style.background = "#FFFFFF";
	}
	
	if(state.value == "-1")
	{
		document.getElementById("mensajeerror").style.display= "block"
		state.style.background = "#F5B7B1";
	}
	else
	{
		document.getElementById("mensajeerror").style.display= "none"
		state.style.background = "#FFFFFF";
	}
	
	if(!amex.checked && !mastercard.checked && !visa.checked && !diners.checked)
	{
		document.getElementById("mensajeerror").style.display= "block"
		amex.style.background = "#F5B7B1";
		mastercard.style.background = "#F5B7B1";
		visa.style.background = "#F5B7B1";
		diners.style.background = "#F5B7B1";
	}
	else
	{
		amex.style.background = "#FFFFFF";
		mastercard.style.background = "#FFFFFF";
		visa.style.background = "#FFFFFF";
		diners.style.background = "#FFFFFF";
		document.getElementById("mensajeerror").style.display= "none"
	}
	
	if(mensaje.value == "")
	{
		document.getElementById("mensajeerror").style.display= "block"
		mensaje.style.background = "#F5B7B1";
	}
	else
	{	
		document.getElementById("mensajeerror").style.display= "none"
		mensaje.style.background = "#FFFFFF";
	}

});