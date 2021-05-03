import {
  Instance,
  types,
  cast,
} from 'mobx-state-tree'

import { TCoordinates } from '../types'

const {
  model,
  number,
  string,
} = types

export const Coordinates = model({
  latitude: number,
  longitude: number,
})

export const Waypoint = model('Waypoint', {
  address: 'loading...',
  coordinates: Coordinates,
  id: number,
  name: string,
}).actions(self => ({
  setAddress(address: string) {
    self.address = address
  },
  setCoordinates(coordinates: TCoordinates) {
    self.coordinates = cast(coordinates)
  },
}))

export interface TWaypoint extends Instance<typeof Waypoint> {}
