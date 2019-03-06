function alphabeticShift(inputString) {
  // We'll use charcodeat to get where we want to go
  function shiftLetterByOne(acc, letter) {
    return letter === "z"
      ? acc + "a"
      : acc + String.fromCharCode(letter.charCodeAt(0) + 1);
  }
  return inputString.split("").reduce(shiftLetterByOne, "");
}

console.log(alphabeticShift("crazy"));
/*
Given a string, replace each of its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string inputString

    Non-empty string consisting of lowercase English characters.

    Guaranteed constraints:
    1 ≤ inputString.length ≤ 1000.

    [output] string
        The result string after replacing all of its characters.
*/
