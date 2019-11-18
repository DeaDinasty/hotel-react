import React from 'react'

import { LikeButton } from '~/components'
import '~/styles/main.scss'

const App = props => (
  <div>
    <LikeButton count = {2} />
    <LikeButton count = {12244} isLiked = {true} />
  </div>
)

export default App