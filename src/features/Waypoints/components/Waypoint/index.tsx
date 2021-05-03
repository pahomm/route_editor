import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'

import { TWaypoint } from 'stores/YMap'
import { useStore } from 'hooks'

import {
  WaypointTitle,
  WaypointName,
  WaypointAddress,
  IconCancel,
} from './styled'

type TWaypointProps = {
  waypoint: TWaypoint,
}

export const Waypoint = observer(({ waypoint }: TWaypointProps) => {
  const {
    yMap: {
      deleteWaypoint,
    },
  } = useStore()

  return (
    <Fragment>
      <WaypointTitle>
        <WaypointName>
          {waypoint.name}
        </WaypointName>
        <WaypointAddress>
          {waypoint.address}
        </WaypointAddress>
      </WaypointTitle>
      <IconCancel onClick={() => deleteWaypoint(waypoint)} />
    </Fragment>
  )
})
