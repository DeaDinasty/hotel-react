import React from 'react'
import PropTypes from 'prop-types'

import './count-item.scss'

const CountItem = ({ text, count, onIncrement, onDecrement }) => (
  <li className = 'count-item' >
    {console.log('rerender-count-item')}
    <span className = 'count-item__text'>
      {text}
    </span>
    <span className = 'count-item-count'>
      <button 
        className = {'count-item-count__decrease'}
        onClick = {onDecrement}
        disabled = {!count} 
      >
        {'-'}
      </button>
      <span className = 'count-item-count__text'>
        {count || 0}
      </span>
      <button 
        className = 'count-item-count__increase'
        onClick = {onIncrement}
      >
        {'+'}
      </button>
    </span>
  </li>
)

CountItem.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default CountItem