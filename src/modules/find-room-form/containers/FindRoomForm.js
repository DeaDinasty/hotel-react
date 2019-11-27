import React from 'react'
import PropTypes from 'prop-types'

import ChooseDate from './chooseDate'
import FindRoomComponent from '../components/FindRoomForm'

const FindRoomForm = props => (
  <FindRoomComponent>
    <ChooseDate />
  </FindRoomComponent>
)

FindRoomForm.propTypes = {
  
}

export default FindRoomForm