import { darken } from 'polished'
import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme.colors['yellow-light']};
    border-color: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors['yellow-dark']};

    &:hover {
      background: ${(props) => props.theme.colors['yellow-light']};
      color: ${(props) => props.theme.colors['yellow-dark']};
    }

    svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.colors['base-text']};
  }

  user-select: none;
`

export const Button = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 14px 20px;

  font-weight: bold;
  text-transform: uppercase;
  transition: background 180ms ease-in-out;
  @media (max-width: 520px) {
    margin-top: 20px;
    width: 100%;
    padding: 20px;
  }
  &:hover {
    background: ${darken(0.04, '#7159c1')};
  }
`