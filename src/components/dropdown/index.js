import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon, Button } from '~/components'
import './dropdown.scss'

const Dropdown = React.forwardRef(({
  headerText,          // text when headerTextHelper is null or return null
  onClear,             // clear button event
  onApply,             // apply button event
  onOpen,              // change open state when click on on header
  isOpen = false,      // expanded state (default false)
  className,           // spec style (in my case is width)
  children,
}, ref) => {

  return (
    <div 
      className = {classNames('dropdown', {'dropdown_active': isOpen}, className)}
      ref = {ref}
    >
      <div 
        className="dropdown-header"
        onClick = {onOpen}
      >
        <span className = 'dropdown-header__text'>
          {headerText}
        </span>
        <MaterialIcon icon = {'expand_more'} className = {'dropdown-header__icon'} />
      </div>
      {isOpen && children ? 
      (
        <ul className = 'dropdown-body'>
          { children }
          { (onClear || onApply) && (
            <div className = {onClear ? 'dropdown-body-helper' : 'dropdown-body-helper_apply'}>
              {onClear && 
                <Button 
                  type = 'simple'
                  mod = 'grey'
                  text = {'очистить'}
                  onClick = {onClear}
                />
              }
              <Button 
                type = 'simple'
                text = 'применить'
                onClick = {onApply}
              />
            </div>
          )}
      </ul>
      )
      : null}
    </div>
  )
})

Dropdown.propTypes = {
  headerText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClear: PropTypes.func,
  onApply: PropTypes.func,
  className: PropTypes.string
}

export default Dropdown