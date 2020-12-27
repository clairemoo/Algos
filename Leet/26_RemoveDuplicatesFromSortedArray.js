var removeDuplicates = function(nums) {
    const memo = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) {
            nums.splice(i, 1);
            i--;
        } else {
            memo[nums[i]] = true;
        }
    }
    
    return nums.length;
};