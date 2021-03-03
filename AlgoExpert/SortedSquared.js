function sortedSquaredArray(array) {
    let squaredArr = array.map(num => num*num);
      return squaredArr.sort((a, b) => a - b)
  }