import React from 'react'
import PropTypes from 'prop-types'

import { DropdownList } from '~/components'
import '~/styles/main.scss'

const App = props => (
  <div>
    <DropdownList 
      defaultText = 'Сколько гостей' 
      items = {[
        {
          text: 'спальни',
          count: 2
        },
        {
          text: 'кровати',
          count: 2
        },
        {
          text: 'ванные комнаты'
        }
      ]}
      headerTextHelper = {null} 
    />
  </div>
)

App.propTypes = {
  
}

export default App