function minimumWaitingTime(queries) {
    let minTotalWaitingTime = 0;
      let runningSum = 0;
      let sortedQueries = queries.sort((a,b) => a-b);
      console.log(sortedQueries)
      
      for (let i = 0; i < sortedQueries.length - 1; i++) {
          runningSum += sortedQueries[i];
          minTotalWaitingTime += runningSum;
      }
      
      return minTotalWaitingTime;
  }