import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 15px);
  display: flex;
  justify-content: center;

  @media ${'(max-width: 992px)'} {
    min-height: 100vh;
  }
`

export const MainSection = styled.div`
  display: flex;
  width: 1200px;
  background-image: url(${'/images/background.png'});
  background-color: #f2f2f2;
  background-repeat: repeat;
  padding: 20px 10px;
  box-sizing: border-box;

  @media ${'(max-width: 992px)'} {
    flex-direction: column-reverse;
    justify-content: flex-end;
    width: 100%;
  }
`
