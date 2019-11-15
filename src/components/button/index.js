import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './button.scss'

// types = [simple(mod = [gray]), fill, hollow, nav]
const Button = ({ text, type, mod }) => (
  <button className = {classNames('button', 
    {[`button-${type}`]: type},
    {[`button-${type}_${mod}`]: mod}
    )}
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
}

export default Button