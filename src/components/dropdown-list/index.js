import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import { useToggle } from '~/hooks'
import './dropdown-list.scss'

const DropdownList = ({ 
  headerText,        // text when headerTextHelper is null or return null
  helperButtons,     // when true => add clear and apply buttons
  isExpanded = true, // expanded state (default true)
  style,             // spec style (in my case is width)
  children
}) => {
  const { isOpen, toggleOpen } = useToggle(isExpanded)

  return (
    <div className = {classNames('dropdown', {'dropdown_active': isOpen})}>
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
          { helperButtons && (
            <div>
              
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
  helperButtons: PropTypes.bool,
  isExpanded: PropTypes.bool,
  style: PropTypes.string
}

export default DropdownList