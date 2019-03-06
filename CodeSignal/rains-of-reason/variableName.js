function variableName(name) {
  if (name[0].match(/[0-9]/)) {
    return false;
  } else {
    return !name.match(/\W/);
  }
}

console.log(variableName("var_1__Int"));
console.log(variableName("2s2"));
/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

    For name = "var_1__Int", the output should be
    variableName(name) = true;
    For name = "qq-q", the output should be
    variableName(name) = false;
    For name = "2w2", the output should be
    variableName(name) = false.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string name

    Guaranteed constraints:
    1 ≤ name.length ≤ 10.

    [output] boolean
        true if name is a correct variable name, false otherwise.
*/
