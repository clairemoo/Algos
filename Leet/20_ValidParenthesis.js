var isValid = function(s) {
    const matches = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    let array = s.split('')
    let queue = [];
    
    while (array.length) {
        if (matches[array[0]]) {
            queue.push(array.shift());
        } else {
            const match = matches[queue[queue.length - 1]];
            if (queue.length && array[0] === match) {
                queue.pop();
                array.shift();
            } else {
                return false;
            }
        }
    }
    if (!queue.length) {
     return true;   
    } else {
        return false
    }
};