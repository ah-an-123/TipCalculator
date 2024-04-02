let btn = document.getElementById("btn");
let amount = document.getElementById("amount");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
btn.addEventListener('click', () => {
    event.preventDefault();
    let amountValue = parseInt(amount.value);
    let tipPercentage = parseInt(tip.value);
    tipGiven = amountValue * tipPercentage / 100;
    totalAmount = amountValue + tipGiven;
    if (!totalAmount) {
        total.innerText = "$" + 0;
    }
    else {
        total.innerText = "$" + totalAmount;
    }
})