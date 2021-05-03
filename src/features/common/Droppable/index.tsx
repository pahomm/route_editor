import React from 'react'
import {
  Droppable as DnDDroppable,
  DroppableProvided,
} from 'react-beautiful-dnd'

import styled from 'styled-components'

import { customStylesMixin, TCustomStyles } from 'utils/CustomStyles'

type TDroppableProps = {
  children?: React.ReactNode,
  customStyles?: TCustomStyles,
  droppableId: string,
}

const StyledDiv = styled.div`
  ${customStylesMixin}
`

export const Droppable = ({
  children,
  customStyles,
  droppableId,
}: TDroppableProps) => (
  <DnDDroppable droppableId={droppableId}>
    {(provided: DroppableProvided) => (
      <StyledDiv
        ref={provided.innerRef}
        {...provided.droppableProps}
        customStyles={customStyles}
      >
        {children}
        {provided.placeholder}
      </StyledDiv>
    )}
  </DnDDroppable>
)
