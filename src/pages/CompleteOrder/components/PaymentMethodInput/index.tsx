/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentMethodInputContainer, Content } from './styles'

type PaymentMethodsInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodsInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <Content>
          {icon}
          {label}
        </Content>
      </label>
    </PaymentMethodInputContainer>
  )
})
