var majorityElement = function (nums) {
  var majority = nums[0];
  var counter = 0;

  for (i = 0; i < nums.length; i++) {
    if (counter == 0) {
      majority = nums[i];
    }
    if (nums[i] == majority) {
      counter++;
    } else {
      counter--;
    }
  }
  return majority;
};
