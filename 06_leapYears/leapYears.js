const leapYears = function(year) {

    //is divisible by 4
    if(year % 4 == 0){
        console.log("divisible by 4");
          //divisible by 100 are not leapYears UNLESS they are also divisible by 400
        if(year % 100 == 0){
            if(year % 400 == 0){
                return true;
            }else if(year % 400 != 0 ){
                return false;
            }
        }else{
           return true;
        }
    }
    else{
        return false;
    };

  

};

// Do not edit below this line
module.exports = leapYears;
