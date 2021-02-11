function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b);
      blueShirtHeights.sort((a, b) => a - b);
      
      let shorter; 
      let taller;
      
      if (redShirtHeights[0] < blueShirtHeights[0]) {
          shorter = redShirtHeights;
          taller = blueShirtHeights;
      } else if (blueShirtHeights[0] < redShirtHeights[0]) {
          shorter = blueShirtHeights;
          taller = redShirtHeights;
      }	else {
          return false
      }
      
      for (let i = 0; i < taller.length; i++) {
          if (!(shorter[i] < taller[i])) return false
      }
      
    return true;
  }

  function classPhotosTwo(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a -b);
      blueShirtHeights.sort((a, b) => a - b);
      
      let frontRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
      
      for (let i = 0; i < redShirtHeights.length; i++) {
          const currentRed = redShirtHeights[i];
          const currentBlue = blueShirtHeights[i];
          
          if (frontRow === 'RED') {
              if (currentRed >= currentBlue) return false;
          } else if (currentBlue >= currentRed) return false;
      }
      
    return true;
  }