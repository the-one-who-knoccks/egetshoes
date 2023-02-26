import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors.paymentMethod?.message as string
  return (
    <PaymentMethodsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          id={key}
          icon={icon}
          label={label}
          value={key}
          key={label}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodsContainer>
  )
}
