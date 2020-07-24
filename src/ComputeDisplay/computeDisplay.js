 
function computeDisplay(sentence, usedLetters) { 
  return sentence.replace(/\w/g, (letter) => (usedLetters.set(letter) ? letter : '_')  )}

export default computeDisplay