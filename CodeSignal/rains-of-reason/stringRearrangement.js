function stringsRearrangement(inputArray) {
  // Helper function
  const getNumOfDiff = (str1, str2) => {
    let ret = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        ret += 1;
      }
    }
    return ret;
  };

  // Main
  let sortedArr = [...inputArray];
  sortedArr.sort();
  console.log("sortedArr:", sortedArr);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    const numOfDiff = getNumOfDiff(sortedArr[i], sortedArr[i + 1]);
    console.log("--numOfDiff:", numOfDiff);
    if (numOfDiff !== 1) {
      return false;
    }
  }

  return true;
}

// console.log(['bb', 'aa', 'ab'])

/*
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

    For inputArray = ["aba", "bbb", "bab"], the output should be
    stringsRearrangement(inputArray) = false.

    There are 6 possible arrangements for these strings:
        ["aba", "bbb", "bab"]
        ["aba", "bab", "bbb"]
        ["bbb", "aba", "bab"]
        ["bbb", "bab", "aba"]
        ["bab", "bbb", "aba"]
        ["bab", "aba", "bbb"]

    None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

    For inputArray = ["ab", "bb", "aa"], the output should be
    stringsRearrangement(inputArray) = true.

    It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.string inputArray

    A non-empty array of strings of lowercase letters.

    Guaranteed constraints:
    2 ≤ inputArray.length ≤ 10,
    1 ≤ inputArray[i].length ≤ 15.

    [output] boolean
        Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).

*/
