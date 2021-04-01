var moveZeroes = function(nums) {
    let i = 0; 
    let numZeroes = 0;
    while (i < nums.length - numZeroes) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            numZeroes++;
        } else {
            i++
        }
    }
    return nums;
};