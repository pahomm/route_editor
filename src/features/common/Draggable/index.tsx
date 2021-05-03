import React from 'react'
import {
  Draggable as DnDDraggable,
  DraggableProvided,
} from 'react-beautiful-dnd'

import styled from 'styled-components'

import { customStylesMixin, TCustomStyles } from 'utils/CustomStyles'

type TDraggableProps = {
  children?: React.ReactNode,
  customStyles?: TCustomStyles,
  draggableId: string,
  index: number,
}

const StyledDiv = styled.div`
  ${customStylesMixin}
`

export const Draggable = ({
  children,
  customStyles,
  draggableId,
  index,
}: TDraggableProps) => (
  <DnDDraggable draggableId={draggableId} index={index}>
    {(provided: DraggableProvided) => (
      <StyledDiv
        customStyles={customStyles}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {children}
      </StyledDiv>
    )}
  </DnDDraggable>
)
