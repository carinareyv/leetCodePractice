var longestCommonPrefix = function (strs) {
  var sorted = strs.sort();
  var result = "";
  var first = sorted[0];
  var last = sorted[sorted.length - 1];

  for (i = 0; i < first.length; i++) {
    const character = first[i];

    for (j = 0; j < sorted.length; j++) {
      if (sorted[j][i] != character) {
        return result;
      }
    }

    result += character;
  }

  return result;
};
