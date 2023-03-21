document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositfield = document.getElementById('deposit-field');
    const newDepositAmountString = depositfield.value;
    const newDepositAmount = parseFloat(newDepositAmountString);



    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalPreviousString = depositTotalElement.innerText;
    const depositTotalPrevious = parseFloat(depositTotalPreviousString);

    const currentDepositTotal = newDepositAmount + depositTotalPrevious;



    depositTotalElement.innerText =currentDepositTotal;
    

    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);


    const currentBalanceTotal = previousBalanceTotal+newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;

    
    depositfield.value='';


})