var reverseWords = function (s) {
  if (s.lenght == 1) {
    return s;
  }
  var res = "";
  var splitStr = s.split(" ");

  for (var i = splitStr.length - 1; i >= 0; i--) {
    if (splitStr[i].length == 0) {
      continue;
    } else {
      if (res.length == 0) {
        res += splitStr[i];
      } else {
        res += " " + splitStr[i];
      }
    }
  }

  return res;
};
