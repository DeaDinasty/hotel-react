import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { changePriceRange } from '~/ac/filters'
import { priceRangeSelector } from '~/selectors/filters'
import { RangeSlider } from '~/components'

const PRICE_RANGE_CONSTANTS = {
  currensy_mask: '₽',
  range: {
    min: 1000,
    max: 20000
  },
  name: 'диапазон цены',
  legend: 'Стоимость за сутки пребывания в номере' 
}

const getSelected = (price_range) => {
  const selected = []

  selected.push(price_range.from ? price_range.from : PRICE_RANGE_CONSTANTS.range.min)
  selected.push(price_range.to ? price_range.to : PRICE_RANGE_CONSTANTS.range.max)

  return selected
}

const onChange = (rangeFromStore, changeRange) => (selected) => {
  if (!changeRange) return null

  const selectedNumbers = selected.map(Number)

  if (rangeFromStore.from !== selectedNumbers[0] || rangeFromStore.to !== selectedNumbers[1]) 
    changeRange({
      from: selectedNumbers[0],
      to: selectedNumbers[1]
    })
}

const PriceRange = ({ price_range, changePriceRange }) => {
  const selected = getSelected(price_range)
  const onChangeRange = onChange(selected, changePriceRange)

  return (
    <RangeSlider 
      range = {PRICE_RANGE_CONSTANTS.range} 
      mask = {PRICE_RANGE_CONSTANTS.currensy_mask}
      name = {PRICE_RANGE_CONSTANTS.name}
      legend = {PRICE_RANGE_CONSTANTS.legend}
      selected = {selected}
      onChange = {onChangeRange}
    />
  )
}

PriceRange.propTypes = {
  price_range: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number
  }).isRequired,
  changePriceRange: PropTypes.func
}

const mapStateToProps = (state) => ({
  price_range: priceRangeSelector(state)
})

export default connect(mapStateToProps, { changePriceRange })(PriceRange)