import React from 'react'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './rate-button.scss'

const getStars = (rate) => {
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(
      <MaterialIcon 
        icon = {rate > i ? 'star' : 'star_border'}
        className = 'rate-button__icon'
        key = {`rate-button__icon${i}`}
      />
    )
  }

  return stars
}

const RateButton = ({ rate = 0, onClick }) => (
  <span className = 'rate-button'>
    {getStars(rate)}
  </span>
)

RateButton.propTypes = {
  rate: PropTypes.number,
  onClick: PropTypes.func
}

export default RateButton