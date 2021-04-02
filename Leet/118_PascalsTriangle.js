var generate = function(numRows) {
    let result = [];
    for (let i = 1; i <= numRows; i++) {
        let array = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                array.push(1);
            } else {
                array.push(result[i - 2][j - 1] + result[i - 2][j]);
            }    
        }
        result.push(array);
    }
    return result;
};