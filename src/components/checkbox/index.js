import React from 'react'
import PropTypes from 'prop-types'

import './checkbox.scss'

const Checkbox = ({ text, id, checked }) => (
  <label className = 'checkbox' htmlFor = {id}>
    {text}
    <input 
      className = 'checkbox__input'
      type = 'checkbox' 
      id = {id} 
      checked = {checked}
    >
    </input>
    <span className = 'checkbox__checkmark'></span>
  </label>
)

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
}

export default Checkbox