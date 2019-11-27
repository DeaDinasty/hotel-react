import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './fab-icon.scss'

const FabIcon = ({ className }) => (
  <i className = {classNames('fab', className)}
  ></i>
)

FabIcon.propTypes = {
  className: PropTypes.string.isRequired
}

export default FabIcon