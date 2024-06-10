var isHappy = function (n) {
  var hashHappy = new Map();
  while (n != 1) {
    var process = 0;
    var current = n;
    while (current != 0) {
      process += (current % 10) ** 2;
      current = Math.floor(current / 10);
    }
    if (hashHappy[process]) {
      return false;
    }

    hashHappy[process] = true;
    n = process;
  }

  return true;
};
