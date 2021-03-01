function selectionSort(array) {
    let sortedIdx = 0;
      while (sortedIdx < array.length - 1) {
          let smallestIdx = sortedIdx;
          for (let i = sortedIdx + 1; i < array.length; i++) {
              if (array[i] < array[smallestIdx]) {
                  smallestIdx = i;
              }
          }
          swap(sortedIdx, smallestIdx, array);
          sortedIdx++;
      }
      return array;
  }
  
  function swap(i, j, array) {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }