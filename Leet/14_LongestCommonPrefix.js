// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }
    let longestCommonPrefix = '';
    let index = 0;
    let isBroken = false;
    while (strs[0][index]) {
        let currentLetter = strs[0][index];
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][index] !== currentLetter) {
                isBroken = true;
                break
            }
        }
        if (isBroken) {
            break
        } else {
        longestCommonPrefix += currentLetter;
        index++;
        }
    }
    return longestCommonPrefix;
};