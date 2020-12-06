// Given a string s, return the longest palindromic substring in s.

const longestPalindrome = function(s) {
    let longestWord = s[0];
    let sliceLength = 2;
    while (sliceLength <= s.length) {
        for (let i = 0; i < s.length; i++) {
            let slice = sliceLength + i > s.length ? s.slice(i) : s.slice(i, i + sliceLength)
            if (slice.length < longestWord.length) break
            for (let j = 0; j <= Math.floor(slice.length / 2); j++) {
                if (slice[j] !== slice[slice.length - 1 - j]) {
                    break
                } else {
                    if (j === Math.floor(slice.length / 2)) {
                        if (slice.length > longestWord.length) {
                            longestWord = slice
                        }
                    }
                }
            }
      }
        sliceLength++
    }
      return longestWord;
  };