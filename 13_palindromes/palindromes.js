const palindromes = function (str) {
  let cleanedString = str.toLowerCase().replace(/[\W_]/g, "");
  let reversedString = cleanedString.split("").reverse().join("");

  console.log(cleanedString);
  console.log(reversedString);

  if (reversedString === cleanedString) {
    console.log("Palindrome");
    return true;
  } else {
    console.log("Not a palindrome");
    return false;
  }
};

palindromes("r3ace3car");

palindromes("I am a string! With spaces and @special characters...");
// Do not edit below this line
module.exports = palindromes;
