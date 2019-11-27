import React from 'react'
import { Route } from 'react-router-dom'

import { Header, Footer } from '~/components'
import { LandingPage, Auth } from '~/pages'
import '~/styles/main.scss'

const App = props => (
  <div>
    <Header />
    <Route exact path = '/' component = {LandingPage} />
    <Route exact path = {['/login', '/register']} component = {Auth} />
    <Footer />
  </div>
)

export default App