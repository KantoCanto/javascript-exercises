const sumAll = function(int1, int2) {

    let max;
    let min;
    let totalSum;

   if(int2 > int1){
     max = int2;
     min = int1;
   }else{
     max = int1;
     min = int2;
   }

    if(max == min){
        totalSum = min + max;
        return totalSum;
    }else{
        while(max > min){
            totalSum = max + (max-1)
            max = max--;
        }
        return totalSum;
    }
   
};

// Do not edit below this line
module.exports = sumAll;
