import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './like-button.scss'

const LikeButton = ({ count, isLiked, onClick }) => (
  <button 
    className = {classNames('like-button', {'like-button_liked': isLiked})}
    onClick = {onClick}
    >
    <MaterialIcon 
      icon = {isLiked ? 'favorite' : 'favorite_border'} 
      className = {'like-button__icon'} 
    />  
    <span className = 'like-button__count'>{count || 0}</span>
  </button>
)

LikeButton.propTypes = {
  count: PropTypes.number,
  isLiked: PropTypes.bool,
  onClick: PropTypes.func
}

export default LikeButton