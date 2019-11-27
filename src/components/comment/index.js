import React from 'react'
import PropTypes from 'prop-types'

import './comment.scss'

const Comment = ({ name, avatar, date, like, text }) => (
  <div className = 'comment'>

  </div>
)

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  date: PropTypes.string,
  like: PropTypes.shape({
    count: PropTypes.number,
    isLiked: PropTypes.bool
  }),
  text: PropTypes.string
}

export default Comment