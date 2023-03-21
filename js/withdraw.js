document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalPreviousString = withdrawTotalElement.innerText;
    const withdrawTotalPrevious = parseFloat(withdrawTotalPreviousString);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = withdrawTotalPrevious + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentNewBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentNewBalanceTotal;


})