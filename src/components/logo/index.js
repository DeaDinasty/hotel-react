import React from 'react'
import PropTypes from 'prop-types'

const logoIMG = '/assets/imgs/logo.svg'

const Logo = ({ className }) => (
  <img 
    className = {className}
    src = {logoIMG} 
    alt = 'logo' 
  />
)

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo