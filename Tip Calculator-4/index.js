let billAmount = document.getElementById("bill");
let percentageTip = document.getElementById("percentage");
let tipAmount = document.getElementById("tip");
let total = document.getElementById("total");
let errorMessage = document.getElementById("errorMessage")

function caculate() {
    if (billAmount.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (percentageTip.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        errorMessage.textContent = "";
        let calculatedTip = (parseInt(percentageTip.value) / 100) * parseInt(billAmount.value);
        let totalAmount = parseInt(billAmount.value) + calculatedTip;
        tipAmount.value = calculatedTip;
        total.value = totalAmount;
    }
}