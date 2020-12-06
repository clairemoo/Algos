// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function(s) {
    let longestSub = 0;
    for (let i = 0; i < s.length ; i++) {
        let subString = s[i];
        let nextIdx = i + 1;
        while (!subString.includes(s[nextIdx]) && nextIdx <= s.length -1) {
            subString = subString + s[nextIdx]
            nextIdx++; 
        }
        if (subString.length > longestSub) {
            longestSub = subString.length
        }
    }
    return longestSub;
};