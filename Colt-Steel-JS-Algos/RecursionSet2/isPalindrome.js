function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  // Cases
  const firstLastLettersMatch = str[0] === str[str.length - 1];
  const isStrTerminalLength = str.length <= 1;
  // Base Case
  if (isStrTerminalLength) return true;
  return firstLastLettersMatch ? isPalindrome(str.substring(1, str.length - 1)) : false;
}

const testFunc = isPalindrome;
const args = [
    ['awesome', false], 
    ['foobar', false], 
    ['tacocat', true], 
    ['amanaplanacanalpanama', true],
    ['amanaplanacanalpandemonium', false],
];

const tester = require('./tester');
tester(testFunc, args);