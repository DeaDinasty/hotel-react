import React from 'react'

import PropTypes from 'prop-types'

const MaterialIcon = ({ icon, className }) => (
  <i className = {`material-icons ${className}`}>
    {icon}
  </i>
)

MaterialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default MaterialIcon