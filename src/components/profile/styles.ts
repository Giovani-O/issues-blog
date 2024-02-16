import styled from 'styled-components'

export const ProfileWrapper = styled.section`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-pofile']};
  width: 100%;
  max-width: 864px;
  padding: 32px 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  img {
    min-width: 148px;
    min-height: 148px;
    max-width: 148px;
    max-height: 148px;
    border-radius: 8px;
    margin-right: 32px;
  }

  article {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    flex-direction: column;
    justify-content: center;
    padding: 32px 16px;

    img {
      margin: 0 0 24px 0;
    }
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.highlight};
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.highlight};
  }
`

export const ProfileBio = styled.div`
  margin-bottom: 24px;
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 24px;

  span {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`
