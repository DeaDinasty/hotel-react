import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './checkbox.scss'

const Checkbox = React.memo(function Checkbox({ text, richText, id, checked = false, onChange }) { 
  return (
    <label 
      className = {classNames('checkbox', {'checkbox_rich': richText})}
      htmlFor = {id}
    >
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
      {richText && (
        <p className = 'checkbox__rich-text'>
          {richText}
        </p>
      )}
    </label>
  )
})

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  richText: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox