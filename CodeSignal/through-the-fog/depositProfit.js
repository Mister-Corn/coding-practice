// Naive
function depositProfitNaive(deposit, rate, threshold) {
  const decimalRate = rate / 100 + 1;
  let currentMoney = deposit;
  let yearsElapsed = 0;

  while (true) {
    if (currentMoney >= threshold) {
      return yearsElapsed;
    }
    currentMoney *= decimalRate;
    yearsElapsed += 1;
  }
}

// Maybe better
function depositProfit(deposit, rate, threshold) {
  /*  Let's say the amount after some time of compound interest is
   *  threshold = deposit(1 + rate)^years
   *  (https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php)
   *
   *  Thanks to https://www.youtube.com/watch?v=M6f6dANVyxA, we'll transpose
   *  equation to:
   *  years = ln(threshold / deposit) / ln(1 + rate)
   */
  const decimalRate = rate / 100;
  const result = Math.log(threshold / deposit) / Math.log(1 + decimalRate);
  // We can't have partial years as an answer, so we'll Math.ceil the result
  return Math.ceil(result);
}

/*
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example

For deposit = 100, rate = 20, and threshold = 170, the output should be
depositProfit(deposit, rate, threshold) = 3.

Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:

    year 0: 100;
    year 1: 120;
    year 2: 144;
    year 3: 172.8.

Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.
*/
