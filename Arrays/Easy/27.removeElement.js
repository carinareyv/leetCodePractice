var removeElement = function (nums, val) {
  var start = 0;
  for (var second = 0; second < nums.length; second++) {
    if (nums[second] != val) {
      nums[start] = nums[second];
      start++;
    }
  }

  return start;
};
