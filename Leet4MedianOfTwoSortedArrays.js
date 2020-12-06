// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = function(nums1, nums2) {
    let combined = [...nums1, ...nums2]
    let sorted = combined.sort((a,b) => a-b)
    console.log(sorted)
    if ((sorted.length % 2) === 0) {
        let added = sorted[sorted.length/2 - 1] + sorted[sorted.length/2];
        return added / 2
    } else {
        return sorted[Math.floor(sorted.length / 2)]
    }
};