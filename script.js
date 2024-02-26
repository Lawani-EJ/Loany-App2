document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.querySelector('input[type="text"]').value;
        var Amount = parseFloat(document.querySelector('input[type="number"]:nth-of-type(2)').value);
        var History = parseFloat(document.querySelector('input[type="number"]:nth-of-type(3)').value);
        var Deposit = new Date(document.querySelector('input[type="date"]:nth-of-type(4)').value);
        var Collection = new Date(document.querySelector('input[type="date"]:nth-of-type(5)').value);
        var Repayment = new Date(document.querySelector('input[type="date"]:nth-of-type(6)').value);
        var Operation = new Date(document.querySelector('input[type="date"]:nth-of-type(7)').value);
        
        if (isNaN(Amount) || isNaN(History) || isNaN(Deposit.getTime()) || isNaN(Collection.getTime()) || isNaN(Repayment.getTime()) || isNaN(Operation.getTime())) {
            alert('PLEASE ENTER THE VALID NUMERIC VALUES FOR THE SEVERAL FIELDS AND VALID DATES FOR DATE FIELDS.');
            return;
        }
        
        var points = 0;
        if (Amount >= 0) {
            points += 10;
        } else {
            points -= 10;
        }
        if (History >=0){
        points += 10; 
        }

        if (Deposit.getTime() === new Date('2024-02-25').getTime()) { 
            points += 5;
        }
        if (Collection.getTime() > new Date('2024-02-25').getTime()) {
            points += 10;
        }
        if (Repayment.getTime() < new Date('2024-02-25').getTime()) {
            points += 5;
        }
        if (Operation.getTime() === new Date('2024-02-25').getTime()) { 
            points += 10;
        } else {
            points += 5; 
        }
        
        if (points >= 30) {
            alert('CONGRATULATIONS! ' + name + ' YOU  ELIGIBLE FOR LOAN OF ' + Amount + ',' + 'AND YOUR PRESENT POINTS ARE  ' + points + ' POINTS.');
        } else {
            alert('SORRY, ' + name + ', YOU ARE NOT ELIGIBLE FOR A LOAN ' + ' YOUR POINTS ARE '  + points + ' POINTS.');
        }
    });
});
