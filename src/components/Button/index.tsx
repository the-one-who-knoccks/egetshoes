import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
  icon?: React.ComponentType
}

export const Button = ({ text, icon: Icon, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      {text}
      {Icon && <Icon />}
    </ButtonContainer>
  )
}
