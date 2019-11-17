import React from 'react'

import { ToggleButton } from '~/components'
import '~/styles/main.scss'

const App = props => (
  <div>
    <ToggleButton text = 'Получать спец предложения' id = 'text' />
  </div>
)

export default App