// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = function(x) {
    if ((x >= 0 && x < 10) ) return true
    if (x < 0 || (x % 10 === 0 && x != 0)) return false
    
    let reverted = 0
    let num = x
    while(num > 0) {
        reverted = reverted * 10 + num % 10
        num = parseInt(num/10)
    }

    return x === reverted
};
