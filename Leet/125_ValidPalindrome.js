var isPalindrome = function(s) {
    let newS = s.replace(/[^a-zA-Z0-9]/g, '');
    let lowerS = newS.toLowerCase();
    
    let p1 = 0;
    let p2 = lowerS.length - 1;
    while (p1 < p2) {
        if (lowerS[p1] !== lowerS[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
};
