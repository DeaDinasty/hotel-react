import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './block.scss'

const Block = ({ className, children }) => (
  <div className = {classNames('block', className)}>
    {children}
  </div>
)

Block.propTypes = {
  className: PropTypes.string
}

export default Block