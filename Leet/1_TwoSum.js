//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function(nums, target) {
    let sumNumsIdx = [];
    let memo = {}
    for (let i = 0; i < nums.length; i++) {
        let completer = target - nums[i];
        if (memo[completer]) {
            sumNumsIdx.push(i);
            sumNumsIdx.push(memo[completer]);
        } else {
        memo[nums[i]] = i
        }    
    }
    return sumNumsIdx;
};