var mySqrt = function (x) {
  var ret = 0;
  var sqrt = 0;
  for (var i = 0; i <= x; i++) {
    if (i * i == x) {
      sqrt = i;
      return Math.floor(sqrt);
    } else if (i * i > x) {
      sqrt = i - 1;
      return Math.floor(sqrt);
    }
  }
};
