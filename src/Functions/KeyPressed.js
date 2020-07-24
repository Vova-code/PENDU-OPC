import React from 'react'

import Touch from '../Keyboard/clavier'

import './KeyPressed.scss'

export default function KeyPressed( clavier ) {
let instantKeyPressed = this.handleLetterClick(Touch)

    return (
        <div className="toto">
            {instantKeyPressed}
        </div>
    )
}