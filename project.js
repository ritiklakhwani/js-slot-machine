// 1. deposit money
// 2. enter number of lines you want to bet on 
// 3. spin it 
// 4. check if user Won 
// 5. give the user prize money
// 6. play again 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
};

const SYMBOL_VALUE = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
};

const deposit = () => {
    while (true) {
    const depositAmount = prompt("enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("invalid deposit amount try again. ");
    } else {
        return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3 ){
            console.log(" invalid number of lines, select from (1-3) :) ");
        } else {
            return numberOfLines;
        }
      }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("enter the bet per line : ");
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log(" invalid bet, try again :( ");
        } else {
            return numberBet;
        }
      }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries (SYMBOLS_COUNT)){
        
        for(i = 0 ; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[],[],[]];
    for (let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
