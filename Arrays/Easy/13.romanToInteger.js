var romanToInt = function (s) {
  var ret = 0;
  for (i = 0; i < s.length; i++) {
    let prev = s[i - 1];
    switch (s[i]) {
      case "I":
        ret += 1;
        break;
      case "V":
        ret = prev == "I" ? ret + 3 : ret + 5;
        break;
      case "X":
        ret = prev == "I" ? ret + 8 : ret + 10;
        break;
      case "L":
        ret = prev == "X" ? ret + 30 : ret + 50;
        break;
      case "C":
        ret = prev == "X" ? ret + 80 : ret + 100;
        break;
      case "D":
        ret = prev == "C" ? ret + 300 : ret + 500;
        break;
      case "M":
        ret = prev == "C" ? ret + 800 : ret + 1000;
        break;
      default:
        ret = 0;
    }
  }
  return ret;
};
