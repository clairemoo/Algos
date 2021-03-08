var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestToTarget = nums[0] + nums[1] + nums[2];
    let smallestDistanceToTarget = Math.abs(target - closestToTarget);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let distanceToTarget = Math.abs(target - sum)
            if (distanceToTarget < smallestDistanceToTarget) {
                closestToTarget = sum;
                smallestDistanceToTarget = distanceToTarget;
            }    
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else {
                return target
            }
        }
    }
    return closestToTarget;
};