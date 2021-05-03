import { types } from 'mobx-state-tree'

import { Waypoint, Coordinates } from './Waypoint'

const {
  array,
  model,
  number,
} = types

export const YMapStoreMain = model('WaypointsStoreMain', {
  idsCount: 0,
  mapCenterCoordinates: Coordinates,
  tempReorderIdxs: array(number),
  waypoints: array(Waypoint),
})
