import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Button } from '../../../../components/Button'
import { TitleText } from '../../../../components/Typography'
import { AddressForm } from '../AdressForm'
import { PaymentMethods } from '../PaymentMethods'

import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color={'text-h1'}>
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine size={22} />}
          title="Endereço de entrega"
          subtitle="Infome o endereço onde deseja receber o seu pedido"
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethods />
        <Button type="submit" text="Finalizar pedido" />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
