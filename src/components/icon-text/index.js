import React from 'react'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './icon-text.scss'

const IconText = ({ icon, text, richText }) => (
  <div className = 'icon-text'>
    <MaterialIcon icon = {icon} className = 'icon-text__icon' />
    <div className = 'icon-text-content'>
      <span className = 'icon-text-content__text'>
        {text}
      </span>
      {richText && (
        <span className = 'icon-text-content__richText'>
          {richText}
        </span>
      )}
    </div>
  </div>
)

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  richText: PropTypes.string,
}

export default IconText