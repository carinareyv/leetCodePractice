var lengthOfLastWord = function (s) {
  indexOfComma = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
      indexOfComma++;
    } else {
      if (indexOfComma > 0) {
        return indexOfComma;
      }
    }
  }

  return indexOfComma;
};
