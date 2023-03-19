//handel bank deposit button

document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText  = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    //update deposit total

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear deposit input box
    depositInput.value = '';


    // handel with withdraw event handler

    document.getElementById('withdraw-button').addEventListener('click',function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;

        const newWithdrawAmount = parseFloat(withdrawAmountText);

        // set withdraw total
        const withdrawTotal =document.getElementById('withdraw-total');
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);

        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        
        withdrawTotal.innerText = newWithdrawTotal;

        //clear withdraw input 
        withdrawInput.value = '';

        //update balance

        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

        balanceTotal.innerText = newBalanceTotal;
    
    });





});
