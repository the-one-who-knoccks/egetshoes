import styled, { css } from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['light-purple']};
      color: ${theme.colors.white};
      border-color: ${theme.colors.purple};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }

      &:hover {
        background: ${theme.colors['light-purple']};
      }
    `}
  }
`

export const Content = styled.div`
  cursor: pointer;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`
