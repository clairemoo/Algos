function bubbleSort1(array) {
    for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array.length - 1; j++) {
              if (array[j] > array[j + 1]) {
                  let temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp
              }
          }
      }
  
      return array;
  }

function optimalBubbleSort(array) {
    let isSorted = false;
      let right = 0;
      while (!isSorted) {
          isSorted = true;
          for (let i = 0; i < array.length - 1 - right; i++) {
              if (array[i] > array[i + 1]) {
                  swap(i, i + 1, array);
                  isSorted = false;
              }
          }
          right++;
      }
      return array;
  }
  
function swap(i, j, array) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }