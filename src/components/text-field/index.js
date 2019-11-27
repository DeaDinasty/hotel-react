import React from 'react'
import MaskedInput from 'react-text-mask'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './text-field.scss'

const TextField = ({ placeholder, icon, date_mask, onSubmit }) => {
  if (date_mask) {
    return (
      <MaskedInput 
        className = 'text-field' 
        placeholder = {placeholder} 
        guide = {false}
        mask = {[/[0-3]/, /\d/, '.', /[0-1]/, /\d/, '.', /[1-2]/, /\d/, /\d/, /\d/]}
      />
    )
  } else {
    const tf = (
      <input 
        className = {classNames('text-field',
          {'text-field_icon': icon}
        )}
        type = 'text' 
        placeholder = {placeholder} 
      />
    )

    if (!icon) return tf
    else return (
      <div className = 'text-field-wrapper'>
        {tf}
        <button 
          className = 'text-field-button'
          onClick = {onSubmit}
        >
          <MaterialIcon icon = {'arrow_forward'} className = {'text-field-button__icon'} />
        </button>
      </div>
    )
  }
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  icon: PropTypes.string,
  onSubmit: PropTypes.func
}

export default TextField