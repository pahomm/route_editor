import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'

import map from 'lodash/map'

import { TWaypoint } from 'stores/YMap'
import { Draggable } from 'features/common/Draggable'
import { useStore } from 'hooks'

import { Waypoint } from '../Waypoint'
import { DraggableCustomStyles } from './styled'

export const WaypointsList = observer(() => {
  const {
    yMap: {
      waypoints,
    },
  } = useStore()

  return (
    <Fragment>
      {map(waypoints, (waypoint: TWaypoint, index: number) => (
        <Draggable
          key={String(waypoint.id)}
          index={index}
          draggableId={String(waypoint.id)}
          customStyles={DraggableCustomStyles}
        >
          <Waypoint waypoint={waypoint} />
        </Draggable>
      ))}
    </Fragment>
  )
})
