/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Placemark as YMapsPlacemark,
  withYMaps,
  WithYMapsProps,
} from 'react-yandex-maps'

import { TWaypoint } from 'stores/YMap'

import { mapCoordinates } from '../../helpers/mapCoordinates'
import { usePlacemark } from './hooks'

type TPlacemarkProps = {
  waypoint: TWaypoint,
}

export const Placemark = ({ waypoint }: TPlacemarkProps) => {
  const PlacemarkFC = useMemo(() => observer(({ ymaps }: WithYMapsProps) => {
    const { onDragEnd, onGeometryChange } = usePlacemark({ waypoint, ymaps })

    return (
      <YMapsPlacemark
        geometry={mapCoordinates.latLongToNumbers(waypoint.coordinates)}
        properties={{
          balloonContentBody: waypoint.name,
          balloonContentFooter: waypoint.address,
        }}
        options={{ draggable: true }}
        onGeometryChange={onGeometryChange}
        onDragEnd={onDragEnd}
        modules={['geoObject.addon.balloon']}
      />
    )
  }), [waypoint])

  const ConnectedPlacemark = useMemo(() => withYMaps(
    PlacemarkFC,
    true,
    ['geocode'],
  ), [PlacemarkFC])

  // @ts-expect-error
  return (<ConnectedPlacemark />)
}
