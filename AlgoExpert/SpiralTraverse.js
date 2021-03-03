function spiralTraverse(array) {
    let spiralArr = [];
      let left = 0;
      let right = array[0].length - 1;
      let top = 0;
      let bottom = array.length - 1;
  
      while (left <= right && top <= bottom) {
          for (let col = left; col <= right; col++) {
              spiralArr.push(array[top][col]);
          }
          for (let row = top + 1; row <= bottom; row++) {
              spiralArr.push(array[row][right]);
          }
          for (let col = right - 1; col >= left; col--) {
              if (top === bottom) break;
              spiralArr.push(array[bottom][col]);
          }
          for (let row = bottom - 1; row > top; row--) {
              if (left === right) break;
              spiralArr.push(array[row][left]);
          }
          left++;
          right--;
          top++;
          bottom--;
      }
      return spiralArr;
  }