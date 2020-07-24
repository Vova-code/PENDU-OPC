import React from 'react'

import './KeyPressed.scss'

export default function computeDisplay(sentence, usedLetters) { 
    return sentence.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_')  )}
