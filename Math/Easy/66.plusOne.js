var plusOne = function (digits) {
  var i = digits.length - 1;
  if (digits.length == 1 && digits[i] == 9) {
    digits[digits.length - 1] = 0;
    digits.unshift(1);
    return digits;
  }
  while (i >= 0 && digits[i] == 9) {
    digits[i] = 0;
    i--;
  }

  if (i >= 0) {
    digits[i] = digits[i] + 1;
  } else {
    digits.unshift(1);
  }

  return digits;
};
