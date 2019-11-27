import React from 'react'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './link.scss'

const Link = ({ 
  text,
  isExpandable = false, 
  href = '#', 
  className 
}) => (
  <a 
    href = {href} 
    className = {`link ${className ? className : ''}`}
  >
    {text}
    {isExpandable && 
      (
        <MaterialIcon 
          icon = 'expand_more' 
          className = 'link__icon'
        />
      )
    }
  </a>
)

Link.propTypes = {
  text: PropTypes.string.isRequired,
  isExpandable: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string
}

export default Link