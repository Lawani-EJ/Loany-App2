document.addEventListener("DOMContentLoaded", function(_calculate_loan) {

    document.querySelector('form').addEventListener('submit', function(_calculate_loan) {
        _calculate_loan.preventDefault()


        var name = document.querySelector('input[type="text"]').value;
        var Amount = parseFloat(document.querySelector('input[type="number"]:nth-of-type(2)').value);
        var History = parseFloat(document.querySelector('input[type="number"]:nth-of-type(3)').value);
        var Deposit = new Date(document.querySelector('input[type="date"]:nth-of-type(4)').value);
        var Collection = new Date(document.querySelector('input[type="date"]:nth-of-type(5)').value);
        var Repayment = new Date(document.querySelector('input[type="date"]:nth-of-type(6)').value);
        var Operation = new Date(document.querySelector('input[type="date"]:nth-of-type(7)').value);
 
        if (!name.trim() || isNaN(Amount) || isNaN(History) || isNaN(Deposit.getTime()) || isNaN(Collection.getTime()) || isNaN(Repayment.getTime()) || isNaN(Operation.getTime())) {
        alert('PLEASE ENTER THE VALID NUMERIC VALUES FOR THE SEVERAL FIELDS AND VALID DATES FOR DATE FIELDS.');
        return;
         }
        
        let points = 0;

        if (Amount >= 0) {
            points += 10;
        } else {
            points -= 10;
        }
        if (History >=0){
        points += 10; 
        }


        let lastDepositDate=Deposit.getMonth() - new Date().getMonth();
        let collectionDate= Collection.getMonth()  - new Date().getMonth();
        let repaymentDate= Repayment.getMonth() - new Date().getMonth();
        let peration= Operation.getMonth() - new Date().getMonth();

        console.log(lastDepositDate);
        console.log(collectionDate);
        console.log(repaymentDate);
        console.log(peration);

        if (lastDepositDate == 0) { 
            points += 5;
        }
        if (collectionDate > 6){
            points += 10;
        }
        if (repaymentDate < 6) {
            points += 5;
        }

        if (Operation.getTime() === new Date().getTime()) { 
        points += 10;
        } else {
        points += 5; 
        }

        console.log(points);

        
        if (points >= 30) {
            alert('CONGRATULATIONS! ' + name + ' YOU  ELIGIBLE FOR LOAN OF ' + Amount + ',' + 'AND YOUR PRESENT POINTS ARE  ' + points + ' POINTS.');
        } else {
            alert('SORRY, ' + name + ', YOU ARE NOT ELIGIBLE FOR A LOAN ' + ' YOUR POINTS ARE '  + points + ' POINTS.');
        }
    });
});
