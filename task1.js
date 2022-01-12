let number1 = 5;
let number2 = 10;
let number3 = 15;

function getSum1(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(getSum1(number1, number2, number3));

function getSum2() {
    var numberArray = Array.prototype.slice.call(arguments);

    return numberArray.reduce(function (previousNumber, currentNumber) {
            return previousNumber + currentNumber;
        }
    );
}

console.log(getSum2(number1, number2, number3, 45, 55));
