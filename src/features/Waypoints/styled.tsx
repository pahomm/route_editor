import styled, { css } from 'styled-components'

export const WaypointsContainer = styled.div`
  background-color: rgba(10, 10, 10, 0.1);
  box-sizing: border-box;
  width: 40%;
  min-height: 300px;
  padding: 15px 20px;
  border-radius: 10px;

  @media ${'(max-width: 992px)'} {
    width: 100%;
  }
`

export const NewWaypointInput = styled.input`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border-radius: 7px;
  padding-left: 5px;
  border: 2px solid grey;

  :focus {
    border: 3px solid grey;
    outline: none;
    overflow: hidden;
  }
`

export const DroppableCustomStyles = css`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`
