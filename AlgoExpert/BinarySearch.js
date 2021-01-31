function bruteBinarySearch(array, target) {
    let left = 0;
      let right = array.length - 1;
      
      while (left < right) {
          if (array[left] === target) {
              return left
          }
          if (array[right] === target) {
              return right
          }
          left++;
          right--;
      }
      
      return -1;
  }