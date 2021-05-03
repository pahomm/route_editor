import React from 'react'
import { observer } from 'mobx-react-lite'
import { DragDropContext } from 'react-beautiful-dnd'

import { Droppable } from 'features/common/Droppable'

import { WaypointsList } from './components/WaypointsList'
import { useWaypoints } from './hooks'
import {
  WaypointsContainer,
  NewWaypointInput,
  DroppableCustomStyles,
} from './styled'

const newWaypointInputID = 'new waypoint input'

export const Waypoints = observer(() => {
  const {
    inputChangeHandler,
    inputValue,
    onDragEnd,
    onDragUpdate,
  } = useWaypoints(newWaypointInputID)

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <WaypointsContainer>
        <NewWaypointInput
          id={newWaypointInputID}
          placeholder='enter waypoint title and press Enter...'
          onChange={inputChangeHandler}
          value={inputValue}
        />
        <Droppable
          droppableId='waypoints'
          customStyles={DroppableCustomStyles}
        >
          <WaypointsList />
        </Droppable>
      </WaypointsContainer>
    </DragDropContext>
  )
})
