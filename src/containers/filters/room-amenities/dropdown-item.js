import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { DropdownItem as DropdownItemComponent } from '~/components'
import { amenitiesFieldSelector } from '~/selectors/filters'
import { changeAmenities } from '~/ac/filters'

const changeItem = (func, name, type) => () => func(name, type)

const DropdownItem = ({ name, text, amenityValue, changeAmenities }) => (
  <DropdownItemComponent 
    text = {text} 
    count = {amenityValue}
    onIncrement = {changeItem(changeAmenities, name, 'TYPE::INCREMENT')}
    onDecrement = {changeItem(changeAmenities, name, 'TYPE::DECREMENT')}
  />
)

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  amenityValue: PropTypes.number,
  changeAmenities: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  amenityValue: amenitiesFieldSelector(state, ownProps.name)
})

export default connect(mapStateToProps, { changeAmenities })(DropdownItem)