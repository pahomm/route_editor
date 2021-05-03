import get from 'lodash/get'
import map from 'lodash/map'
import size from 'lodash/size'

import { TWaypoint } from './Waypoint'
import { YMapStoreMain } from './Main'

export const YMapStoreViews = YMapStoreMain
  .views(self => ({
    getRoutePoints() {
      const result = map(
        self.waypoints,
        (waypoint: TWaypoint) => waypoint.coordinates,
      )

      if (size(self.tempReorderIdxs) === 2) {
        const sourceIndex = get(self.tempReorderIdxs, '0')
        const destinationIndex = get(self.tempReorderIdxs, '1')

        result.splice(sourceIndex, 1)
        result.splice(
          destinationIndex,
          0,
          self.waypoints[sourceIndex].coordinates,
        )
      }

      return result
    },
  }))
