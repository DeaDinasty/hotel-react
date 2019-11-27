import React from 'react'
import PropTypes from 'prop-types'

import landingPageBackground from '~/assets/imgs/background-landing.png'
import { FindRoomForm } from '~/modules'
import './landing-page.scss'

const LandingPage = props => (
  <div className = 'landing-page'>
    <img 
      src = {landingPageBackground} 
      alt = 'landing background' 
      className = 'landing-page__background'
    />
    <FindRoomForm />
  </div>
)

LandingPage.propTypes = {
  
}

export default LandingPage