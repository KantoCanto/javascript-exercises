const fibonacci = function(number) {

    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    
    //give the initial 2 values of the sequence
    let firstNumber = 1;
    let secondNumber = 1;

    //i=2, so it starts in the 3rd position of the sequence, given that we already 
    //provided the first 2 values ( 0 and 1)
    for(let i = 2; i <= number; i++){

        let current = firstNumber + secondNumber;

        secondNumber = firstNumber;
        firstNumber = current;
       
    }

    return secondNumber;

};

// Do not edit below this line
module.exports = fibonacci;
