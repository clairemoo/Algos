function caesarCipherEncryptor(string, key) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      key = key % 26
      let strArr = string.split('');
      for (let i = 0; i < strArr.length; i++) {
          let shiftedIdx = (alphabet.indexOf(strArr[i]) + key) % 26;
              strArr[i] = alphabet[shiftedIdx]
      }
      return strArr.join('');
  }

  function caesarCipherEncryptor2(string, key) {
    let newLetters = [];
      let newKey = key % 26;
      for (let letter of string) {
          newLetters.push(getNewLetter(letter, newKey))
      }
      return newLetters.join('');
  }
  
  function getNewLetter(letter, key) {
      const newLetterCode = letter.charCodeAt() + key;
      return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
  }