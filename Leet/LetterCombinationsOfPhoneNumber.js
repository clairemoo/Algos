var letterCombinations = function(digits) {
    if (!digits.length) return [];
    let combinations = [];
    let digitLetters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    
    function permuteString(string, index) {
        if (index === digits.length) {
            combinations.push(string);
            return;
        }
        for (let letter of digitLetters[digits[index]]) {
            permuteString(string + letter, index + 1)
        }
    }
    
    permuteString('', 0);
    return combinations;
};