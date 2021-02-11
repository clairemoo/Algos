function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	
	let changeWeCanCreate = 0;
	for (const coin of coins) {
		if (coin > changeWeCanCreate + 1) return changeWeCanCreate + 1;
		
		changeWeCanCreate += coin;
	}
	
  return changeWeCanCreate + 1;
}