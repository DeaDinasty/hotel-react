import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { useComponentVisible as useComponentIsExpanded } from '~/hooks'
import { changeAdditionalAmenities } from '~/ac/filters'
import { additionalAmenitiesSelector } from '~/selectors/filters'
import { ExpandableList, Checkbox } from '~/components'

const ADDITIONAL_AMENITIES_CONSTANTS = {
  headerText: 'Дополнительные удобства',
    breakfast: 'Завтрак',
    desk: 'Письменный стол',
    feedingChair: 'Стул для кормления',
    crib: 'Кроватка',
    tv: 'Телевизор',
    shampoo: 'Шампунь',
}

const AdditionalRoomAmenities = ({ additionalAmenities, changeAdditionalAmenities }) => {
  const { ref, isComponentVisible: isExpanded, setIsComponentVisible: setIsExpanded } = useComponentIsExpanded(false)

  return (
    <ExpandableList 
      headerText = {ADDITIONAL_AMENITIES_CONSTANTS.headerText}
      isExpanded = {isExpanded}
      onClick = {() => setIsExpanded(!isExpanded)}
      ref = {ref}
    >
      {
        additionalAmenities.order.map((value, index) => (
          <Checkbox 
            text = {ADDITIONAL_AMENITIES_CONSTANTS[value]}
            id = {`additionalAmenity-${value}`}
            checked = {additionalAmenities[value] || false}
            onChange = {useCallback(() => changeAdditionalAmenities(value), [])}
            key = {`additional-amenity-${value}${index}`}
          />
        ))
      }      
    </ExpandableList>
  )
}

AdditionalRoomAmenities.propTypes = {
  additionalAmenities: PropTypes.shape({
    order: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  changeAdditionalAmenities: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  additionalAmenities: additionalAmenitiesSelector(state)
})

export default connect(mapStateToProps, { changeAdditionalAmenities })(AdditionalRoomAmenities)