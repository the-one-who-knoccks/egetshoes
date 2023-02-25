import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 800;
  background: ${(props) => props.theme.colors.purple};
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;

  transition: 0.4s;
  line-height: 1.3rem;

  & svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.purple};

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['light-purple']};
  }
`
