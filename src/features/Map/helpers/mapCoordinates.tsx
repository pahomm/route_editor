import { TCoordinates } from 'stores/YMap'

const numbersToLatLong = (coordinates: Array<number>): TCoordinates => ({
  latitude: coordinates[0],
  longitude: coordinates[1],
})

const latLongToNumbers = ({
  latitude,
  longitude,
}: TCoordinates): Array<number> => [latitude, longitude]

export const mapCoordinates = {
  latLongToNumbers,
  numbersToLatLong,
}
