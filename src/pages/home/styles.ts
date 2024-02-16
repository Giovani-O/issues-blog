import styled from 'styled-components'

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 208px;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 768px) {
    left: auto;
    transform: none;
  }
`
