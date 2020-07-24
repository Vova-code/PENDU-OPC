 
function computeDisplay(sentence, usedLetters) { 
  return sentence.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_')  )}

export default computeDisplay