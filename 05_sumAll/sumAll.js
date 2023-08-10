const sumAll = function(int1, int2) {
  
  //check to see if parameters given are integer numbers. if any of them isn't, return error
  if(!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";

  //check if any of them is lower than zero. if so return error
  if(int1 < 0 || int2 <0) return "ERROR";

  let sum = 0;

  //attributes max and min to the respective numbers
  let max = Math.max(int1, int2);
  let min = Math.min(int1, int2);
  
  if(max != min){

    //starting with the min number, we add the rest of the numbers to it, 1 by 1, until we reach max
    for(let i = min; i <= max; i++){
      sum += i;
    }
    return sum;
  }else if(min == max){
    sum = min + max;
    return sum;
  }

};

// Do not edit below this line
module.exports = sumAll;
