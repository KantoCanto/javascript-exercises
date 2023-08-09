const removeFromArray = function(array, ...args) {

    //new array that will save the new items
     const newArray = [];

     //forEach goes through every item inside of the array
     array.forEach((item) => {

        //if the arguments and the original array items don't match, push those 
        //to he new array
        if (!args.includes(item)) {
            newArray.push(item)
        }
     });

     //return that array
     return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
