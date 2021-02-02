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

  function betterBinarySearch(array, target) {
    return searcher(array, 0, array.length - 1, target);
  }
  
  function searcher(array, left, right, target) {
      if (left > right) return -1;
      let middle = Math.floor((right + left) / 2);
      let potentialMatch = array[middle];
      if (target === potentialMatch) {
          return middle;
      } else if (target < potentialMatch) {
          return searcher(array, left, middle - 1, target)
      } else {
          return searcher(array, middle + 1, right, target)
      }
  }

  function binarySearchWithWhile(array, target) {
    let left = 0;
      let right = array.length - 1;
      
      while (left <= right) {
          const middle = Math.floor((left + right) / 2);
          const potentialMatch = array[middle];
          if (array[middle] === target) {
              return middle
          } else if (target < potentialMatch) {
              right = middle - 1;
          } else {
              left = middle + 1
          }
      }
      
      return -1;
  }