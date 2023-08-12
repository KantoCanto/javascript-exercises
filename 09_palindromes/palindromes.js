const palindromes = function (string) {
  let lowerCase = string.toLowerCase();
  let str = lowerCase.replace(/\s+/g, "");
  str = str.replace(
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g
  );

  let reversed = string.split("").reverse().join("");
  finalReversed = reversed.replace(/\s+/g, "");
  finalReversed = finalReversed.replace(
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g
  );

  if (finalReversed === str) {
    return true;
  } else {
    return false;
  }

  //const palindromes = funcrion (string) {
  //  const processedString = string.toLowerCase().replace();
  //  return processedString.split("").reverse().join("") == processedString;
  // };


  /*
    2 point technique

    let string = "abba"

    function isPalindrome(str) {
        let left =0;
        let right = str.length - 1;

        while(left < right){
            if(str[left] !== str[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }


    */
};

// Do not edit below this line
module.exports = palindromes;
