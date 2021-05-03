import { useEffect, useCallback } from 'react'
import { YMapsApi } from 'react-yandex-maps'

import { Event, Placemark as TPlacemark } from 'yandex-maps'

import { TWaypoint } from 'stores/YMap'

import { mapCoordinates } from '../../helpers/mapCoordinates'

type TUsePlacemark = {
  waypoint: TWaypoint,
  ymaps: YMapsApi,
}

export const usePlacemark = ({ waypoint, ymaps }: TUsePlacemark) => {
  const fetchAddress = useCallback(async(coordinates: Array<number>) => {
    const response = await ymaps.geocode(coordinates)
    const address = response.geoObjects.get(0).properties.get('name')
    waypoint.setAddress(address)
  }, [waypoint, ymaps])

  const onGeometryChange = (e: Event) => {
    const placemark = e.get('target') as TPlacemark

    if (placemark.geometry !== null) {
      const newCoordinates = placemark.geometry.getCoordinates()

      if (newCoordinates) {
        waypoint.setCoordinates(
          mapCoordinates.numbersToLatLong(newCoordinates),
        )
      }
    }
  }

  const onDragEnd = async(e: Event) => {
    waypoint.setAddress('loading...')

    const target = e.get('target') as TPlacemark
    if (target.geometry !== null) {
      const newCoordinates = target.geometry.getCoordinates()
      if (newCoordinates) {
        fetchAddress(newCoordinates)
      }
    }
  }

  useEffect(() => {
    fetchAddress(mapCoordinates.latLongToNumbers(waypoint.coordinates))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAddress])

  return {
    onDragEnd,
    onGeometryChange,
  }
}
