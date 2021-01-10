

function twoNumberSum(array, targetSum) {
    let sumNums = [];
      for (let i = 0; i < array.length; i++) {
          let currentNum = array[i];
          for (let j = i + 1; j < array.length; j++) {
              if (currentNum + array[j] === targetSum) {
                  sumNums.push(currentNum);
                  sumNums.push(array[j]);
                  break;
              }
          }
      }
      return sumNums;
  }

  function variationTwoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
          const firstNum = array[i];
          for (let j = i + 1; j < array.length; j++) {
              const secondNum = array[j];
              if (firstNum + secondNum === targetSum) {
                  return [firstNum, secondNum]
              }
          }
      }
      return [];
  }