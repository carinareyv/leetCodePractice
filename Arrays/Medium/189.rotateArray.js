var rotate = function (nums, k) {

    k = k % nums.length //in case k>nums.length, we might have to iterate 0 times

    nums.reverse()
    rev(nums, 0, k - 1)
    rev(nums, k, nums.length - 1)
    return nums;
};

const rev = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}