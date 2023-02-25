import { PaymentMethodContainer, ContentContainer } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode,
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodProps>(({icon, label, id, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
