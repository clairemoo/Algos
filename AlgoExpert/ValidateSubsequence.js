function isValidSubsequence(array, sequence) {
    let p1 = 0;
      let p2 = 0;
      
      while (p1 < sequence.length) {
          if (p2 > array.length) {
              return false
          }
          if (sequence[p1] === array[p2]) {
              p1++;
              p2++
          } else {
              p2++
          }
      }
      
      return true
  }