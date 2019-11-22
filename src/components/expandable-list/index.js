import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './expandable-list.scss'

const ExpandableList = React.forwardRef(({
  isExpanded = false,
  headerText,
  onClick,
  className,
  children
}, ref) => (
  <div 
    className = {classNames('expandable-list', {className: className})}
    ref = {ref}
  >
    <div 
      onClick = {onClick}
      className = 'expandable-list-header'
    >
      <span className = 'expandable-list-header__text'>{headerText}</span>
      <MaterialIcon 
        className = {classNames('expandable-list-header__icon', 
          {'expandable-list-header__icon_expanded': isExpanded}
        )}
        icon = {'expand_more'} 
      />
    </div>
    {isExpanded && (
      <div className="expandable-list-body">
        {children}
      </div>
    )}
  </div>
))

ExpandableList.propTypes = {
  isExpanded: PropTypes.bool,
  headerText: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default ExpandableList