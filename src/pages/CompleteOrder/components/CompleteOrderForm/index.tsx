import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { useState } from 'react'
import { Button } from '../../../../components/Button'

export function CompleteOrderForm() {
  const [actualDay] = useState(new Date())
  const theme = useTheme()

  return (
    <CompleteOrderFormContainer>
      <h1>Complete seu pedido</h1>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={theme.colors.purple} />}
        />

        <span>
          {format(actualDay, 'dd MMMM yyyy, HH:MM', {
            locale: ptBR,
          })}
        </span>

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={theme.colors.purple} />}
        />

        <PaymentMethodOptions />
        <Button text="Confirmar pedido" type="submit" />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
