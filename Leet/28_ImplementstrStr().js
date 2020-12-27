var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let slice = haystack.slice(i, i + needle.length);
        if (needle === slice) {
            return i;
        }
    }
    
    return -1;
};