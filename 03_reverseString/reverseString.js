//split() method splits a string object into an array of strings by separating the string into sub strings
//reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first
//join() method joins all elements of an array into a string

const reverseString = function(string) {
    
    let stringToArray = string.split("");
    let reverseString = stringToArray.reverse();
    let result = reverseString.join("");

    return result

};

// Do not edit below this line
module.exports = reverseString;
