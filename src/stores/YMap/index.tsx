import { mapInitialState } from 'features/Map/config'

import { YMapStoreSetters } from './models/Setters'

export type { TWaypoint } from './models/Waypoint'
export type { TCoordinates } from './types'

export const YMapStore = YMapStoreSetters.create({
  mapCenterCoordinates: mapInitialState.center,
})
