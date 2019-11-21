import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './button.scss'

// types = [simple(mod = [gray]), fill, hollow, nav]
const Button = ({ text, type, mod, className, onClick }) => (
  <button className = {classNames(className, 'button', 
    {[`button-${type}`]: type},
    {[`button-${type}_${mod}`]: mod}
    )}
    onClick = {onClick}
  >
    {text}
    {type === 'nav' 
    ? <span className = 'button-nav-arrow'>
        <MaterialIcon icon = {'arrow_forward'} />
      </span>
    : ''
    }
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mod: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button