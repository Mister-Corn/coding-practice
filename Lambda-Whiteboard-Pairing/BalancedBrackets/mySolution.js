function balancedBrackets(str) {
  /* We'll use a stack to solve this problem.
   * We'll iterate through the string. Whenever we come across a left
   * bracket, we'll put it's corresponding right bracket in the stack.
   * When we encounter a right bracket, we'll pop the stack and compare
   * the popped element with the current one.
   * If they're different, it's false
   * If there's anything left on the stack after the loop, it's false
   * Otherwise, it's true
   */
  let stack = [];
  const leftBrackets = ["[", "{", "("];
  const rightBrackets = ["]", "}", ")"];

  for (const char of str) {
    if (leftBrackets.includes(char)) {
      // Push corresponding right bracket to stack
      const index = leftBrackets.indexOf(char);
      stack.push(rightBrackets[index]);
    } else if (rightBrackets.includes(char)) {
      // Pop stack and compare popped element with char
      const poppedElem = stack.pop();
      if (char !== poppedElem) {
        return false;
      }
    }
  }

  // Return true if the stack is empty
  return stack.length === 0;
}

// Tests
// Below should return true
balancedBrackets("[]{}()"); //?
// Below should return true
balancedBrackets("[{[()]}]"); //?
// Below should return false
balancedBrackets("[({}}]"); //?
console.log(balancedBrackets("{}[]()")); // should print true
console.log(balancedBrackets("{(([]))}")); // should print true
console.log(balancedBrackets("{ [ ] ( ) }")); // should print true
console.log(balancedBrackets("{ [ ( ] ) }")); // should print false
console.log(balancedBrackets("(")); // should print false
console.log(balancedBrackets("{[}")); // should print false
