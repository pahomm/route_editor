import {
  useState,
  useEffect,
  BaseSyntheticEvent,
} from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { useStore } from 'hooks'

export const useWaypoints = (newWaypointInputID: string) => {
  const {
    yMap: {
      addWaypoint,
      clearTempReorderIdxs,
      moveWaypoint,
      setTempReorderIdxs,
    },
  } = useStore()
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (e: BaseSyntheticEvent) => {
    setInputValue(e.target.value)
  }

  const onDragEnd = (result: DropResult) => {
    clearTempReorderIdxs()
    const { destination, source } = result
    if (destination && destination.index !== source.index) {
      moveWaypoint(source.index, destination.index)
    }
  }

  const onDragUpdate = (result: DropResult) => {
    const { destination, source } = result
    if (destination) {
      setTempReorderIdxs(source.index, destination.index)
    }
  }

  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      if (
        e.key === 'Enter'
        && document.activeElement
          === document.getElementById(newWaypointInputID)
        && inputValue !== ''
      ) {
        addWaypoint(inputValue)
        setInputValue('')
      }
    }

    document.addEventListener(
      'keypress',
      eventHandler,
      false,
    )

    return () => document.removeEventListener('keypress', eventHandler)
  }, [addWaypoint, inputValue, newWaypointInputID])

  return {
    inputChangeHandler,
    inputValue,
    onDragEnd,
    onDragUpdate,
  }
}
