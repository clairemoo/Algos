function runLengthEncoding(string) {
	let encodedArr = [];
  let currentLetter = string[0];
	let count = 1;
	for (let i = 1; i < string.length; i++) {
		if (string[i] !== currentLetter || count === 9) {
			encodedArr.push(count.toString() + currentLetter);
			currentLetter = string[i];
			count = 1;
		} else {
			count++;
		}
	}
	encodedArr.push(count.toString() + currentLetter);
	return encodedArr.join('');
}