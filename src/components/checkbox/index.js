import React from 'react'
import PropTypes from 'prop-types'

import './checkbox.scss'

const Checkbox = React.memo(function Checkbox({ text, id, checked, onChange }) { 
  return (
    <label className = 'checkbox' htmlFor = {id}>
      {text}
      <input 
        className = 'checkbox__input'
        type = 'checkbox' 
        id = {id} 
        value = {checked}
        onChange = {onChange}
      >
      </input>
      <span className = 'checkbox__checkmark'></span>
    </label>
  )
})

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox