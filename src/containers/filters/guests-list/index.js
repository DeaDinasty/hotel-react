import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

  if (!sum) return guestsConstants.default
  const sumMOD10 = sum % 10
  if (sum !== 11 && sumMOD10 === 1) return `${sum} ${guestsConstants.name1}`
  if (sumMOD10 > 1 && sumMOD10 < 5 && (sum / 10) % 10 !== 1 ) return `${sum} ${guestsConstants.name2}`
  else return `${sum} ${guestsConstants.name3}`
}

const GuestsList = ({ guests }) => (
  <DropdownList 
    headerText = {getHeaderText(guests)}
    className = {'dropdown_big'}
  >
    {
      guests.order.map((value, index) => {
        return (
          <DropdownItem 
            name = {value}
            text = {guestsConstants[value]} 
            key = {`dropdown-item${index}`} 
          />
        )
      })
    }
  </DropdownList>
)

GuestsList.propTypes = {
  guests: PropTypes.shape({
    order: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

const mapStateToProps = (state) => ({
  guests: guestsListSelector(state)
})

export default connect(mapStateToProps)(GuestsList)