function caesarCipherEncryptor(string, key) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      key = key % 26
      let strArr = string.split('');
      for (let i = 0; i < strArr.length; i++) {
          let shiftedIdx = alphabet.indexOf(strArr[i]) + key;
          if (shiftedIdx >= alphabet.length) {
              shiftedIdx = shiftedIdx - alphabet.length;
          }
              strArr[i] = alphabet[shiftedIdx]
      }
      return strArr.join('');
  }