const repeatString = function(text, multiplier) {

if(multiplier < 0){
    return "ERROR"
}

let string = "";

for(let i = 0; i < multiplier; i++){
    string += text;
}

return string
    
};

// Do not edit below this line
module.exports = repeatString;
