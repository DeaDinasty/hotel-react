import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { DropdownItem as DropdownItemComponent } from '~/components'
import { guestsListFieldSelector } from '~/selectors/filters'
import { changeGuestsList } from '~/ac/filters'

const changeItem = (func, name, type) => () => func(name, type)

const DropdownItem = ({ name, text, guestsValue, changeGuestsList }) => (
  <DropdownItemComponent 
    text = {text}
    count = {guestsValue}
    onIncrement = {changeItem(changeGuestsList, name, 'TYPE::INCREMENT')}
    onDecrement = {changeItem(changeGuestsList, name, 'TYPE::DECREMENT')}
  />
)

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  guestsValue: PropTypes.number,
  changeGuestsList: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  guestsValue: guestsListFieldSelector(state, ownProps.name)
})

export default connect(mapStateToProps, { changeGuestsList })(DropdownItem)