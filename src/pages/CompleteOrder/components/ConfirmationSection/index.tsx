import { Button } from '../../../../components/Button'

import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <Button text="Confirmar pedido" type="submit" />
    </ConfirmationSectionContainer>
  )
}
