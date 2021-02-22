function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);
      let smallestDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
      let nums = [arrayOne[0], arrayTwo[0]];
      let p1 = 0;
      let p2 = 0;
      
      while (p1 < arrayOne.length && p2 < arrayTwo.length) {
          let difference = Math.abs(arrayOne[p1] - arrayTwo[p2]);
          if (difference < smallestDiff) {
              smallestDiff = difference;
              nums = [arrayOne[p1], arrayTwo[p2]];
          }	
          if (arrayOne[p1] < arrayTwo[p2]) {
              p1++
          } else {
              p2++
          }
      }
      
      return nums;
  }
  