import styled from 'styled-components'

import { Map } from 'react-yandex-maps'

export const StyledMap = styled(Map)`
  width: 60%;
  height: auto;
  margin-left: 10px;

  @media ${'(max-width: 992px)'} {
    width: 100%;
    height: 50vh;
    margin: -10px 0 10px;
  }
`
