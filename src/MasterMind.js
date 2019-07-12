function MatchColor(secret, guess) {
  var wellPlacedColors = 0;
  var notWellPlacedColors = 0;
  var guessColors = new Map();
  var secretColors = new Map();

  for(let i = 0; i < secret.length; i++) {

    if(guess[i] === secret[i]) wellPlacedColors++;
    else {
      if (!guessColors.get(guess[i])) guessColors.set(guess[i], 1);
      else guessColors[guess[i]]++;
      if (!secretColors.get(secret[i])) secretColors.set(secret[i], 1);
      else secretColors[secret[i]]++;
    }
  }


for(var key of secretColors.keys()) {
  if (guessColors.get(key) > 0) notWellPlacedColors++;
}

  return [wellPlacedColors, notWellPlacedColors];
}
