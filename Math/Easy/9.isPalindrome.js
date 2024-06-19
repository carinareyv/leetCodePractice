var isPalindrome = function (x) {
  var saved = x;

  var reverseNumber = 0;
  while (x > 0) {
    var firstDigit = x % 10;
    reverseNumber = reverseNumber * 10 + firstDigit;
    x = Math.floor(x / 10);
  }
  return saved == reverseNumber;
};
