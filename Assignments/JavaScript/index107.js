let firstNumber;
let secondNumber;
let biggerNumber = function(firstNumber, secondNumber){
    if (firstNumber>secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
    } else if (secondNumber > firstNumber) {
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`)
    } else {
    console.log(`Both numbers are ${secondNumber}`)
    }
}
biggerNumber(6, 13);