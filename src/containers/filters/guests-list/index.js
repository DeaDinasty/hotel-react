import React, { useReducer, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { useComponentVisible as useComponentIsActive } from '~/hooks'
import { changeGuestsList } from '~/ac/filters'
import { guestsListSelector } from '~/selectors/filters'
import { Dropdown, CountItem } from '~/components'

const guestsConstants = {
  name1: 'гость',
  name2: 'гостя',
  name3: 'гостей',
  adults: 'взрослые',
  children: 'дети',
  babies: 'младенцы',
  default: 'Сколько гостей'
}

const getHeaderText = (guests) => {
  const sum = guests.order.reduce((acc, value) => {
    if (guests[value]) return acc + guests[value]
    return acc
  }, 0)

  if (!sum) return null
  const sumMOD10 = sum % 10
  if (sum !== 11 && sumMOD10 === 1) return `${sum} ${guestsConstants.name1}`
  if (sumMOD10 > 1 && sumMOD10 < 5 && (sum / 10 | 0) !== 1 ) return `${sum} ${guestsConstants.name2}`
  else return `${sum} ${guestsConstants.name3}`
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TYPE::INCREMENT': 
      if (state[action.payload] === 99) return state

      return {
        ...state,
        [action.payload]: state[action.payload] + 1
      }
    case 'TYPE::DECREMENT': 
      if (state[action.payload] === 0) return state

      return {
        ...state,
        [action.payload]: state[action.payload] - 1
      }
    case 'TYPE::RESET': 
      return action.payload

    default: return state
  }
}

const GuestsList = ({ guests, changeGuestsList }) => {
  const [state, dispatch] = useReducer(reducer, guests)
  const { ref, isComponentVisible: isOpen, setIsComponentVisible: setIsOpen } = useComponentIsActive(false)
  const headerText = getHeaderText(state)

  const handleClear = () => {
    const newGuestsList = guests.order.reduce((acc, value) => ({
      ...acc,
      [value]: null
    }), {})

    changeGuestsList(newGuestsList)
  }

  useEffect(() => {
    dispatch({type: 'TYPE::RESET', payload: guests})
  }, [guests, isOpen])

  return (
    <Dropdown
      headerText = {headerText || guestsConstants.default}
      isOpen = {isOpen}
      onApply= {() => changeGuestsList(state)}
      onClear = {headerText ? handleClear : null}
      onOpen = {() => setIsOpen(!isOpen)}
      className = {'dropdown_big'}
      ref = {ref}
    >
      {
        guests.order.map((value, index) => {
          return (
            <CountItem 
              count = {state[value]}
              text = {guestsConstants[value]} 
              onIncrement = {useCallback(() => dispatch({type: 'TYPE::INCREMENT', payload: value}), [])}
              onDecrement = {useCallback(() => dispatch({type: 'TYPE::DECREMENT', payload: value}), [])}
              key = {`dropdown-item${index}`} 
            />
          )
        })
      }
    </Dropdown>
  )
}

GuestsList.propTypes = {
  guests: PropTypes.shape({
    order: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  changeGuestsList: PropTypes.func
}

const mapStateToProps = (state) => ({
  guests: guestsListSelector(state)
})

export default connect(mapStateToProps, { changeGuestsList })(GuestsList)