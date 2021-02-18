function bruteThreeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
      let arrayOfTriplets = [];
      
      for (let i = 0; i < array.length - 2; i++) {
          let currentNum = array[i];
          let remainder = targetSum - currentNum;
          for (let j = i + 1; j < array.length - 1; j++) {
              let secondNum = array[j];
              let thirdNum = remainder - secondNum;
              for (let x = j + 1; x < array.length; x++) {
                  if (array[x] === thirdNum) {
                      arrayOfTriplets.push([currentNum, secondNum, thirdNum]);
                      break;
                  }
              }
          }
      }
      
      return arrayOfTriplets;
  }

  function optimizedThreeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
      const triplets = [];
      
      for (let i = 0; i < array.length - 2; i++) {
          let left = i + 1;
          let right = array.length - 1;
          while (left < right) {
              let currentSum = array[i] + array[left] + array[right];
              if (currentSum === targetSum) {
                  triplets.push([array[i], array[left], array[right]]);
                  left++;
                  right--;
              } else if (currentSum < targetSum) {
                  left++;
              } else if (currentSum > targetSum) {
                  right--;
              } 
          }
      }
      return triplets;
  }