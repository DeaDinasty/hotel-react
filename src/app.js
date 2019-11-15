import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '~/components'
import '~/styles/main.scss'

const App = props => (
  <Button text = {'click me'} type = {'nav'} />
)

App.propTypes = {
  
}

export default App