import React from 'react'
import PropTypes from 'prop-types'

import { DropdownList } from '~/components'

const RoomAmenities = props => {
  return (
    <DropdownList
      
    >

    </DropdownList>
  )
  }

RoomAmenities.propTypes = {
  
}

// use this unless redux not exist
RoomAmenities.defaultProps = {
  items: [   // room amenities items from redux (here while redux not exists)
    {
      text: 'спальни',
      count: 2
    },
    {
      text: 'кровати',
      count: 2
    },
    {
      text: 'ванные комнаты',
      count: 0
    }
  ]
}

export default RoomAmenities