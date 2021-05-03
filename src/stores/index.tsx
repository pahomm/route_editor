import { YMapStore } from './YMap'

const storesList = {}

export const rootStore = Object.assign(storesList, {
  yMap: YMapStore,
})

export type TRootStore = typeof rootStore
