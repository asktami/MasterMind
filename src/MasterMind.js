function MatchColor(secret, guess) {

  let wellPlacedColors = 0;
  let notWellPlacedColors = 0;

  // ANOTHER WAY, using Map():
  // let guessColors = new Map();
  // let secretColors = new Map();

  // using Object
  let guessColors = {};
  let secretColors = {};

  for (let i = 0; i < secret.length; i++) {

    // ANOTHER WAY, using Map():
    // if(guess[i] === secret[i]) wellPlacedColors++;
    // else {
    //   if (!guessColors.get(guess[i])) guessColors.set(guess[i], 1);
    //   else guessColors[guess[i]]++;
    //   if (!secretColors.get(secret[i])) secretColors.set(secret[i], 1);
    //   else secretColors[secret[i]]++;
    // }

    // for (var key of secretColors.keys()) {
    //   if (guessColors.get(key) > 0) notWellPlacedColors++;
    // }

    // if guess color matches secret color AND position
    if (guess[i] === secret[i]) wellPlacedColors++;
    else {

      // if guess color matches secret color BUT NOT position
      // store guess colors and secret colors (and count occurrence)
      if (guessColors[guess[i]] === undefined) {
        guessColors[guess[i]] = 1;
      } else {
        guessColors[guess[i]]++;
      }
      if (secretColors[secret[i]] === undefined) {
        secretColors[secret[i]] = 1;
      } else {
        secretColors[secret[i]]++;
      }
    }

    // check if guesss contains a secret color
    for (let key in secretColors) {
      if (guessColors[key] > 0) notWellPlacedColors++;
    }
  }

  return [wellPlacedColors, notWellPlacedColors];
}