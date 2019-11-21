import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon, Button } from '~/components'
import { useToggle } from '~/hooks'
import './dropdown-list.scss'

const DropdownList = ({ 
  headerText,          // text when headerTextHelper is null or return null
  onClear,
  onApply,
  isExpanded = false,  // expanded state (default true)
  className,          // spec style (in my case is width)
  children
}) => {
  const { isOpen, toggleOpen } = useToggle(isExpanded)

  return (
    <div className = {classNames('dropdown', {'dropdown_active': isOpen}, {className: className})}>
      <div 
        className="dropdown-header"
        onClick = {toggleOpen}
      >
        <span className = 'dropdown-header__text'>
          {headerText}
        </span>
        <MaterialIcon icon = {'expand_more'} className = {'dropdown-header__icon'} />
      </div>
      {isOpen ? 
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
}

DropdownList.propTypes = {
  headerText: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  onClear: PropTypes.func,
  onApply: PropTypes.func,
  className: PropTypes.string
}

export default DropdownList