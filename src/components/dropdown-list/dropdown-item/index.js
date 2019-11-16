import React from 'react'
import PropTypes from 'prop-types'

import './dropdown-item.scss'

const DropdownItem = ({ text, count = 0 }) => (
  <li className = 'dropdown-item' >
    <span className = 'dropdown-item__text'>
      {text}
    </span>
    <span className = 'dropdown-item-count'>
      <button className = 'dropdown-item-count__decrease' disabled = {!count} >
        {'-'}
      </button>
      <span className = 'dropdown-item-count__text'>
        {count}
      </span>
      <button className = 'dropdown-item-count__increase'>
        {'+'}
      </button>
    </span>
  </li>
)

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number
}

export default DropdownItem