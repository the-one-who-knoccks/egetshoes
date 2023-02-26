import React, { forwardRef, InputHTMLAttributes } from 'react'
import ReactInputMask from 'react-input-mask'
import {
  InputStyleContainer,
  InputWrapper,
  InputStyled,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
  mask?: string
  icon?: React.ComponentType
}

export const Input = forwardRef<ReactInputMask, InputProps>(
  ({ error, className, icon: Icon, rightText, mask, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          {Icon && <Icon />}
          <InputStyled
            mask={mask || ''}
            onChange={props.onChange}
            value={props.value}
            {...props}
            ref={ref}
          />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <p>{error}</p>}
      </InputWrapper>
    )
  },
)
