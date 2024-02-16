import styled from 'styled-components'

export const SearchForm = styled.form`
  width: 100%;
  max-width: 864px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 72px;

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

    @media (max-width: 768px) {
    }
  }
`
