var canJump = function (nums) {
    let final = nums.length - 1

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= final) {
            final = i
        }
    }


    return final == 0
};