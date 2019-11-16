import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { amenitiesSelector } from '~/selectors/filters'
import { DropdownList } from '~/components'

const amenitiesConstants = {
  bedrooms: 'спальни',
  beds: 'кровати',
  bathrooms: 'ванные комнаты',
  default: 'удобства в номере'
}

const amenitiesOrder = {
  
}

// https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/
// but not predictable if user not use es2015 and then i use this method for text

const getHeaderText = (amenities) => {

}

const RoomAmenities = ({ amenities }) => (
  <DropdownList

  >

  </DropdownList>
)

RoomAmenities.propTypes = {
  amenities: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  amenities: amenitiesSelector(state)
})

export default connect(mapStateToProps)(RoomAmenities)