var twoSum = function (nums, target) {
  var res = [];
  var hashNumbers = new Map();
  for (var i = 0; i < nums.length; i++) {
    var num1 = nums[i];
    var num2 = target - num1;
    if (hashNumbers.has(num2)) {
      res = [i, hashNumbers.get(num2)];
    } else {
      hashNumbers.set(num1, i);
    }
  }

  return res;
};
