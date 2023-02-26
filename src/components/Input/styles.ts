import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${(props) => props.theme.colors.error};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

interface InputStyledContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyledContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s;
  overflow: hidden;

  svg {
    margin-left: 0.5rem;
    display: flex;
    color: ${(props) => props.theme.colors['base-label']};
  }

  &:focus-within {
    border-color: ${(props) => props.theme.colors['light-purple']};
  }

  ${(props) =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.error};
    `}
`

export const InputStyled = styled(InputMask)`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors['base-label']};
`
