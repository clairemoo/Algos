var lengthOfLastWord = function(s) {
    let lengthLongestWord = 0;
    let reachedAWord = false;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            lengthLongestWord++;
            reachedAWord = true;
        } else if (reachedAWord) {
            break
        }
    }
    return lengthLongestWord;
};