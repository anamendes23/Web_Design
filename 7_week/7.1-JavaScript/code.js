//variables
var bill = Number.parseFloat(document.getElementById("bill").value);
var tipPercentage = Number.parseFloat(document.getElementById("bill").value);
submitOK = "true";
//validation
if(bill == null)
{
	alert("Please enter your bill.");
	submitOK = "false";
}
if(tipPercentage == null)
{
	alert("Please enter tip perentage.");
	submitOK = "false";
}
if(submitOK == "false")
{
	return false;
}
//function
function tipCalculator(bill, tipPercentage) {
	var totalBill = bill*(1+tipPercentage);
	return Number.parseFloat(totalBill).toFixed(2);
}

document.write('Your total bill, with tip, is $' + tipCalculator);
