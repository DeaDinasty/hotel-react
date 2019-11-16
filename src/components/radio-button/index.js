import React from 'react'
import PropTypes from 'prop-types'

import './radio-button.scss'

const RadioButton = ({ text, id, name }) => (
  <span className = 'radio-button'>
    <input
      className = 'radio-button__input'
      type = 'radio'
      id = {id}
      name = {name}
    ></input>
    <label
      className = 'radio-button__label'
      htmlFor = {id}
    >
      {text}
    </label>
    <span className = 'radio-button__check'></span>
  </span>
)

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default RadioButton