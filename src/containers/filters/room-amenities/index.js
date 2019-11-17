import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { amenitiesSelector } from '~/selectors/filters'
import { DropdownList } from '~/components'
import DropdownItem from './dropdown-item'

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

const RoomAmenities = ({ amenities }) => (
  <DropdownList
    headerText = {getHeaderText(amenities)}
  >
    {
      amenities.order.map((value, index) => {
        return (
          <DropdownItem 
            name = {value}
            text = {amenitiesConstants[value]} 
            key = {`dropdown-item${index}`} 
          />
        )
      })
    }
  </DropdownList>
)

RoomAmenities.propTypes = {
  amenities: PropTypes.shape({
    order: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

const mapStateToProps = (state) => ({
  amenities: amenitiesSelector(state)
})

export default connect(mapStateToProps)(RoomAmenities)