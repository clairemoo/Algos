// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

const convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    
    let grid = [];
    for (let i = 0; i < numRows; i++) {
        grid.push([])
    }
    
    let currentRow = 0;
    let currentLetter = 0;
    
    while (currentLetter < s.length) {
        if (currentRow === 0) {
            while (currentRow < grid.length) {
                if (s[currentLetter]) {
                    grid[currentRow].push(s[currentLetter]);
                }  
                currentLetter++;
                currentRow++;    
            }
        } else {
            currentRow--;
            currentRow--;
            while (currentRow > 0) {
                if (s[currentLetter]) {
                    grid[currentRow].push(s[currentLetter]);
                } 
                currentLetter++;
                currentRow--;
            }
        }    
    }
    
    let finalStr = '';
    for (let i = 0; i < grid.length; i++) {
        let currentRow = grid[i]
        for (let j = 0; j < currentRow.length; j++) {
            finalStr = finalStr + currentRow[j]
        }
    }
    
    return finalStr;
    
};