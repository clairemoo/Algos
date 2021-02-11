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