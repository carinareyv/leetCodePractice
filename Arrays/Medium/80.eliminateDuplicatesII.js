var removeDuplicates = function (nums) {
  let j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 2]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
