// 1. deposit money
// 2. enter number of lines you want to bet on 
// 3. spin it 
// 4. check if user Won 
// 5. give the user prize money
// 6. play again 

const prompt = require("prompt-sync")();

function deposit() {
    while (true) {
    const depositAmount = prompt("enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("invalid deposit amount try again. ");
    } else {
        return numberDepositAmount;
    }
  }
}

const depositAmount = deposit();
console.log(depositAmount);