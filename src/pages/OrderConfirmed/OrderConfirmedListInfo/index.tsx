import { OrderConfirmedInfoListItem, IconContainer } from './styles'
import { ReactNode } from 'react'

export interface ItemProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function OrderConfirmedListInfo({ icon, text, iconBg }: ItemProps) {
  return (
    <OrderConfirmedInfoListItem>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </OrderConfirmedInfoListItem>
  )
}
