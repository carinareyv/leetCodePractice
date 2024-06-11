var productExceptSelf = function (nums) {
  var product = [];
  var left = [];
  var right = [];
  left[0] = 1;
  for (var i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[nums.length - 1] = 1;
  for (var i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (var i = 0; i < nums.length; i++) {
    product[i] = left[i] * right[i];
  }
  return product;
};
