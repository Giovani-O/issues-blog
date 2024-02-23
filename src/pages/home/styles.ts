import styled from 'styled-components'

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 208px;
  width: 100%;

  form {
    width: inherit;
  }
`

export const SearchForm = styled.form`
  width: 100%;
  max-width: 864px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  h5 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  input {
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 12px 16px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.highlight};
    }
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const IssuesGrid = styled.section`
  display: grid;

  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  height: 100%;
  width: 100%;
  max-width: 864px;
  margin: 48px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`

export const IssueCard = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 32px;
  width: 416px;
  height: 260px;
  cursor: pointer;
  border: 2px solid transparent;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};

    word-wrap: break-word;
    width: 260px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h5 {
    font-size: 0.875rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-span']};
  }

  span {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-text']};

    word-wrap: break-word;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      width: 200px;
    }
  }
`
