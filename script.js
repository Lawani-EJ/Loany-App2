document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var name = document.querySelector('input[type="text"]').value;
        var currentAmount = parseFloat(document.querySelector('input[type="number"]:nth-of-type(2)').value);
        var creditHistory = parseFloat(document.querySelector('input[type="number"]:nth-of-type(3)').value);
        var lastDepositDate = parseFloat(document.querySelector('input[type="number"]:nth-of-type(4)').value);
        var lastLoanCollectionDate = parseFloat(document.querySelector('input[type="number"]:nth-of-type(5)').value);
        var loanRepaymentPeriod = parseFloat(document.querySelector('input[type="number"]:nth-of-type(6)').value);
        var lastOperationOnAccount = parseFloat(document.querySelector('input[type="number"]:nth-of-type(7)').value);
        
        if (isNaN(currentAmount) || isNaN(creditHistory) || isNaN(lastDepositDate) || isNaN(lastLoanCollectionDate) || isNaN(loanRepaymentPeriod) || isNaN(lastOperationOnAccount)) {
            alert('Please enter valid numeric values for all fields.');
            return;
        }
        
        var points = 0;
        if (currentAmount >= 0) {
            points += 10;
        } else {
            points -= 10;
        }
        points += 10; 
        if (lastDepositDate === 1) { 
            points += 5;
        }
        if (lastLoanCollectionDate > 6) {
            points += 10;
        }
        if (loanRepaymentPeriod < 6) {
            points += 5;
        }
        if (lastOperationOnAccount === 1) { 
            points += 10;
        } else {
            points += 5; 
        }
        
        if (points >= 30) {
            alert('Congratulations! '+ name + 'You are eligible for a loan.');
        } else {
            alert('Sorry,' + name + 'you are not eligible for a loan.');
        }
    });
});
