import React, { useState } from 'react'
import Nouislider from 'react-nouislider'
import 'nouislider/distribute/nouislider.css'
import PropTypes from 'prop-types'

import { bigNumberSpace } from '~/utils'
import './range-slider.scss'

const getRangeText = (mask, selected) => 
  `${bigNumberSpace(selected[0])}${mask} - ${bigNumberSpace(selected[1])}${mask}`

const RangeSlider = ({ name, legend, range, selected, mask = '', onChange }) => {
  const [rangeSelected, setRangeSelected] = useState(selected)
  const onUpdate = (selected) => {
    setRangeSelected(prevState => {
      const values = selected.map(Number)
      if (values.some((value, index) => (value !== prevState[index]))) return values

      return prevState
    }) 
  }

  return (
    <div className = 'range-slider'>
      <div className = 'range-slider-about'>
        <span className = 'range-slider-about__name'>
          {name}
        </span>
        <span className = 'range-slider-about__range'>
          {getRangeText(mask, rangeSelected)}
        </span>
      </div>
      <Nouislider 
        step = {100}
        range = {range}
        connect
        start = {rangeSelected}
        onUpdate = {onUpdate}
        onChange = {onChange}
      />
      <div className = 'range-slider__legend'>{legend}</div>
    </div>
  )
}

RangeSlider.propTypes = {
  name: PropTypes.string,
  legend: PropTypes.string,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  selected: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  mask: PropTypes.string,
  onChange: PropTypes.func
}

export default RangeSlider