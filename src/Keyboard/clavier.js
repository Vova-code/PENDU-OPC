import React, { Component } from 'react';

import './_clavier.scss'

import Touch from './touch'


class Clavier extends Component {

  handleLetterClick = (touch) => {
    console.log(touch)
    return touch
  }
    
  render() {
    const alphabet = ['A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N']

    return (
      <div className="clavier" >
          {
            alphabet.map((letters) => (
              <Touch
              letter={letters}
              key={letters}
              onClick={() => this.handleLetterClick(letters)}
              />
            ))
          }
      </div>
    )
  }
}

export default Clavier