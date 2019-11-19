import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { priceRangeSelector } from '~/selectors/filters'
import { RangeSlider } from '~/components'

const PRICE_RANGE_CONSTANTS = {
  currensy_mask: '₽',
  range: {
    min: 1000,
    max: 20000
  },
  name: 'диапозон цены',
  legend: 'Стоимость за сутки пребывания в номере' 
}

const getSelected = (price_range) => {
  const selected = []

  selected.push(price_range.from ? price_range.from : PRICE_RANGE_CONSTANTS.range.min)
  selected.push(price_range.to ? price_range.to : PRICE_RANGE_CONSTANTS.range.max)

  return selected
}

const onChange = ([from, to]) => {

}

const PriceRange = ({ price_range }) => (
  <RangeSlider 
    range = {PRICE_RANGE_CONSTANTS.range} 
    name = {PRICE_RANGE_CONSTANTS.name}
    legend = {PRICE_RANGE_CONSTANTS.legend}
    selected = {getSelected(price_range)}
  />
)

PriceRange.propTypes = {
  price_range: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number
  }).isRequired
}

const mapStateToProps = (state) => ({
  price_range: priceRangeSelector(state)
})

export default connect(mapStateToProps)(PriceRange)