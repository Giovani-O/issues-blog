import styled from 'styled-components'
import Cover from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;

  display: flex;
  align-items: baseline;
  justify-content: center;

  background-image: url(${Cover});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img {
    margin-top: 64px;
    max-width: 148px;
  }
`
