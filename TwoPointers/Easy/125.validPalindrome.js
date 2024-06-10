var isPalindrome = function (s) {
  var u = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  var start = 0;
  var end = u.length - 1;
  if (u.length < 2) {
    return true;
  }

  while (start < end) {
    if (u[start] == u[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};
