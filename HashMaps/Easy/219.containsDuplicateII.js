var containsNearbyDuplicate = function (nums, k) {
  var hashMap = new Map();
  var res = false;

  for (var i = 0; i < nums.length; i++) {
    var distinct = nums[i];
    if (hashMap.has(distinct)) {
      if (Math.abs(hashMap.get(distinct) - i) <= k) {
        res = true;
      } else {
        hashMap.set(distinct, i);
      }
    } else {
      hashMap.set(distinct, i);
    }
  }
  return res;
};
