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