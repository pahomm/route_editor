import React from 'react'

import { Waypoints } from 'features/Waypoints'
import { Map } from 'features/Map'

import { AppContainer, MainSection } from './styled'

export const App = () => (
  <AppContainer>
    <MainSection>
      <Waypoints />
      <Map />
    </MainSection>
  </AppContainer>
)
