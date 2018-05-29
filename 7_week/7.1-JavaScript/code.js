//variables
var bill;
var tipPercentage;
var output;
var button;
//functions
function Initialize() {
	bill = document.getElementById("bill").value;
	tipPercentage = document.getElementById("tip").value;
	output = document.getElementById("totalTip");
	output.style.display = "none";
}

function tipCalculator() {
	var totalBill;
	//validation
	if(bill === null)
	{
		alert("Please enter your bill.");
	}
	else if(tipPercentage === null)
	{
		alert("Please enter tip percentage.");
	}
	else
	{
		totalBill = Number.parseFloat(bill)*(1 + Number.parseFloat(tipPercentage));
		totalBill = totalBill.toFixed(2);
		output.innerHTML = totalBill;
	}			
}

//click to call function
document.getElementById("calculate").onclick = function() {tipCalculator()};