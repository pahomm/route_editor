import { TCoordinates } from 'stores/YMap'

type TMapInitialState = {
  center: TCoordinates,
  controls: Array<String>,
  zoom: number,
}

export const mapInitialState: TMapInitialState = {
  center: {
    latitude: 55.75,
    longitude: 37.57,
  },
  controls: [],
  zoom: 9,
}

export const apiKey = 'f9005fc3-202f-4499-8dba-f2bb49d3ec5a'
