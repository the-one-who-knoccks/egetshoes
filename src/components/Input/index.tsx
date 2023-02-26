/* eslint-disable react/display-name */
/* eslint-disable n/handle-callback-err */
import React, { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  InputStyleContainer,
  InputWrapper,
  StyledInput,
  RightPlaceholder,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightPlaceholder?: string
  icon?: React.ComponentType
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, icon: Icon, rightPlaceholder, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          {Icon && <Icon />}
          <StyledInput {...props} ref={ref} />
          {rightPlaceholder && (
            <RightPlaceholder>{rightPlaceholder}</RightPlaceholder>
          )}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
