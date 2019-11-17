import React from 'react'
import PropTypes from 'prop-types'

import './toggle-button.scss'

const ToggleButton = ({ text, id, onClick }) => (
  <span className = 'toggle-button'>
    <input type = 'checkbox' className = 'toggle-button__checkbox' id = {id} />
    <span className = 'toggle-button__slider'></span>
    <label 
      className = 'toggle-button__label' 
      htmlFor = {id}
      onClick = {onClick} 
    >
      {text}
    </label>
  </span>
)

ToggleButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ToggleButton