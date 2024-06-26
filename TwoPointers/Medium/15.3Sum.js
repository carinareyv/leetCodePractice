var threeSum = function (nums) {


    if (!nums || nums.length < 3) {
        return [];
    }

    nums = nums.sort((a, b) => a - b);

    let res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;


        while (left < right) {
            if (nums[left] + nums[right] + nums[i] === 0) {

                res.push([nums[left], nums[right], nums[i]]);
                while (nums[left] == nums[left + 1]) left++
                while (nums[right] == nums[right - 1]) right--
                left++;
                right--;
            } else if (nums[left] + nums[right] + nums[i] < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};