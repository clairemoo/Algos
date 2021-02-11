function tournamentWinner(competitions, results) {
	let memo = {};
	let teamWithMostPoints = '';
	let highestScore = 0;
	
	for (let i = 0; i < competitions.length; i++) {
		let winner = results[i] === 0 ? competitions[i][1] : competitions[i][0]
			if (memo.hasOwnProperty(winner)) {
				memo[winner]++
			} else {
				memo[winner] = 1;
			}
	}
	
	for (let team in memo) {
		if (memo[team] > highestScore) {
			highestScore = memo[team];
			teamWithMostPoints = team;
		}
	}
	
	return teamWithMostPoints;
}