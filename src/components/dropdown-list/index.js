import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { idsForList } from '~/utils'
import { MaterialIcon } from '~/components'
import DropdownItem from './dropdown-item'
import { useToggle } from '~/hooks'
import './dropdown-list.scss'

const DropdownList = ({ 
  defaultText,       // text when headerTextHelper is null or return null
  items,             // list items
  headerTextHelper,  // function for set specific header-text by list changes
  helperButtons,     // when true => add clear and apply buttons
  isExpanded = true, // expanded state (default true)
  style              // spec style (in my case is width)
}) => {
  const { isOpen, toggleOpen } = useToggle(isExpanded)
  const [listState, setListState] = useState(idsForList(items))

  return (
    <div className = {classNames('dropdown', {'dropdown_active': isOpen})}>
      <div 
        className="dropdown-header"
        onClick = {toggleOpen}
      >
        <span className = 'dropdown-header__text'>
          {headerTextHelper && headerTextHelper(listState) || defaultText}
        </span>
        <MaterialIcon icon = {'expand_more'} className = {'dropdown-header__icon'} />
      </div>
      {isOpen ? 
      (
        <ul className = 'dropdown-body'>
          {
            items.map((item, index) => 
              <DropdownItem text = {item.text} count = {item.count} key = {`dropdown-item${index}`} />
            )
          }
          {
            helperButtons 
            ? (
              <div>
                
              </div>
            )
            : null
          }
      </ul>
      )
      : null}
    </div>
  )
}

DropdownList.propTypes = {
  defaultText: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    count: PropTypes.number
  })).isRequired,
  headerTextHelper: PropTypes.func,
  helperButtons: PropTypes.bool,
  isExpanded: PropTypes.bool,
  style: PropTypes.string
}

export default DropdownList