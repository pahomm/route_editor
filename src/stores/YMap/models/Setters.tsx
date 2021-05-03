import { cast } from 'mobx-state-tree'

import reject from 'lodash/reject'
import concat from 'lodash/concat'

import { TCoordinates } from '../types'
import { TWaypoint } from './Waypoint'
import { YMapStoreViews } from './Views'

export const YMapStoreSetters = YMapStoreViews
  .actions(self => ({
    addWaypoint(name: string) {
      const { latitude, longitude } = self.mapCenterCoordinates

      self.waypoints.push({
        coordinates: {
          latitude,
          longitude,
        },
        id: self.idsCount++,
        name,
      })
    },

    clearTempReorderIdxs() {
      self.tempReorderIdxs = cast([])
    },

    deleteWaypoint(waypoint: TWaypoint) {
      self.waypoints = cast(reject(
        self.waypoints,
        waypoint,
      ))
    },

    moveWaypoint(sourceIndex: number, destinationIndex: number) {
      const isMovingDown = sourceIndex < destinationIndex
      const isMovingUp = sourceIndex > destinationIndex

      if (isMovingDown) {
        self.waypoints.replace(concat(
          self.waypoints.slice(0, sourceIndex),
          self.waypoints.slice(sourceIndex + 1, destinationIndex + 1),
          self.waypoints.slice(sourceIndex, sourceIndex + 1),
          self.waypoints.slice(destinationIndex + 1),
        ))
      } else if (isMovingUp) {
        self.waypoints.replace(concat(
          self.waypoints.slice(0, destinationIndex),
          self.waypoints.slice(sourceIndex, sourceIndex + 1),
          self.waypoints.slice(destinationIndex, sourceIndex),
          self.waypoints.slice(sourceIndex + 1),
        ))
      }
    },

    setMapCenterCoordinates(coordinates: TCoordinates) {
      self.mapCenterCoordinates = cast(coordinates)
    },

    setTempReorderIdxs(sourceIndex: number, destinationIndex: number) {
      self.tempReorderIdxs = cast([sourceIndex, destinationIndex])
    },
  }))
