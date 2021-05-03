import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  YMaps,
  ZoomControl,
  Polyline,
} from 'react-yandex-maps'

import { Event, Map as TMap } from 'yandex-maps'
import map from 'lodash/map'

import { TWaypoint, TCoordinates } from 'stores/YMap'
import { useStore } from 'hooks'

import { mapCoordinates } from './helpers/mapCoordinates'
import { mapInitialState, apiKey } from './config'
import { Placemark } from './components/Placemark'
import { StyledMap } from './styled'

export const Map = observer(() => {
  const {
    yMap: {
      getRoutePoints,
      setMapCenterCoordinates,
      waypoints,
    },
  } = useStore()

  const onBoundsChange = (e: Event) => {
    const map = e.get('target') as TMap
    setMapCenterCoordinates(
      mapCoordinates.numbersToLatLong(map.getCenter()),
    )
  }

  return (
    <YMaps
      query={{
        apikey: apiKey,
      }}
    >
      <StyledMap
        defaultState={{
          ...mapInitialState,
          center: mapCoordinates.latLongToNumbers(mapInitialState.center),
        }}
        modules={['geocode']}
        onBoundsChange={onBoundsChange}
      >
        {map(waypoints, (waypoint: TWaypoint) => (
          <Placemark
            key={String(waypoint.id)}
            waypoint={waypoint}
          />
        ))}
        <Polyline geometry={map(
          getRoutePoints(),
          (coordinates: TCoordinates) =>
            mapCoordinates.latLongToNumbers(coordinates),
        )}
        />
        <ZoomControl options={{ float: 'right' }} />
      </StyledMap>
    </YMaps>
  )
})
