import React from 'react'
import PropTypes from 'prop-types'

import { Dropdown, Block, Button, Calendar } from '~/components'
import { GuestsList } from '~/containers/filters'

import './find-room-form.scss'

const FindRoomForm = ({ children }) => (
  <Block>
    <h1 className = 'find-room__header'>
      Найдём номера под ваши пожелания
    </h1>
    {children}
    <div className = 'find-room-guests'>
      <p className = 'find-room__legend'>
        гости
      </p>
      <GuestsList />
    </div>
    <Button type = 'nav' text = 'подобрать номер' className = 'find-room__submit' />
  </Block>
)

FindRoomForm.propTypes = {
  
}

export default FindRoomForm