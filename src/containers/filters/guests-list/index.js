import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { changeGuestsList } from '~/ac/filters'
import { guestsListSelector } from '~/selectors/filters'
import { DropdownList } from '~/components'
import DropdownItem from './dropdown-item'

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
    case 'TYPE::CHANGE': 
      return {
        ...state,
        [action.name]: action.payload
      }
    default: return state
  }
}

const GuestsList = ({ guests, changeGuestsList }) => {
  const [state, dispatch] = useReducer(reducer, guests)
  const handleClear = () => {
    const newGuestsList = guests.order.reduce((acc, value) => ({
      ...acc,
      [value]: null
    }), {})

    changeGuestsList(newGuestsList)
  }

  return (
    <DropdownList 
      headerText = {getHeaderText(state) || guestsConstants.default}
      onApply= {() => changeGuestsList(state)}
      onClear = {handleClear}
      className = {'dropdown_big'}
    >
      {
        guests.order.map((value, index) => {
          return (
            <DropdownItem 
              name = {value}
              text = {guestsConstants[value]} 
              key = {`dropdown-item${index}`} 
              onChange = {dispatch}
            />
          )
        })
      }
    </DropdownList>
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