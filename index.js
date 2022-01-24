function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here

  if the input is the same as reversed input
    return true
  else
    false
*/

/*
  Add written explanation of your solution here

  input must be stricly equal reversed input
  use split('') method to return new array
  use reverse() method to reverse new created array
  use join('') method to join all elements of the array into a string
  use if else to check if input === reversed input

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
