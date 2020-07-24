import React from 'react';
import PropTypes from 'prop-types'

import './_touch.scss'

const Touch = ({ letter, onClick }) => <div className="keyboardTouch" value={letter} onClick={onClick} >{letter}</div>

Touch.propTypes = {
    letter: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Touch