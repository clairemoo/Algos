function generateDocument(characters, document) {
	let letters = characters.split('');
  for (let i = 0; i < document.length; i++) {
		let currentLetter = document[i];
		if (letters.includes(currentLetter)) {
			let indexOfLetter = letters.indexOf(currentLetter);
			letters.splice(indexOfLetter, 1);
		} else {
			return false;
		}
	}
	return true;
}

function generateDocument2(characters, document) {
	for (let char of document) {
		let frequencyInDocument = countFrequency(char, document);
		let frequencyInCharacters = countFrequency(char, characters);
		if (frequencyInDocument > frequencyInCharacters) return false;
	}
	return true;
}

function countFrequency(character, string) {
	let frequency = 0;
	for (let char of string) {
		if (char === character) {
			frequency++
		}
	}
	return frequency;
}