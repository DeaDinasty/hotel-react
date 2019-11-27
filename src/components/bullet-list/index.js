import React from 'react'
import PropTypes from 'prop-types'

import './bullet-list.scss'

const BulletList = ({ headerText, items }) => (
  <div className = 'bullet-list'>
    <span className="bullet-list__header">
      {headerText}
    </span>
    <ul className="bullet-list-body">
      {
        items.map((value, index) => (
          <li
            className = 'bullet-list-body__item'
            key = {`bullet-list-item-${index}`}
          >
            {value}
          </li>
        ))
      }
    </ul>
  </div>
)

BulletList.propTypes = {
  headerText: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
}

export default BulletList