import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { useComponentVisible as useComponentIsActive } from '~/hooks'
import { amenitiesSelector } from '~/selectors/filters'
import { changeAmenities } from '~/ac/filters'
import { Dropdown, CountItem } from '~/components'

const amenitiesConstants = {
  bedrooms: 'спальни',
  beds: 'кровати',
  bathrooms: 'ванные комнаты',
  default: 'Удобства в номере'
}

// https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/
// but not predictable if user not use es2015 and then i use this method for text

const getHeaderText = (amenities) => {
  const text = amenities.order.reduce((acc, value) => {
    if (amenities[value]) return `${acc}${amenities[value]} ${amenitiesConstants[value]}, `
    return acc
  }, '')

  if (text) return text.slice(0, -2)
  else return amenitiesConstants.default
}

const RoomAmenities = ({ amenities, changeAmenities }) => {
  const { ref, isComponentVisible: isOpen, setIsComponentVisible: setIsOpen } = useComponentIsActive(false)

  return (
    <Dropdown
      headerText = {getHeaderText(amenities)}
      isOpen = {isOpen}
      onOpen = {() => setIsOpen(!isOpen)}
      ref = {ref}
    >
      {
        amenities.order.map((value, index) => (
          <CountItem 
            count = {amenities[value]}
            text = {amenitiesConstants[value]} 
            onIncrement = {useCallback(() => changeAmenities(value, 'TYPE::INCREMENT'), [])}
            onDecrement = {useCallback(() => changeAmenities(value, 'TYPE::DECREMENT'), [])}
            key = {`dropdown-item${index}`} 
          />
        ))
      }
    </Dropdown>
  )
}

RoomAmenities.propTypes = {
  amenities: PropTypes.shape({
    order: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  changeAmenities: PropTypes.func
}

const mapStateToProps = (state) => ({
  amenities: amenitiesSelector(state)
})

export default connect(mapStateToProps, { changeAmenities })(RoomAmenities)