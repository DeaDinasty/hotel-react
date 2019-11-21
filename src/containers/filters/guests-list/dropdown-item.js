import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CountItem } from '~/components'
import { guestsListFieldSelector } from '~/selectors/filters'

const DropdownItem = ({ name, text, guestsValue, onChange }) => {
  const [count, setCount] = useState(guestsValue)
  const changeItem = (type) => () => {
    setCount(prevCount => {
      if (type === 'TYPE::INCREMENT' && prevCount !== 99) return prevCount + 1
      if (type === 'TYPE::DECREMENT' && prevCount !== 0) return prevCount - 1
    })
  }
  
  console.log('rerender-dropdown-item', guestsValue)
  useEffect(() => {
    onChange && onChange({type: 'TYPE::CHANGE', name: name, payload: count})
  }, [count])

  useEffect(() => {
    setCount(guestsValue)
  }, [guestsValue])

  return (
    <CountItem 
      text = {text}
      count = {count}
      onIncrement = {changeItem('TYPE::INCREMENT')}
      onDecrement = {changeItem('TYPE::DECREMENT')}
    />
  )
}

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  guestsValue: PropTypes.number,
  onChange: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  guestsValue: guestsListFieldSelector(state, ownProps.name)
})

export default connect(mapStateToProps)(DropdownItem)