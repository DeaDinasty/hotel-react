import React from 'react'
import PropTypes from 'prop-types'

import { RoomAmenities } from '~/containers/filters'
import '~/styles/main.scss'

const App = props => (
  <div>
    <RoomAmenities />
  </div>
)

App.propTypes = {
  
}

export default App