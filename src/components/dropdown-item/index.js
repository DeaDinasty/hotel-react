import React from 'react'
import PropTypes from 'prop-types'

import './dropdown-item.scss'

const DropdownItem = ({ text, count, onIncrement, onDecrement }) => (
  <li className = 'dropdown-item' >
    <span className = 'dropdown-item__text'>
      {text}
    </span>
    <span className = 'dropdown-item-count'>
      <button 
        className = {'dropdown-item-count__decrease'}
        onClick = {onDecrement}
        disabled = {!count} 
      >
        {'-'}
      </button>
      <span className = 'dropdown-item-count__text'>
        {count || 0}
      </span>
      <button 
        className = 'dropdown-item-count__increase'
        onClick = {onIncrement}
      >
        {'+'}
      </button>
    </span>
  </li>
)

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default DropdownItem